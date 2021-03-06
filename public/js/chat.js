var userGroup = 0;

// A loading image URL.
var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';
// Template for messages.
var MESSAGE_TEMPLATE =
    '<div class="message-container">' +
    '<div class="spacing"><div class="pic"></div></div>' +
    '<div class="message"></div>' +
    '<div class="name"></div>' +
    '</div>';

// Returns true if user is signed-in. Otherwise false and displays a message.
function checkSignedInWithMessage() {
    // Return true if the user is signed in Firebase
    if (isUserSignedIn()) {
        return true;
    }

    // Display a message to the user using a Toast.
    var data = {
        message: 'You must sign-in first',
        timeout: 2000
    };
    signInSnackbarElement.MaterialSnackbar.showSnackbar(data);
    return false;
}


// Saves a new message on the Cloud Firestore.
function saveMessage(messageText) {
    // Add a new message entry to the Firebase database.
    return firebase.firestore().collection('group').doc(userGroup).collection("messages").add({
        name: getUserName(),
        text: messageText,
        profilePicUrl: getProfilePicUrl(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function (error) {
        console.error('Error writing new message to Firebase Database', error);
    });
}

// Loads chat messages history and listens for upcoming ones.
function loadMessages() {
    findU().then(reu => {
        console.log(reu.uid);
        findGroup(reu.uid).then(reu => {
            userGroup = reu
            // Create the query to load the last 12 messages and listen for new ones.
            var query = firebase.firestore().collection('group').doc(userGroup).collection("messages").orderBy('timestamp', 'desc').limit(12);

            // Start listening to the query.
            query.onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type === 'removed') {
                        deleteMessage(change.doc.id);
                    } else {
                        var message = change.doc.data();
                        displayMessage(change.doc.id, message.timestamp, message.name,
                            message.text, message.profilePicUrl, message.imageUrl);
                    }
                });
            });
        });
    });
}

// Saves a new message containing an image in Firebase.
// This first saves the image in Firebase storage.
function saveImageMessage(file) {
            // 1 - We add a message with a loading icon that will get updated with the shared image.
            firebase.firestore().collection('group').doc("10").collection("messages").add({
                name: getUserName(),
                imageUrl: LOADING_IMAGE_URL,
                profilePicUrl: getProfilePicUrl(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(function (messageRef) {
                // 2 - Upload the image to Cloud Storage.
                var filePath = firebase.auth().currentUser.uid + '/' + messageRef.id + '/' + file.name;
                return firebase.storage().ref(filePath).put(file).then(function (fileSnapshot) {
                    // 3 - Generate a public URL for the file.
                    return fileSnapshot.ref.getDownloadURL().then((url) => {
                        // 4 - Update the chat message placeholder with the image’s URL.
                        return messageRef.update({
                            imageUrl: url,
                            storageUri: fileSnapshot.metadata.fullPath
                        });
                    });
                });
            }).catch(function (error) {
                console.error('There was an error uploading a file to Cloud Storage:', error);
            });
        }


// Triggered when a file is selected via the media picker.
function onMediaFileSelected(event) {
            event.preventDefault();
            var file = event.target.files[0];

            // Clear the selection in the file picker input.
            imageFormElement.reset();

            // Check if the file is an image.
            if (!file.type.match('image.*')) {
                var data = {
                    message: 'You can only share images',
                    timeout: 2000
                };
                signInSnackbarElement.MaterialSnackbar.showSnackbar(data);
                return;
            }
            // Check if the user is signed-in
            if (checkSignedInWithMessage()) {
                saveImageMessage(file);
            }
        }

// Triggered when the send new message form is submitted.
function onMessageFormSubmit(e) {
            e.preventDefault();
            // Check that the user entered a message and is signed in.
            if (messageInputElement.value && checkSignedInWithMessage()) {
                saveMessage(messageInputElement.value).then(function () {
                    // Clear message text field and re-enable the SEND button.
                    resetMaterialTextfield(messageInputElement);
                    toggleButton();
                });
            }
        }

// Resets the given MaterialTextField.
function resetMaterialTextfield(element) {
            element.value = '';
            element.parentNode.MaterialTextfield.boundUpdateClassesHandler();
        }

// Enables or disables the submit button depending on the values of the input
// fields.
function toggleButton() {
            if (messageInputElement.value) {
                submitButtonElement.removeAttribute('disabled');
            } else {
                submitButtonElement.setAttribute('disabled', 'true');
            }
        }


// Delete a Message from the UI.
function deleteMessage(id) {
            var div = document.getElementById(id);
            // If an element for that message exists we delete it.
            if (div) {
                div.parentNode.removeChild(div);
            }
        }

function createAndInsertMessage(id, timestamp) {
            const container = document.createElement('div');
            container.innerHTML = MESSAGE_TEMPLATE;
            const div = container.firstChild;
            div.setAttribute('id', id);

            // If timestamp is null, assume we've gotten a brand new message.
            timestamp = timestamp ? timestamp.toMillis() : Date.now();
            div.setAttribute('timestamp', timestamp);

            // figure out where to insert new message
            const existingMessages = messageListElement.children;
            if (existingMessages.length === 0) {
                messageListElement.appendChild(div);
            } else {
                let messageListNode = existingMessages[0];

                while (messageListNode) {
                    const messageListNodeTime = messageListNode.getAttribute('timestamp');

                    if (!messageListNodeTime) {
                        throw new Error(
                            `Child ${messageListNode.id} has no 'timestamp' attribute`
                        );
                    }

                    if (messageListNodeTime > timestamp) {
                        break;
                    }

                    messageListNode = messageListNode.nextSibling;
                }

                messageListElement.insertBefore(div, messageListNode);
            }

            return div;
        }


// Displays a Message in the UI.
function displayMessage(id, timestamp, name, text, picUrl, imageUrl) {
            var div = document.getElementById(id) || createAndInsertMessage(id, timestamp);

            // profile picture
            if (picUrl) {
                div.querySelector('.pic').style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(picUrl) + ')';
            }

            div.querySelector('.name').textContent = name;
            var messageElement = div.querySelector('.message');

            if (text) { // If the message is text.
                messageElement.textContent = text;
                // Replace all line breaks by <br>.
                messageElement.innerHTML = messageElement.innerHTML.replace(/\n/g, '<br>');
            } else if (imageUrl) { // If the message is an image.
                var image = document.createElement('img');
                image.addEventListener('load', function () {
                    messageListElement.scrollTop = messageListElement.scrollHeight;
                });
                image.src = imageUrl + '&' + new Date().getTime();
                messageElement.innerHTML = '';
                messageElement.appendChild(image);
            }
            // Show the card fading-in and scroll to view the new message.
            setTimeout(function () { div.classList.add('visible') }, 1);
            messageListElement.scrollTop = messageListElement.scrollHeight;
            messageInputElement.focus();
        }

// Saves message on form submit.
messageFormElement.addEventListener('submit', onMessageFormSubmit);

    // Toggle for the button.
    messageInputElement.addEventListener('keyup', toggleButton);
    messageInputElement.addEventListener('change', toggleButton);

    // Events for image upload.
    imageButtonElement.addEventListener('click', function (e) {
        e.preventDefault();
        mediaCaptureElement.click();
    });
    mediaCaptureElement.addEventListener('change', onMediaFileSelected);

    // We load currently existing chat messages and listen to new ones.

    function findU(x) {
        return new Promise((resolve, reject) => {
            console.log("C'est fait");
            // réussir une fois sur deux
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    resolve(user);
                } else {
                    // No user is signed in.
                    reject("Échec");
                }
            });
        })
    }

    function findGroup(x) {
        return new Promise(resolve => {
            var docRef = firebase.firestore().collection("users").doc(x);

            docRef.get().then(function (doc) {
                if (doc.exists) {
                    //console.log("Document data:", doc.data().group);
                    resolve(doc.data().group);
                } else {
                    // doc.data() will be undefined in this case
                    resolve(0);
                    //console.log("No such document!");
                }
            }).catch(function (error) {
                //console.log("Error getting document:", error);
                resolve(0);
            });

        });
    }
    loadMessages();
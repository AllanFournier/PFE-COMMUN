var choiceOne = document.getElementById("list-option-1");
var choiceTwo = document.getElementById("list-option-2");
var choiceThree = document.getElementById("list-option-3");

var hideUn = document.getElementById("hideOne");
var hideTwo = document.getElementById("hideTwo");
var hideThree = document.getElementById("hideThree");

var signTest = document.getElementById('signT');
signTest.addEventListener('click', signTesting);

var upTe = document.getElementById('upT');
upTe.addEventListener('click', userUpdate);

function signTesting() {
  var email = "toto@gmail.com";
  var password = "toto59";
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function userUpdate() {
  console.log("up")
  var user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: "Jane",
    photoURL: "https://fakeimg.pl/350x200/ff0000/000"
  }).then(function () {
    // Update successful.
  }).catch(function (error) {
    // An error happened.
  });

}

choiceOne.addEventListener('click', sendOne);
choiceTwo.addEventListener('click', sendTwo);
choiceThree.addEventListener('click', sendThree);

function sendOne() {
  console.log("select one");
  updateChoice("A");
}
function sendTwo() {
  console.log("select two");
  updateChoice("B");
}
function sendThree() {
  console.log("select three");
  updateChoice("C");
}

function updateNames() {
  console.log("up");
  console.log(choixQuestion["nomA"]);
  console.log(choixQuestion["nomB"]);
  console.log(choixQuestion["nomC"]);
  hideUn.innerHTML = choixQuestion["nomA"];
  hideTwo.innerHTML = choixQuestion["nomB"];
  hideThree.innerHTML = choixQuestion["nomC"];
  resetNames();
}

function resetNames() {
  choixQuestion["nomA"] = "";
  choixQuestion["nomB"] = "";
  choixQuestion["nomC"] = "";
}

let choixQuestion = {
  nomA: "",
  nomB: "",
  nomC: ""
};

function updateChoice(choixU) {

  if (isUserSignedIn()) {
    var refCh = firebase.firestore().collection("session").doc(firebase.auth().currentUser.uid);

    return refCh.set({
      name: getUserName(),
      choix: choixU,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  } else {
    console.log("You must be logged");
  }

}

// Loads  messages history and listens for upcoming ones.
function loadChoice() {
  // Create the query to load the last 12 messages and listen for new ones.
  var query = firebase.firestore()
    .collection('session')
    .orderBy('timestamp', 'desc')
    .limit(4);

  // Start listening to the query.
  query.onSnapshot(function (snapshot) {
    snapshot.forEach(function (doc) {
      var choixAutre = doc.data().choix;
      console.log(choixAutre);
      var nomAutre = doc.data().name;
      console.log(nomAutre);
      if (choixAutre === "C") {
        if (!choixQuestion.nomC.includes(nomAutre))
          choixQuestion["nomC"] += " " + nomAutre;
      } else if (choixAutre === "B") {
        if (!choixQuestion.nomB.includes(nomAutre))
          choixQuestion["nomB"] += " " + nomAutre;
      } else if (choixAutre === "A") {
        if (!choixQuestion.nomA.includes(nomAutre))
          choixQuestion["nomA"] += " " + nomAutre;
      }
    });
    updateNames();
  });

}

loadChoice();
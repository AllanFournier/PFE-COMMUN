const signupForm = document.querySelector("#signup-form");
const signBtn = document.getElementById('btn-signup');

signBtn.addEventListener("click", e => {
  console.log("sign form");
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  const lastname = signupForm["signup-lastname"].value;
  const firstname = signupForm["signup-firstname"].value;

  if (email != null && password != null) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
      query = firebase.firestore().collection("group").doc(group);

      query.get().then(function (doc) {
        if (doc.exists) {
          firebase.firestore().collection("users").doc(cred.user.uid).set({
            lastname: lastname,
            firstname: firstname,
          });
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: firstname + " " +lastname,
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });

      
      //
    }).catch(function (error) {
      console.log(error);
      // ...
    });
  }

})
const signupForm = document.querySelector("#signup-form");
const signBtn = document.getElementById('btn-signup');

signBtn.addEventListener("click", e => {
  console.log("sign form");
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

    if(email != null && password != null){
        firebase.auth().createUserWithEmailAndPassword(email, password).then( cred => {
            console.log(cred);
            document.location.href = "/index.html";
          }).catch(function(error) {
            console.log(error);
            // ...
          });
    }
  
})
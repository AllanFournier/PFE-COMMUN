


//login
const loginForm = document.querySelector("#login-form");
const logBtn = document.getElementById('btn-login')
logBtn.addEventListener("click", e => {
  console.log("enter login form");
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
    console.log("signin");
    console.log(cred);
    console.log("apres cred");
    document.location.href ="/index.html";
    loginForm.reset();
  });
});


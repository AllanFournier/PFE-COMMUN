var questions = [
  {
    question:
      "Quel bijou pouvez-vous porter lorsque vous travaillez dans une entreprise alimentaire ?",
    choices: ["un piercing au nez", "un piercing au nombril", "une montre"],
    correctAnswer: 1
  },
  {
    question:
      "Pouvez-vous porter un gilet par dessus vos vêtements de travail ?",
    choices: ["oui", "non", "uniquement s'il s'agit d'un gilet en coton"],
    correctAnswer: 1
  },
  {
    question: "Comment mettez-vous correctement un filet à cheveux ?",
    choices: [
      "vous mettez uniquement un filet à cheveux lorsque la longueur dépasse de 1 cm",
      "vous mettez le filet à cheveux de sorte qu'aucun cheveu ne dépasse",
      "les oreilles doivents rester dégagés"
    ],
    correctAnswer: 1
  },
  {
    question:
      "Pouvez-vous vous sécher les mains avec une serviette après les avoir lavées ?",
    choices: ["oui", "non", "uniquement avec une serviette en coton"],
    correctAnswer: 2
  },
  {
    question:
      "Lorsque vous êtes enrhumé et que vous devez vous moucher, pouvez-vous ensuite vous remettre au travail ?",
    choices: [
      "oui",
      "non",
      "aprés vous être mouché, vous devez d'abord vous laver les mains avant de vous remettre au travail"
    ],
    correctAnswer: 2
  },
  {
    question:
      "Devez-vous vous laver les mains avant de prendre votre pause déjeuner ?",
    choices: [
      "oui",
      "non",
      "aprés vous être mouché, vous devez d'abord vous laver les mains avant de vous remettre au travail"
    ],
    correctAnswer: 2
  },
  {
    question: "Devez-vous vous laver les mains avant de mettre vos gants ?",
    choices: ["oui", "non", "uniquement lorsque les sutisules sont sales"],
    correctAnswer: 0
  },
  {
    question:
      "Vous allez vider la poubelle. Devez-vous vous laver les mains avant de  reprendre le travail ?",
    choices: ["oui", "non", "pas s'il s'agit d'une poubelle à pédale"],
    correctAnswer: 0
  },
  {
    question:
      "Que faites-vous à coup sur lorsque votre journée de travail est terminée ?",
    choices: [
      "vous jetez votre filet à cheveux à la poubelle",
      "vous rangez votre filet à cheveux pour le lendemain",
      "vous emportez votre filet à cheveux pour le lendemain"
    ],
    correctAnswer: 0
  },
  {
    question: "A quelle régle d'hygiène ce pictogramme correspond-il ?",
    choices: [
      "porter un pull chaud lorsqu'il fait froid",
      "porter des vêtements de travail fermés",
      "seuls les vêtements deux pièces sont autotrisés"
    ],
    correctAnswer: 1
  }
];

var questionCounter = 0;

var currquestion = document.getElementById("currquestion");
var ansOne = document.getElementById("ans0");
var ansTwo = document.getElementById("ans1");
var ansThree = document.getElementById("ans2");

var choiceOne = document.getElementById("list-option-0");
var choiceTwo = document.getElementById("list-option-1");
var choiceThree = document.getElementById("list-option-2");

var hideUn = document.getElementById("hide0");
var hideTwo = document.getElementById("hide1");
var hideThree = document.getElementById("hide2");

var nextq = document.getElementById("next");
var prevq = document.getElementById("prev");

choiceOne.addEventListener('click', sendOne);
choiceTwo.addEventListener('click', sendTwo);
choiceThree.addEventListener('click', sendThree);

nextq.addEventListener('click', nextOne);
prevq.addEventListener('click', prevOne);

function nextOne() {
  console.log("next one");
  if (questionCounter < 9) {
    questionCounter += 1;
    currquestion.innerHTML = questions[questionCounter].question;
    ansOne.innerHTML = questions[questionCounter].choices[0];
    ansTwo.innerHTML = questions[questionCounter].choices[1];
    ansThree.innerHTML = questions[questionCounter].choices[2];
  }

}

function prevOne() {
  console.log("prev one");
  if (questionCounter > 0) {
    questionCounter -= 1;
    currquestion.innerHTML = questions[questionCounter].question;
    ansOne.innerHTML = questions[questionCounter].choices[0];
    ansTwo.innerHTML = questions[questionCounter].choices[1];
    ansThree.innerHTML = questions[questionCounter].choices[2];
  }
}

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
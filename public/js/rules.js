(function() {
  var questions = [
    {
      title: "Leçon 1",
      resume:
        "J'applique les 10 règles d'hygiène à la personne dans le secteur de l'industrie alimentaire"
    },
    {
      title: "Bienvenue dans l'entreprise Nutribel !",
      resume:
        "Prenez le temps de visualiser cette courte vidéo de présentation",
      video: "/media/01.bienvenueNutribel.mp4"
    },
    {
      title: "Je me rends à mon travail",
      subtitle: "Règle 1",
      video: "/media/02.bus_femme.mp4"
    },
    {
      title: "Je me rends à mon travail",
      subtitle: "Règle 1",
      audio: "/media/03.arriveeTravail.mp3",
      resume:
        "Vous êtes presque arrivé au travail. Le bus a du retard et vous désirez vous rendre le plus rapidement possible à votre poste de travail. Vous enlevez vite votre veste, enfilez vos vêtements de travail, vous vous lavez les mains, et vous voilà prêt.",
      question: "Est-ce correct ?",
      radioChoices: ["Oui", "Non"],
      correctAnswer: 1,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title: "Je me rends à mon travail",
      subtitle: "Règle 1",
      resume:
        "Les bijoux visibles sont interdits, dans une entreprise alimentaire.",
      image: "/media/04.bijoux_visibles.jpg",
      question:
        "Cochez les élèments auxquels cela s'applique et cliquez ensuite sur vérifiez",
      checkboxChoices: [
        "montre",
        "bague",
        "pince à cheveux",
        "boucle d'oreille",
        "bracelet",
        "pendentif",
        "piercing de nez",
        "piercing de nombril"
      ],
      correctAnswer: ["1", "2", "3", "5"],
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title: "Je me rends à mon travail",
      subtitle: "Règle 1",
      resume: "Les bijoux constituent un danger pour la santé de vos clients",
      image: "/media/05.bijoux_dangers.jpg",
      question: "Pourquoi ?",
      radioChoices: [
        "des agents pathogénes (comme les bactéries, les virus ou les champignons) peuvent s'y cacher",
        "des élèments peuvent s'en détacher et atterrir dans les denrées alimentaires"
      ],
      correctAnswer: 1,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title: "Je me rends à mon travail",
      subtitle: "Règle 1",
      video: "/media/06.bijoux_doigt.mp4"
    },
    {
      title: "Je me rends à mon travail",
      subtitle: "Règle 1",
      resume: "Première règle d'hygiène en vigueur chez Nutribel:",
      imageLeft: "/media/07.regle_1.jpg",
      imageDescription: "Pas de Bijoux"
    },
    {
      title: "Leçon 2",
      resume:
        "J'applique les règles d'arrivée sur le lieu de travail et de bonne hygiène vestimentaire"
    },
    {
      title: "J'arrive sur mon lieu de travail",
      subtitle: "Règle 2",
      resume:
        "Vous voilà arrivé chez Nutribel. Voici le plan de l'entreprise. Où vous rendez-vous en premier lieu ? Cliquez sur l'endroit approprié dans le schéma.",
      imageToSelect: "/media/08.arriveeNutribel.png"
    },
    {
      title: "J'arrive sur mon lieu de travail",
      subtitle: "Règle 2",
      resume: "Bien vous avez rangé veste et bijoux dans votre armoire.",
      question: "Pouvez-vous maintenant pénétrer dans l'atelier ?",
      radioChoices: ["Oui", "Non"],
      correctAnswer: 1,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title: "Je m'habille pour le travail",
      subtitle: "Règle 2",
      question:
        "Pouvez-vous porter un pull chaud par-dessus vos vêtements de travail ?",
      radioChoices: ["Oui", "Non"],
      correctAnswer: 1,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title: "Je m'habille pour le travail",
      subtitle: "Règle 2",
      resume:
        "Ce qui nous mène à la seconde règle d'hygiène en vigueur chez Nutribel:",
      imageLeft: "/media/11.regle_2.png",
      imageDescription: "Porter des vêtements de travail fermés"
    },
    {
      title: "Je m'habille pour le travail",
      subtitle: "Règle 3",
      resume:
        "Vous observez les vestiaires et constatez que certains collègues n'ont pas bien mis leur filet à cheveux. cliquez sur eux puis sur le bouton vérifier."
    },
    {
      title: "Je m'habille pour le travail",
      subtitle: "Règle 3",
      video: "/media/13.filetcheveux2.mp4"
    },
    {
      title: "Je m'habille pour le travail",
      subtitle: "Règle 3",
      resume: "Et nous voici à la règle d'hygiène N°3",
      imageLeft: "/media/14.regle_3.png",
      imageDescription: "Aucun cheveu visible"
    },
    {
      title: "Leçon 3",
      resume: "J'applique les règles d'hygiène de l'atelier"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 4",
      resume:
        "Vous voici dans l'atelier. Vous avez enlevé tous vos bijoux. Vous portez vos vêtements de travail et ils sont fermés. Vos cheveux sont parfaitement recouverts.",
      question: "Pouvez vous vous mettre directement au travail",
      radioChoices: ["Oui", "Non"],
      correctAnswer: 1,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 4",
      resume:
        "Comment obtenir dix doigts propres en 10 étapes ? Cliquez sur l'image pour visualiser la vidéo puis continuer en cliquant sur le bouton suivant",
      imageCenter: "/media/16.10doigtspropres_doigt1-propre.png"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Mains - Règle 4",
      resume:
        "Vous devez vous rincer abondamment les mains aptès les avoir lavées.",
      question:
        "Les restes de savon constituent en effet un danger pour vos produits et vos clients. De quel ordre ?",
      radioChoices: ["(micro)-biologique", "physique", "chimique"],
      correctAnswer: 2,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 4",
      resume: "Voici donc la règle d'hygiène n°4 :",
      imageLeft: "/media/19.regles_4.png",
      imageDescription: "10 doigts propres"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 5",
      resume:
        "Après les avoir lavées et rincées, vous vous séchez les mains à l'aide de papier jetable.",
      question: "Une serviette conviendrait-elle aussi ?",
      radioChoices: ["oui", "non"],
      correctAnswer: 1,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 5",
      resume:
        "Vous voilà maintenant à votre poste de travail. Votre nez commence à vous démanger.",
      question: "Vous vous grattez un peu et vous vous remettez au travail ?",
      radioChoices: ["oui", "non"],
      correctAnswer: 1,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 5",
      video: "/media/21.demangeaisons2.mp4"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 5",
      resume:
        "Votre collègue est allergique aux fleurs et doit fréquemment éternuer.",
      question:
        "Après avoir éternué, doit-il à chaque fois se laver les mains ?",
      radioChoices: ["oui", "non"],
      correctAnswer: 0,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 5",
      video: "/media/23.demangeaisons4.mp4"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 5",
      resume: "La règle d'hygiène n°5 est donc la suivante :",
      imageLeft: "/media/24.regle_5.png",
      imageDescription:
        "Lavez-vous les mains lorsque vous vous grattez ou éternuez"
    },
    {
      title: "Je fais une pause déjeuner",
      subtitle: "Règle 6",
      video: "/media/27.pause2.mp4"
    },
    {
      title: "Je fais une pause déjeuner",
      subtitle: "Règle 6",
      resume: "Ce qui nous amène à la régle d'hygiène n°6 :",
      imageLeft: "/media/28.regle_6.png",
      imageDescription: "Ne pas manger, boire ou fumer"
    },
    {
      title: "Je travail au sein d'une équipe",
      subtitle: "Règle 7",
      resume:
        "Au cours de la pause, vous discutez avec Caroline qui commence le travail.",
      question:
        "Elle a une petite blessure à la main : son chat l'a griffé. Il faut y appliquer un sparadrap. Lequel lui conseillez-vous ?",
      imageChoices: [
        "/media/29.blessure_2sparadraps-bleu.jpg",
        "/media/29.blessure_2sparadraps-jaune.jpg"
      ],
      correctAnswer: 0,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 7",
      question:
        "Caroline doit-elle se laver les mains avant d'appliquer le pansement et de mettre des gants ?",
      radioChoices: ["oui", "non"],
      correctAnswer: 0,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 7",
      video: "/media/31.maladie.mp4"
    },
    {
      title:
        "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
      subtitle: "Règle 7",
      resume: "Et voici la règle d'hygiène n°7 :",
      imageLeft: "/media/32.regle_7.png",
      imageDescription: "Couvrez toute blessure et signalez toute maladie"
    },
    {
      title: "J'évolue dans mon environnement de travail",
      subtitle: "Règle 8",
      resume:
        "Vous êtes au tavail depuis quelques heures, et avez travaillé de façon propre et ordonnée : vous avez immédiatement jeté dans le container approprié les objets inutiles tels que les emballages ; vous avez immédiatement nettoyé toute salissure. Maintenant, vous devez aller d'urgence aux toilettes.",
      question:
        "Vous lavez-vous les mains avant ou après le passage aux toillettes ?",
      radioChoices: ["Avant", "Après"],
      correctAnswer: 1,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title: "J'évolue dans mon environnement de travail",
      subtitle: "Règle 8",
      resume: "Vous devez évacuer quelques déchets.",
      question: "Devez-vous vous laver les mains par la suite ?",
      radioChoices: ["oui", "non"],
      correctAnswer: 0,
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title: "J'évolue dans mon environnement de travail",
      subtitle: "Règle 8",
      resume: "Voici donc la règle d'hygiène n°8 :",
      imageLeft: "/media/35.regle_8.png",
      imageDescription:
        "Lavez-vous les mains après tout passage aux toilettes et après tout autre travail"
    },
    {
      title: "Je fais face à une situation inattendue",
      subtitle: "Règle 9",
      resume:
        "Une machine de l'atelier doit être réparée. Le technicien arrive.",
      question: "Que doit-il absolument faire ?",
      checkboxChoices: [
        "enlever ses bijoux",
        "porter des vêtements de travail",
        "porter un filet à cheveux",
        "se laver les mains"
      ],
      correctAnswer: ["0", "1", "2"],
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title: "Je fais face à une situation inattendue",
      subtitle: "Règle 9",
      video: "/media/36.insectes.mp4"
    },
    {
      title: "Je fais face à une situation inattendue",
      subtitle: "Règle 9",
      resume: "Nous en déduisons la régle d'hygiène n°9:",
      imageLeft: "/media/37.regle_9.png",
      imageDescription: "Empêchez les animaux nuisibles et insectes d'entrer"
    },
    {
      title: "Je quitte mon lieu de travail",
      subtitle: "Règle 10",
      resume:
        "Vous n'avez pas vu passer la journée. Le travail est terminé. Vous pouvez rentrer à la maison.",
      question: "Que faites-vous ?",
      checkboxChoices: [
        "vous vous laver les mains",
        "vous emmenez vos vêtements de travail à la maison pour demain",
        "vous accrochez vos vêtements de travail pour demain",
        "vous deposez vos vêtements de travail dans le bac de linge sale",
        "vous emmenez votre filet à cheveux à la maison pour demain",
        "vous jetez votre filet à cheveux à la poubelle",
        "vous rangez votre filet à cheveux pour demain"
      ],
      correctAnswer: ["0", "3", "5"],
      correctResponse: "Exact",
      incorrectResponse: "Faux"
    },
    {
      title: "Je quitte mon lieu de travail",
      subtitle: "Règle 10",
      resume: "Nous voici arrivés à la dernière régle d'hygiène :",
      imageLeft: "/media/39.regle_10.png",
      imageDescription: "Ne laissez aucune chance aux micro-organismes"
    },
    {
      title: "Les 10 règles de l'hygiène",
      resume:
        "Si vous désirez revoir une règle, cliquez dessus. Vous pouvez imprimer une carte aide mémoire en cliquant sur le bouton imprimer",
      imageResume: [
        "/media/07.regle_1.jpg",
        "/media/11.regle_2.png",
        "/media/14.regle_3.png",
        "/media/19.regles_4.png",
        "/media/24.regle_5.png",
        "/media/28.regle_6.png",
        "/media/32.regle_7.png",
        "/media/35.regle_8.png",
        "/media/37.regle_9.png",
        "/media/39.regle_10.png"
      ],
      imageResumeDescription: [
        "Pas de Bijoux",
        "Porter des vêtements de travail fermés",
        "Aucun cheveu visible",
        "10 doigts propres",
        "Lavez-vous les mains lorsque vous vous grattez ou éternuez",
        "Ne pas manger, boire ou fumer",
        "Couvrez toute blessure et signalez toute maladie",
        "Lavez-vous les mains après tout passage aux toilettes et après tout autre travail",
        "Empêchez les animaux nuisibles et insectes d'entrer",
        "Ne laissez aucune chance aux micro-organismes"
      ]
    }
  ];

  var pageCounter = current;
  var quiz = $("#quiz"); //Quiz div object

  // Display initial question
  if (pageCounter === 41) {
    displayNext(1);
  } else {
    displayNext(0);
  }

  // Click handler for the 'next' button
  $("#next").on("click", function(e) {
    e.preventDefault();
    // Suspend click listener during fade animation
    if (quiz.is(":animated")) {
      return false;
    }
    choose(pageCounter);
    pageCounter++;
    displayNext(0);
  });

  function create_map_rule() {
    var pagesNum = 0;
    var pagesNumArray = [];
    var map = {};
    var names = [
      "Règle 1",
      "Règle 2",
      "Règle 3",
      "Règle 4",
      "Règle 5",
      "Règle 6",
      "Règle 7",
      "Règle 8",
      "Règle 9",
      "Règle 10"
    ];
    questions.forEach(element => {
      names.forEach(elementNames => {
        if (
          element.subtitle === elementNames &&
          map[elementNames] === undefined
        ) {
          map[elementNames] = pagesNum;
          pagesNumArray.push(pagesNum);
        }
      });

      pagesNum++;
    });
    return map;
  }

  $("#valid").on("click", function(e) {
    var res = [];

    $("input[type=radio][name='valid']")
      .filter(":checked")
      .each(function() {
        res.push($(this).val());
      });
    console.log("rrrrrrrrrrrr");
    console.log(res);
    e.preventDefault();
    if (quiz.is(":animated")) {
      return false;
    }
    var m = create_map_rule();
    var values = [];
    for (var key in m) {
      if (m.hasOwnProperty(key)) {
        values.push(m[key]);
        if (res == key) {
          pageCounter = m[key];
          displayNext(1);
        }
      }
    }
    console.log(pageCounter);
    console.log(m);
  });

  // Click handler for the 'prev' button
  $("#prev").on("click", function(e) {
    e.preventDefault();
    if (quiz.is(":animated")) {
      return false;
    }
    choose(pageCounter);
    pageCounter--;
    displayNext(0);
  });

  // Animates buttons on hover
  $(".button").on("mouseenter", function() {
    $(this).addClass("active");
  });
  $(".button").on("mouseleave", function() {
    $(this).removeClass("active");
  });

  // Creates and returns the div that contains the questions and the answer
  function createQuestionElement(index) {
    var qElement = $("<div>", {
      id: "question"
    });
    createAudio(qElement);

    var title = $("<h5>").append(questions[index].title + "</h5>");
    qElement.append(title);

    if (questions[index].subtitle != null) {
      var subtitle = $("<h6>").append(questions[index].subtitle + "</h6>");
      qElement.append(subtitle);
    }

    var resume = $("<p>").append(questions[index].resume);
    qElement.append(resume);

    //createTextToComplet(qElement);

    createImageOrientation(
      questions[index].imageCenter,
      qElement,
      "center",
      300
    );

    if (questions[index].imageDescription != null) {
      var des = $("<blockquote class='right'>").append(
        questions[index].imageDescription
      );
      createImageOrientation(
        questions[index].imageLeft,
        qElement,
        "center",
        150
      );
      //createImage(questions[index].imageLeft, qElement, 150);
      console.log("monnnnnnnn Image");
      console.log(questions[index].imageLeft);
      qElement.append(des);
    }

    createImageRes(qElement);
    imageToSelect(qElement);
    createImageChoices(qElement);
    createRadioChoices(qElement);
    createCheckboxChoices(qElement);
    createVideo(qElement);
    return qElement;
  }

  // Creates an Audio
  function createAudio(qElement) {
    if (questions[pageCounter].audio != null) {
      var audio = $(
        "<audio controls autoplay><source src=" +
          questions[pageCounter].audio +
          " type='audio/mp3' /></audio>"
      );
      qElement.append(audio);
    }
  }

  // Creates an Image
  function createVideo(qElement) {
    if (questions[pageCounter].video != null) {
      var video = $(
        "<video width='95%' height='35%' controls autoplay><source src=" +
          questions[pageCounter].video +
          " type='video/mp4' /></video>"
      );
      qElement.append(video);
    }
  }

  // Creates an Image
  function createImageOrientation(image, qElement, orientation, size) {
    if (image != null) {
      var myImage = new Image(size);
      myImage.align = orientation;
      myImage.src = image;
      console.log(myImage);
      qElement.append(myImage);
    }
  }

  // Creates an Image
  function createImage(image, qElement, size) {
    if (image != null) {
      var myImage = new Image(size);
      myImage.src = image;
      console.log(myImage);
      qElement.append(myImage);
    }
  }

  function createImageRes(qElement) {
    if (questions[pageCounter].imageResumeDescription != null) {
      var i = 0;
      questions[pageCounter].imageResume.forEach(element => {
        createImage(element, qElement, 100);
        var des = $(
          "<label><input class='with-gap' type='radio' name='valid' id='valid' value='Règle " +
            (i + 1) +
            "' ><span>" +
            questions[pageCounter].imageResumeDescription[i] +
            "</span></label>"
        );

        i++;

        qElement.append(des);
      });
    }
  }

  function createImageChoices(qElement) {
    if (questions[pageCounter].imageChoices != null) {
      var question = $("<p>").append(questions[pageCounter].question);
      qElement.append(question);
      for (var i = 0; i < questions[pageCounter].imageChoices.length; i++) {
        var myImage = new Image(100);
        myImage.src = questions[pageCounter].imageChoices[i];
        qElement.append(
          "<input class='with-gap' type='radio' name='answer' value='" +
            i +
            "'><label><img src=" +
            questions[pageCounter].imageChoices[i] +
            "></label>"
        );
      }
    }
  }

  function createRadioChoices(qElement) {
    if (questions[pageCounter].radioChoices != null) {
      var question = $("<p>").append(questions[pageCounter].question);
      qElement.append(question);
      createImageOrientation(
        questions[pageCounter].image,
        qElement,
        "right",
        50
      );
      var radioButtons = createRadios(pageCounter);
      qElement.append(radioButtons);
    }
  }

  function imageToSelect(qElement) {
    if (questions[pageCounter].imageToSelect != null) {
      console.log(questions[pageCounter].imageToSelect);
      image =
        "<img src='" +
        questions[pageCounter].imageToSelect +
        "' width='450' height='252' alt='Planets' usemap='#planetmap'>";
      image +=
        "<map name='planetmap'><area shape='rect' coords='220,50,260,200' alt='Sun' href='" +
        questions[pageCounter].imageToSelect +
        "'> </map>";

      qElement.append(image);
    }
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $("<ul>");
    var item;
    var input = "";
    for (var i = 0; i < questions[index].radioChoices.length; i++) {
      item = $("<li>");
      input =
        '<label><input class="with-gap" type="radio" name="answer" value=' +
        i +
        " /><span>";
      input += questions[index].radioChoices[i];
      input += "</span></label>";
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Creates a list of the answer choices as radio inputs
  function createTextToComplet(qElement) {
    if (questions[pageCounter].textToComplet != null) {
      $(document).ready(function() {
        $("select").formSelect();
      });

      var item = $('<div class="input-field col s12"><select>');
      var input = "";
      for (var i = 0; i < questions[pageCounter].options1.length; i++) {
        input =
          '<option value="">' +
          questions[pageCounter].options1[i] +
          "</option>";
        item.append(input);
      }
      item.append("</select></div>");
      qElement.append(item);
    }
  }

  function createCheckboxChoices(qElement) {
    if (questions[pageCounter].checkboxChoices != null) {
      var question = $("<p>").append(questions[pageCounter].question);
      qElement.append(question);
      createImageOrientation(
        questions[pageCounter].image,
        qElement,
        "right",
        50
      );
      var checkboxButtons = createCheckbox(pageCounter);
      qElement.append(checkboxButtons);
    }
  }

  // Creates a list of the answer choices as checkbox inputs
  function createCheckbox(index) {
    var checkboxList = $("<ul>");
    var item;
    var input = "";
    for (var i = 0; i < questions[index].checkboxChoices.length; i++) {
      item = $("<li>");
      input =
        '<label><input class="with-gap" type="checkbox" name="answer" value=' +
        i +
        " /><span>";
      input += questions[index].checkboxChoices[i];
      input += "</span></label>";
      item.append(input);
      checkboxList.append(item);
    }
    return checkboxList;
  }

  // Reads the user answer and check if it's right
  function choose(pageCounter) {
    if (questions[pageCounter].checkboxChoices != null) {
      var res = [];
      $("input[type=checkbox][name='answer']")
        .filter(":checked")
        .each(function() {
          res.push($(this).val());
        });
      if (
        JSON.stringify(res) ==
        JSON.stringify(questions[pageCounter].correctAnswer)
      ) {
        //alert('correct');
        M.toast({ html: questions[pageCounter].correctResponse });
      } else {
        //alert('not correct');
        M.toast({ html: questions[pageCounter].incorrectResponse });
      }
    }

    if (questions[pageCounter].radioChoices != null) {
      var res = +$('input[name="answer"]:checked').val();
      if (res === questions[pageCounter].correctAnswer) {
        //alert('correct');
        M.toast({ html: questions[pageCounter].correctResponse });
      } else {
        //alert('not correct');
        M.toast({ html: questions[pageCounter].incorrectResponse });
      }
    }

    if (questions[pageCounter].imageChoices != null) {
      var res = [];
      $("input[type=radio][name='answer']")
        .filter(":checked")
        .each(function() {
          res.push($(this).val());
        });
      if (
        JSON.stringify(res) ==
        JSON.stringify(questions[pageCounter].correctAnswer)
      ) {
        //alert('correct');
        M.toast({ html: questions[pageCounter].correctResponse });
      } else {
        //alert('not correct');
        M.toast({ html: questions[pageCounter].incorrectResponse });
      }
    }
    console.log(res);
  }

  // Displays next requested element
  function displayNext(showMe) {
    quiz.fadeOut(function() {
      $("#question").remove();
      if (pageCounter < questions.length) {
        var nextQuestion = createQuestionElement(pageCounter);
        quiz.append(nextQuestion).fadeIn();
        console.log(pageCounter);

        //$('input[value=' + selections[pageCounter] + ']').prop('checked', true);
        if (questions[pageCounter].radioChoices != null) {
          console.log(questions[pageCounter].radioChoices);
        }

        console.log(showMe);
        console.log(pageCounter);

        // Controls display of 'prev' button
        if (pageCounter === 1) {
          $("#prev").show();
          $("#valid").hide();
          console.log("ici1");
        } else if (pageCounter === 0) {
          $("#prev").hide();
          $("#next").show();
          $("#valid").hide();
          console.log("ici2");
        } else if (pageCounter === 41 && showMe === 0) {
          $("#valid").show();
          $("#prev").hide();
          $("#next").hide();
          console.log("ici3"); //supppp
        } else if (pageCounter === 41 && showMe === 1) {
          $("#valid").hide();
          $("#prev").hide();
          $("#next").hide();
          console.log("ici4");
        } else {
          $("#valid").hide();
          $("#prev").show();
          $("#next").show();
          console.log("ici5");
        }
      }
    });
  }
})();

(function () {
    var questions = [{
        title: "Leçon 1",
        resume: "J'applique les règles attendues avant de me rendre à mon travail",
    }, {
        title: "Bienvenue dans l'entreprise Nutribel !",
        resume: "Prenez le temps de visualiser cette courte vidéo de présentation",
        video: "/media/01.bienvenueNutribel.mp4",
    }, {
        title: "Je me rends à mon travail",
        subtitle: "Parfum, maquillage",
        video: "/media/02.bus_femme.mp4",
    }, {
        title: "Je me rends à mon travail",
        subtitle: "Parfum, maquillage",
        audio: "/media/03.arriveeTravail.mp3",
        resume: "Vous êtes presque arrivé au travail. Le bus a du retard et vous désirez vous rendre le plus rapidement possible à votre poste de travail. Vous enlevez vite votre veste, enfilez vos vêtements de travail, vous vous lavez les mains, et vous voilà prêt.",
        question: "Est-ce correct ?",
        radioChoices: ["Oui", "Non"],
        correctAnswer: 1,
        correctResponse: "Exact",
        incorrectResponse: "Faux",
    }, {
        title: "Je me rends à mon travail",
        subtitle: "Bijoux",
        resume: "Les bijoux visibles sont interdits, dans une entreprise alimentaire.",
        image: "/media/04.bijoux_visibles.jpg",
        question: "Cochez les élèments auxquels cela s'applique et cliquez ensuite sur vérifiez",
        checkboxChoices: ["montre", "bague", "pince à cheveux", "boucle d'oreille", "bracelet", "pendentif", "piercing de nez", "piercing de nombril"],
        correctAnswer: ["1", "2", "3", "5"],
        correctResponse: "Exact",
        incorrectResponse: "Faux",
    }, {
        title: "Je me rends à mon travail",
        subtitle: "Bijoux",
        resume: "Les bijoux constituent un danger pour la santé de vos clients",
        imageResume: "/media/05.bijoux_dangers.jpg",
        question: "Pourquoi ?",
        radioChoices: ["des agents pathogénes (comme les bactéries, les virus ou les champignons) peuvent s'y cacher", "des élèments peuvent s'en détacher et atterrir dans les denrées alimentaires"],
        correctAnswer: 1,
        correctResponse: "Exact",
        incorrectResponse: "Faux",
    }, {
        title: "Je me rends à mon travail",
        subtitle: "Bijoux - Règle 1",
        resume: "première règle d'hygiène en vigueur chez Nutribel. Pas de Bijoux",
        imageResume: "/media/07.regle_1.jpg",
    }, {
        title: "Leçon 2",
        resume: "J'applique les règles d'arrivée sur le lieu de travail et de bonne hygiène vestimentaire",
    }, {
        title: "J'arrive sur mon lieu de travail",
        subtitle: "Vêtements",
        resume: "Vous voilà arrivé chez Nutribel. Voici le plan de l'entreprise. Où vous rendez-vous en premier lieu ? Cliquez sur l'endroit approprié dans le schéma.",
        imageCenter: "/media/08.arriveeNutribel.png",
    }, {
        title: "J'arrive sur mon lieu de travail",
        subtitle: "Vêtements",
        resume: "Bien vous avez rangé veste et bijoux dans votre armoire.",
        question: "Pouvez-vous maintenant pénétrer dans l'atelier ?",
        radioChoices: ["Oui", "Non"],
        correctAnswer: 1,
    }, {
        title: "Je m'habille pour le travail",
        subtitle: "Vêtements - Règle 2",
        resume: "Ce qui nous mène à la seconde règle d'hygiène en vigueur chez Nutribel",
        imageResume : "/media/11.regle_2.png",
    }, {
        title: "Je m'habille pour le travail",
        subtitle: "Filets à cheveux",
        resume: "Vous observez les vestiaires et constatez que certains collègues n'ont pas bien mis leur filet à cheveux. cliquez sur eux puis sur le bouton vérifier.",
    }, {
        title: "Je m'habille pour le travail",
        subtitle: "Filets à cheveux",
        video: "/media/13.filetcheveux2.mp4",
    }, {
        title: "Je m'habille pour le travail",
        subtitle: "Filets à cheveux - Règle 3",
        resume: "Et nous voici à la règle d'hygiène 3",
        imageResume : "/media/14.regle_3.png",
    }, {
        title: "Leçon 3",
        resume: "J'applique les règles d'hygiène de l'atelier",
    }, {
        title: "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
        subtitle: "Mains",
        resume: "Vous voici dans l'atelier. Vous avez enlevé tous vos bijoux. Vous portez vos vêtements de travail et ils sont fermés. Vos cheveux sont parfaitement recouverts.",
        question: "Pouvez vous vous mettre directement au travail",
        radioChoices: ["Oui", "Non"],
        correctAnswer: 1,
        correctResponse: "Exact",
        incorrectResponse: "Faux",
    }, {
        title: "Je respecte les règles d'hygiène de l'atelier et en connait les raisons",
        subtitle: "Mains",
        resume: "Comment obtenir dix doigts propres en 10 étapes ?",
    }];

    var pageCounter = 0;
    var quiz = $('#quiz'); //Quiz div object

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
        e.preventDefault();
        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose(pageCounter);
        pageCounter++;
        displayNext();

    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
        e.preventDefault();
        if (quiz.is(':animated')) {
            return false;
        }
        choose(pageCounter);
        pageCounter--;
        displayNext();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });

        if (questions[index].audio != null) {
            var audio = $("<audio controls preload='auto'><source src=" + questions[index].audio + " type='audio/mp3' /></audio>");
            qElement.append(audio);
        }

        var title = $('<h5>').append(questions[index].title + '</h5>');
        qElement.append(title);

        if (questions[index].subtitle != null) {
            var subtitle = $('<h6>').append(questions[index].subtitle + '</h6>');
            qElement.append(subtitle);
        }

        var resume = $('<p>').append(questions[index].resume);
        createImage(questions[index].imageResume, index, qElement, "right");
        qElement.append(resume);
        createImage(questions[index].imageCenter, index, qElement, "center");

        if (questions[index].radioChoices != null) {
            var question = $('<p>').append(questions[index].question);
            qElement.append(question);
            createImage(questions[index].image, index, qElement, "right");
            var radioButtons = createRadios(index);
            qElement.append(radioButtons);
        }

        if (questions[index].checkboxChoices != null) {
            var question = $('<p>').append(questions[index].question);
            qElement.append(question);
            createImage(questions[index].image, index, qElement, "right");
            var checkboxButtons = createCheckbox(index);
            qElement.append(checkboxButtons);
        }

        if (questions[index].video != null) {
            var video = $("<video width='95%' height='35%' controls preload='none'><source src=" + questions[index].video + " type='video/mp4' /></video>");
            qElement.append(video);
        }


        return qElement;
    }

    function createImage(image, index, qElement, orientation) {
        if (image != null) {
            var myImage = new Image(200);
            myImage.align = orientation;
            myImage.src = image;
            //console.log(myImage);
            qElement.append(myImage);
        }
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].radioChoices.length; i++) {
            item = $('<li>');
            input = '<label><input class="with-gap" type="radio" name="answer" value=' + i + ' /><span>';
            input += questions[index].radioChoices[i];
            input += '</span></label>'
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Creates a list of the answer choices as radio inputs
    function createCheckbox(index) {
        var checkboxList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].checkboxChoices.length; i++) {
            item = $('<li>');
            input = '<label><input class="with-gap" type="checkbox" name="answer" value=' + i + ' /><span>';
            input += questions[index].checkboxChoices[i];
            input += '</span></label>'
            item.append(input);
            checkboxList.append(item);
        }
        return checkboxList;
    }

    // Reads the user selection and pushes the value to an array
    function choose(pageCounter) {
        if (questions[pageCounter].checkboxChoices != null) {
            var res = [];
            $("input[type=checkbox][name='answer']").filter(':checked').each(function () {
                res.push($(this).val());
            });
            if (JSON.stringify(res)==JSON.stringify(questions[pageCounter].correctAnswer)) {
                //alert('correct');
                M.toast({ html: questions[pageCounter].correctResponse })
            }
            else {
                //alert('not correct');
                M.toast({ html: questions[pageCounter].incorrectResponse })
            }
        }

        if (questions[pageCounter].radioChoices != null) {
            var res = +$('input[name="answer"]:checked').val();
            if (res === questions[pageCounter].correctAnswer)  {
                //alert('correct');
                M.toast({ html: questions[pageCounter].correctResponse })
            }
            else {
                //alert('not correct');
                M.toast({ html: questions[pageCounter].incorrectResponse })
            }
        }
        console.log(res);
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function () {
            $('#question').remove();
            if (pageCounter < questions.length) {
                var nextQuestion = createQuestionElement(pageCounter);
                quiz.append(nextQuestion).fadeIn();
                console.log(pageCounter);


                //$('input[value=' + selections[pageCounter] + ']').prop('checked', true);
                if (questions[pageCounter].radioChoices != null) {
                    console.log(questions[pageCounter].radioChoices);
                }

                // Controls display of 'prev' button
                if (pageCounter === 1) {
                    $('#prev').show();
                } else if (pageCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>', { id: 'question' });

        var numCorrect = 0;
        var numAnswer = 0;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].radioChoices != null) {
                numAnswer++;
            }
        }
        for (var i = 0; i < selections.length; i++) {
            if (questions[i].radioChoices != null && selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        score.append('You got ' + numCorrect + ' questions out of ' +
            numAnswer + ' right!!!');
        return score;
    }

})();
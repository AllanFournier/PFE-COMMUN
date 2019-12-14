(function () {
    var questions = [{
        question: "Quel bijou pouvez-vous porter lorsque vous travaillez dans une entreprise alimentaire ?",
        choices: ["un piercing au nez", "un piercing au nombril", "une montre"],
        correctAnswer: 1
    }, {
        question: "Pouvez-vous porter un gilet par dessus vos vêtements de travail ?",
        choices: ["oui", "non", "uniquement s'il s'agit d'un gilet en coton"],
        correctAnswer: 1
    }, {
        question: "Comment mettez-vous correctement un filet à cheveux ?",
        choices: ["vous mettez uniquement un filet à cheveux lorsque la longueur dépasse de 1 cm", "vous mettez le filet à cheveux de sorte qu'aucun cheveu ne dépasse", "les oreilles doivents rester dégagés"],
        correctAnswer: 1
    }, {
        question: "Pouvez-vous vous sécher les mains avec une serviette après les avoir lavées ?",
        choices: ["oui", "non", "uniquement avec une serviette en coton"],
        correctAnswer: 2
    }, {
        question: "Lorsque vous êtes enrhumé et que vous devez vous moucher, pouvez-vous ensuite vous remettre au travail ?",
        choices: ["oui", "non", "aprés vous être mouché, vous devez d'abord vous laver les mains avant de vous remettre au travail"],
        correctAnswer: 2
    }, {
        question: "Devez-vous vous laver les mains avant de prendre votre pause déjeuner ?",
        choices: ["oui", "non", "aprés vous être mouché, vous devez d'abord vous laver les mains avant de vous remettre au travail"],
        correctAnswer: 2
    }, {
        question: "Devez-vous vous laver les mains avant de mettre vos gants ?",
        choices: ["oui", "non", "uniquement lorsque les sutisules sont sales"],
        correctAnswer: 0
    }, {
        question: "Vous allez vider la poubelle. Devez-vous vous laver les mains avant de  reprendre le travail ?",
        choices: ["oui", "non", "pas s'il s'agit d'une poubelle à pédale"],
        correctAnswer: 0
    }, {
        question: "Que faites-vous à coup sur lorsque votre journée de travail est terminéee ?",
        choices: ["vous jetez votre filet à cheveux à la poubelle", "vous rangez votre filet à cheveux pour le lendemain", "vous emportez votre filet à cheveux pour le lendemain"],
        correctAnswer: 0
    }, {
        question: "A quelle régle d'hygiène ce pictogramme correspond-il ?",
        choices: ["porter un pull chaud lorsqu'il fait froid", "porter des vêtements de travail fermés", "seuls les vêtements deux pièces sont autotrisés"],
        correctAnswer: 1
    }];

    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
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
      
      var header = $('<h5>Question ' + (index + 1) + '</h5>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<label><input class="with-gap" type="radio" name="answer" value=' + i + ' /><span>';
        input += questions[index].choices[i];
        input += '</span></label>'
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
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
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      score.append('You got ' + numCorrect + ' questions out of ' +
                   questions.length + ' right!!!');
      return score;
    }
  })();
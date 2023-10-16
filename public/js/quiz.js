
var questions = [
  {
    headline: "Let's begin by creating your base routine, comprising of the ideal cleanser, makeup remover, and moisturizer type.",
    question: "What is your skin type?",
      answers: [
          {text: "Normal and/or any skin type"},
          {text: "Oily and/or acne prone"},
          {text: "Dry, red and/or eczema prone"},
          {text: "Combination"},
          {text: "Inflamed and/or sensitive"},
          {text: "Mature"},
      ]
  },
  {
      headline: "Let's move on to the eyes.",
      question: "What are your eye area concerns?",
      answers: [
          {text: "Under eye bags and/or inflammation"},
          {text: "Under eye discoloration and/or visible veins"},
      ]
  },
  {
      headline: "Serums give your skin the targetted boost its looking for.",
      question: "To add custom-curated serum ingredients to your routine, select your primary skincare goal:",
      answers: [
          {text: "Hydration"},
          {text: "Brightening"},
          {text: "Anti-aging"},
          {text: "Relieving skin sensitivity"},
      ]
  },
  {
      headline: "Toners give your pores a deep clean, and when used regularly, it can have a major positive impact on the appearance and tightness of your pores.",
      question: "Select your primary skincare goal to identify the perfect toner ingredients for you:",
      answers: [
          {text: "Maintaining clean pores"},
          {text: "Hydration and/or fine line prevention"},
          {text: "Relieving skin sensitivity"},
          {text: "Anti-aging"},
      ]
  },
  {
      headline: "We all know the importance of SPF, as UV rays are one of the primary causes for aging.",
      question: "Study the descriptions of each ingredient group and select the type of sunblocker that works best for your skin.",
      answers: [
          {text: "Chemical - Chemical ingredients, such as oxybenzone and octinoxate, are absorbed into your skin to counteract the damage from UV rays. PROS: They are beneficial because they are lightweight, easy to apply, and transparent on the skin. CONS: However, the chemicals can irritate and cause reactions in those with sensitive skin.Certain ingredients like oxybenzone have raised health concerns and carry a high hazard\" rating on the EWG's Skin Deep Cosmetic Database.\""},
          {text: "Physical - Physical, or natural, ingredients, such as titanium dioxide and zinc oxide, sit on top of the skin to physically deflect and prevent UV rays from entering the body. PROS: It is beneficial because there is very little risk of irritation or health concerns. CONS: However, it can often leave a white or grayish tint on the skin, particularly in those with darker skin tones."},
          {text: "Hybrid - A hybrid of chemical and physical ingredients provide protection from both UVA and UVB rays, and typically do not create any visible residue. This is the perfect middle ground for those with sensitive skin and don't want a white/grayish tint left behind on their skin."},
      ]
  },
  {
      headline: "Last but not least, lips need loving too!",
      question: "Select your primary lip care concern.",
      answers: [
          {text: "Dehydration and/or frequently chapped lips"},
          {text: "Hyperpigmentation of the lips"},
          {text: "Dullness"},
      ]
  },
];

var quiz = document.getElementById("quiz");

var headlineElement = document.getElementById("headline");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-button");

var scoreElement = document.getElementsByClassName("score");
var currentQuestionIndex = 0;
var score = 0;

function startQuiz () {
    // resets local storage content when restarting quiz
    if (localStorage.getItem('userResponse') != null)
    localStorage.removeItem('userResponse');

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion () {
  resetState();
  var currentQuestion = questions[currentQuestionIndex];
  var questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + "/6. " + currentQuestion.question;

  headlineElement.innerHTML = currentQuestion.headline;
  
  var questionCount = 1;
  currentQuestion.answers.forEach(answer => {
      var button = document.createElement("button");
      button.innerHTML = answer.text; 
      button.classList.add("button");
      button.setAttribute("data-number",questionCount); //added the data number attr with the value of the counter that keeps track of what question we are up to
      answerButtonElement.appendChild(button);
      if(answer.correct) {
          button.dataset.correct = answer.correct;
      }
      questionCount++;
      button.addEventListener("click", selectAnswer);
  });
  questionNumber = 1;
}

function resetState () {
  nextButton.style.display = "none";
  while(answerButtonElement.firstChild) {
      answerButtonElement.removeChild(answerButtonElement.firstChild);
}
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showScore();
  }
}

// custom data attribute for each button 
// use loop to iterate through buttons
// if data-attr is not 1 (or selected button), disable it 
// this way it doesnt matter the quantity of answers per question

var userNumber= 0;
function selectAnswer (e) {
    var selectedButton = e.target;

    console.log(selectedButton.innerText);
    selectedButton.style.background = "#FF6BA8";

    Array.from(answerButtonElement.children).forEach(button => {
              if(button.getAttribute("data-number") != selectedButton.getAttribute("data-number")){
                button.disabled = true;
                nextButton.style.display="block";
              }
          });
   
    selectedButton.addEventListener("click", () => {
        // remove the answer from the local storage
        console.log("removing " + selectedButton.innerText + " from the local storage");
        // selected button styling
        selectedButton.style.background = "none";
        selectedButton.style.color = "#594735";

        var responses = JSON.parse(localStorage.getItem("userResponse"));
        console.log(responses.length -1);
        console.log(currentQuestionIndex);
        if(responses.length -1 > currentQuestionIndex){
            // Check if there are responses in local storage
            if (responses && responses.length > 0) {
                // Remove the last response
                responses.pop(); // Remove the last two items from the array because it is getting added again when it was clicked again (check console for more info)
                responses.pop();
                // Update local storage with the modified responses
                localStorage.setItem("userResponse", JSON.stringify(responses));
            }
        }
        Array.from(answerButtonElement.children).forEach(button => {
            button.disabled = false;
            nextButton.style.display="none";
        });
    })


    // now should be when to add the values to the local storage
    var userResponse = JSON.parse(localStorage.getItem("userResponse"))||[];


    userResponse.push(
        {
            questionNumber: currentQuestionIndex + 1,
            chosenAnswer: selectedButton.innerText,
        }
    )

    localStorage.setItem("userResponse", JSON.stringify(userResponse));
    console.log("adding " + selectedButton.innerText + " to the local storage");

    if (!(currentQuestionIndex < questions.length -1)){
        nextButton.textContent = "Submit Quiz";
    }
}


function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
      showScore();
  };
}

nextButton.addEventListener ("click", ()=> {
        
    if (currentQuestionIndex < questions.length -1) {
        nextQuestion();
    } else {
        console.log('you have completed the quiz');
        // we don't want to start the quiz again 
        // display results
        console.log("submit clicked");
        fetchResponse();
        // startQuiz();
    }
  })

startQuiz();

function fetchResponse()  {
    
    // step 1: collect values
    var responses = JSON.parse(localStorage.getItem("userResponse"));
    console.log(responses);

    // Create a new results object from the input values
    const quizResult = {
        skin_type: responses[0].chosenAnswer,
        eye_concerns: responses[1].chosenAnswer,
        serum_choice: responses[2].chosenAnswer,
        toner_choice: responses[3].chosenAnswer,
        spf_ingredient: responses[4].chosenAnswer,
        lip_concerns: responses[5].chosenAnswer,
    };
    
    // step 2: post value
    console.log(quizResult);
    const postResponse = (quizResult) =>
    fetch('/api/quiz/results', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizResult)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('Successful POST request:', data);
        return data;
    })
    .catch((error) => {
        console.log(error);
        console.error('Error in POST request');
    });

    // Call our postReview method to make a POST request with our `newReview` object.
    postResponse(quizResult)
    .then((data) => console.log(`Responses submitted!`))
    .catch((err) => console.error(err));

    // //now we redirect the user to the results page 
    // window.location.replace("/api/quiz/results");

    quiz.style.display = "none";
    
    fetch('/api/result/', {
        method: 'POST', // Use POST method to send data in the request body
        headers: {
            'Content-Type': 'application/json', // Specify that you're sending JSON data
        },
        body: JSON.stringify(quizResult), 
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('Successful:', data);
        return data;
    })
    .catch((error) => {
        console.log(error);
        console.error('Error ');
    });

    // quiz.textContent = "hello he wassup";
};












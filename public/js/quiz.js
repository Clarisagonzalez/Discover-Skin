// ISSUES
// 1. headline is not changing per question
// 2. how to add multiple answers? (checkboxes?)
// possible solution: add a next button so screen doesnt change out -- done
// disable a button after its been clicked once... unclick it

// answer buttons: 1) clicking it once stores data, clicking twice unstores data. 2) for all questions except the serum question, upon clicking one answer, all other buttons should disable unless that button is clicked again, then they will be re-enabled. 3) for only the serum question, the buttons will not disable after clicking a button. clicking one button twice will still unstore the data. 
// local storage used for to api call
// change the color to match disable and enable state

// clicking it again should unstore data
// 3. change font to montserrat + colors to match theme
// 4. remove correct/incorrect and store info instead
// 5. add popover for SPF answers so they don't look so wordy
// 6. progress stepper which highlights the skin routine as well as quiz progress on the left. 

// Lots of commented out stuff at the bottom. 

var questions = [
  {
    headline: "Let's begin by creating your base routine, comprising of the ideal cleanser, makeup remover, and moisturizer type.",
    question: "What is your skin type?",
      answers: [
          {text: "Oily and/or acne prone", correct: false},
          {text: "Dry, red, and/or exzema prone", correct: true},
          {text: "Sensitive", correct: false},
          {text: "Mature", correct: false},
          {text: "Normal", correct: false},
      ]
  },
  {
      headline: "Let's move on to the eyes.",
      question: "What are your eye area concerns?",
      answers: [
          {text: "Undereye bags and/or inflammation", correct: true},
          {text: "Undereye discoloration and/or visible veins", correct: false},
      ]
  },
  {
      headline: "Serums give your skin the targetted boost its looking for. You can select as many skincare goals as you want, but we reccommend a maximum usage of three serums per day, otherwise your skin may be overwhelmed",
      question: "For your custom serum routine, select your primary skincare goals:",
      answers: [
          {text: "Hydration", correct: false},
          {text: "Brightening", correct: true},
          {text: "Anti-aging", correct: false},
          {text: "Relieving skin sensitivity", correct: false},
      ]
  },
  {
      headline: "Toners give your pores a deep clean, and when used regularly, it can have a major positive impact on the appearance and tightness of your pores.",
      question: "Select one primary skincare goal to identify the perfect toner ingredients for you:",
      answers: [
          {text: "Maintaining clean pores", correct: false},
          {text: "Hydration and/or fine line prevention", correct: true},
          {text: "Relieving skin sensitivity", correct: false},
          {text: "Anti-aging", correct: false},
      ]
  },
  {
      headline: "We all know the importance of SPF, as UV rays are one of the primary causes for aging.",
      question: "Study the descriptions of each ingredient group and select the type of sunblocker that works best for your skin.",
      answers: [
          {text: "Chemical - Chemical ingredients, such as oxybenzone and octinoxate, are absorbed into your skin to counteract the damage from UV rays.", },
          {text: "Physical - Physical (or natural) ingredients, such as titanium dioxide and zinc oxide, sit on top of the skin to physcially deflext and prevent UV rays from entering the body. ", },
          {text: "Combination - A combination of chemical and physical ingredients provide protection from both UVA and UVB rays, and typically do not create any visible residue. This is the perfect middle ground for those with sensitive skin and don't want a white/grayish tint left behind on their skin. ", },
      ]
  },
  {
      headline: "Last but not least, lips need loving too!",
      question: "Select your primary lip care concern.",
      answers: [
          {text: "dehydration and/or frequently chapped lips", correct: false},
          {text: "hyperpigmentation of the lips", correct: false},
          {text: "dullness", correct: true},
      ]
  },
];

var headlineElement = document.getElementById("headline");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-button");
var scoreElement = document.getElementsByClassName("score");
var currentQuestionIndex = 0;
var score = 0;

function startQuiz () {
    if (localStorage.getItem('userResponse') != null)
    localStorage.removeItem('userResponse');
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// function showHeadline () {
//   resetState();
//   var currentQuestion = questions[currentQuestionIndex];

// };

function showQuestion () {
  resetState();
  var currentQuestion = questions[currentQuestionIndex];
  var questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

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

// function showScore () {
//   scoreElement.innerHTML = `score + " /10"`;

// }

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showScore();
  }
}

// odds disable all other buttons
// evens re-enable all other buttons
// selected button is not affected by this conditional

// var count = 0;


// custom data attribute for each button 
// use loop to iterate through buttons
// if data-attr is not 1 (or selected button), disable it 
// this way it doesnt matter the quantity of answers per question

var userNumber= 0;
function selectAnswer (e) {
   
    var selectedButton = e.target;
    // selectedButton.
    // count++;
    // console.log(count);


    //we have access to the question number that was chosen via ==> selectedButton.getAttribute("data-number")
    //and we have access to the text of the chosen answer via ==> selectedButton.innerText
    // this can be helpful when we create out local storage key
    console.log(selectedButton.innerText);

    selectedButton.style.background = "#ffcba4";

    Array.from(answerButtonElement.children).forEach(button => {
              if(button.getAttribute("data-number") != selectedButton.getAttribute("data-number")){
                button.disabled = true;
                nextButton.style.display="block";
              }
          });
   
    selectedButton.addEventListener("click", () => {
        // remove the answer from the local storage
        console.log("removing " + selectedButton.innerText + " from the local storage");

        selectedButton.style.background = "#E75353";

        
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
    // for some reason though this is not working
    // each time the next button is clicked it is loading all of the answers picked.
    var userResponse = JSON.parse(localStorage.getItem("userResponse"))||[];


    userResponse.push(
        {
            questionNumber: currentQuestionIndex + 1,
            chosenAswer: selectedButton.innerText,
        }
    )


    localStorage.setItem("userResponse", JSON.stringify(userResponse));
    userNumber++;
    console.log("adding " + selectedButton.innerText + " to the local storage");


}


function showScore () {
  scoreElement.innerHTML = "Score: " + score + " /10";

}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
      showScore();
  };
}

nextButton.addEventListener ("click", ()=> {
        
    if (currentQuestionIndex < questions.length+1) {
        nextQuestion();
    } else {
        console.log('you have completed the quiz');
        // we don't want to start the quiz again 
        // display results
        startQuiz();
    }
  })

startQuiz();

// const quizHandler = async (event) => {
//     event.preventDefault();


// // Collect values from the quiz
//  pull userResponse JSON from local storage.


//   // if (skintype && skinconcerns && ingredients) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/quiz/results', {
//       method: 'POST',
//       body: JSON.stringify({ skintype, skinconcerns, ingredients }),
//       headers: { 'Content-Type': 'application/json' },


//     });


//     console.log(JSON.stringify({ skintype, skinconcerns, ingredients }))


//     if (response.ok) {
//       console.log(document.querySelector('#submitquizbtn'));
//       document.location.replace('/results');
//     }
       
//     }
 
// document
// .querySelector('#submitquizbtn')
// .addEventListener('click', quizHandler);


//     //   document


//     // .querySelector('#submitquizbtn')
//     // .addEventListener('click', quizHandler);


   


//     // if (skinType === 'oily') {
//     //   recommendedProducts = ['cleanser:foaming cleanser'];
//     // } else if (skinType === 'dry') {
//     //   recommendedProducts = ['cream cleanser'];
//     // } else if (skinType === 'combination') {
//     //   recommendedProducts = ['hybrid lotion'];
//     // }


// // console.log(results);


// // let resultsDiv = document.getElementById('results');


// // resultsDiv.appendChild(recommendedProducts);
//     //   // If successful, redirect the browser to the profile page








// //   console.log(document.querySelector('#submitquizbtn'));


// //   if (skinType === 'oily') {
// //     recommendedProducts = ['cleanser:foaming cleanser'];
// //   } else if (skinType === 'dry') {
// //     recommendedProducts = ['cream cleanser'];
// //   } else if (skinType === 'combination') {
// //     recommendedProducts = ['hybrid lotion'];
// //   }
// // console.log(results);


// // let resultsDiv = document.getElementById('results');


// // resultsDiv.appendChild(recommendedProducts);





// const quizHandler = async (event) => {
//     event.preventDefault();


// // Collect values from the quiz
//   const skintype = document.querySelector('#skintype').value.trim();
//   const skinconcerns = document.querySelector('#concerns').value.trim();
//   const ingredients = document.querySelector ('#ingredients').value.trim();


//   // if (skintype && skinconcerns && ingredients) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/quiz/results', {
//       method: 'POST',
//       body: JSON.stringify({ skintype, skinconcerns, ingredients }),
//       headers: { 'Content-Type': 'application/json' },


//     });


//     console.log(JSON.stringify({ skintype, skinconcerns, ingredients }))


//     if (response.ok) {
//       console.log(document.querySelector('#submitquizbtn'));
//       document.location.replace('/results');
//     }
       
//     }
 
// document
// .querySelector('#submitquizbtn')
// .addEventListener('click', quizHandler);


//     //   document


//     // .querySelector('#submitquizbtn')
//     // .addEventListener('click', quizHandler);


   


//     // if (skinType === 'oily') {
//     //   recommendedProducts = ['cleanser:foaming cleanser'];
//     // } else if (skinType === 'dry') {
//     //   recommendedProducts = ['cream cleanser'];
//     // } else if (skinType === 'combination') {
//     //   recommendedProducts = ['hybrid lotion'];
//     // }


// // console.log(results);


// // let resultsDiv = document.getElementById('results');


// // resultsDiv.appendChild(recommendedProducts);
//     //   // If successful, redirect the browser to the profile page








// //   console.log(document.querySelector('#submitquizbtn'));


// //   if (skinType === 'oily') {
// //     recommendedProducts = ['cleanser:foaming cleanser'];
// //   } else if (skinType === 'dry') {
// //     recommendedProducts = ['cream cleanser'];
// //   } else if (skinType === 'combination') {
// //     recommendedProducts = ['hybrid lotion'];
// //   }
// // console.log(results);


// // let resultsDiv = document.getElementById('results');


// // resultsDiv.appendChild(recommendedProducts);

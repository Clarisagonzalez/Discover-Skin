// ISSUES
// 1. headline is not changing per question
// 2. how to add multiple answers? (checkboxes?)
// possible solution: add a next button so screen doesnt change out
// disable a button after its been clicked once... unclick it
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
          {text: "Chemical - Chemical ingredients, such as oxybenzone and octinoxate, are absorbed into your skin to counteract the damage from UV rays. PROS: They are beneficial because they are lightweight, easy to apply, and transparent on the skin. CONS: However, the chemicals can irritate and cause reactions in those with sensitive skin.Certain ingredients like oxybenzone have raised health concerns and carry a high hazard rating on the EWG's Skin Deep Cosmetic Database.", correct: false},
          {text: "Physical - Physical (or natural) ingredients, such as titanium dioxide and zinc oxide, sit on top of the skin to physcially deflext and prevent UV rays from entering the body. PROS: It is beneficial because there is very little risk of irritation or health concerns. CONS: However, it can often leave a white or grayish tint on the skin, particularly in those with darker skin tones. ", correct: false},
          {text: "Combination - A combination of chemical and physical ingredients provide protection from both UVA and UVB rays, and typically do not create any visible residue. This is the perfect middle ground for those with sensitive skin and don't want a white/grayish tint left behind on their skin. ", correct: false},
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
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showHeadline();
  showQuestion();
}

function showHeadline () {
  resetState();
  var currentQuestion = questions[currentQuestionIndex];
  headlineElement.innerHTML = currentQuestion.headline;
};

function showQuestion () {
  resetState();
  var currentQuestion = questions[currentQuestionIndex];
  var questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
      var button = document.createElement("button");
      button.innerHTML = answer.text; 
      button.classList.add("button");
      answerButtonElement.appendChild(button);
      if(answer.correct) {
          button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
  });
}

function resetState () {
  nextButton.style.display = "none";
  while(answerButtonElement.firstChild) {
      answerButtonElement.removeChild(answerButtonElement.firstChild);
}
}

function showScore () {
  scoreElement.innerHTML = `score + " /10"`;

}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showScore();
  }
}


function selectAnswer (e) {
  var selectedButton = e.target;
  var isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
      nextButton.style.display="block";
  } else {
      selectedButton.classList.add("incorrect");
      nextButton.style.display="block";
  }
  Array.from(answerButtonElement.children).forEach(button => {
      if(button.dataset.correct === "true"){
          button.classList.add("correct1");
      }
      button.disabled = true;
  });
  answerButtonElement.addEventListener ("click")
      if (currentQuestionIndex < questions.length+1) {
          nextQuestion();
      } else {
          startQuiz();
      }
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

answerButtonElement.addEventListener ("click", ()=> {
  if (currentQuestionIndex < questions.length+1) {
      nextQuestion();
  } else {
      startQuiz();
  }
})

startQuiz();















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

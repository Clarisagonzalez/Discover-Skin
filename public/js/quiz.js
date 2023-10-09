const quizHandler = async (event) => {
    event.preventDefault();


// Collect values from the quiz
  const skintype = document.querySelector('#skintype').value.trim();
  const skinconcerns = document.querySelector('#concerns').value.trim();
  const ingredients = document.querySelector ('#ingredients').value.trim();


  // if (skintype && skinconcerns && ingredients) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/quiz/results', {
      method: 'POST',
      body: JSON.stringify({ skintype, skinconcerns, ingredients }),
      headers: { 'Content-Type': 'application/json' },


    });


    console.log(JSON.stringify({ skintype, skinconcerns, ingredients }))


    if (response.ok) {
      console.log(document.querySelector('#submitquizbtn'));
      document.location.replace('/results');
    }
       
    }
 
document
.querySelector('#submitquizbtn')
.addEventListener('click', quizHandler);


    //   document


    // .querySelector('#submitquizbtn')
    // .addEventListener('click', quizHandler);


   


    // if (skinType === 'oily') {
    //   recommendedProducts = ['cleanser:foaming cleanser'];
    // } else if (skinType === 'dry') {
    //   recommendedProducts = ['cream cleanser'];
    // } else if (skinType === 'combination') {
    //   recommendedProducts = ['hybrid lotion'];
    // }


// console.log(results);


// let resultsDiv = document.getElementById('results');


// resultsDiv.appendChild(recommendedProducts);
    //   // If successful, redirect the browser to the profile page








//   console.log(document.querySelector('#submitquizbtn'));


//   if (skinType === 'oily') {
//     recommendedProducts = ['cleanser:foaming cleanser'];
//   } else if (skinType === 'dry') {
//     recommendedProducts = ['cream cleanser'];
//   } else if (skinType === 'combination') {
//     recommendedProducts = ['hybrid lotion'];
//   }
// console.log(results);


// let resultsDiv = document.getElementById('results');


// resultsDiv.appendChild(recommendedProducts);

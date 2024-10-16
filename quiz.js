/*function checkAnswer(){
    let correctAnswer = "4";
let checkedRadioButton = document.querySelector('input[name="quiz"]:checked')
let userAnswer;
if (checkedRadioButton) {
  userAnswer = checkedRadioButton.value;
} else {
  userAnswer = null;
}
if (!checkedRadioButton) {
    alert('Please select an answer');
    return;
}
console.log(userAnswer);
let feedBack = document.getElementById('feedback')
if (userAnswer===correctAnswer){
    feedBack.textContent='correct answer !'
}else{
    feedBack.textContent="that's incorrect. try again!" 
    }
}
let btn = document.getElementById('submit-answer')
btn.addEventListener('click',checkAnswer);*/

function checkAnswer() {
    // Define the correct answer
    let correctAnswer = "4";
    
    // Select the checked radio button
    let checkedRadioButton = document.querySelector('input[name="quiz"]:checked');
    
    // Get the user's answer
    let userAnswer = checkedRadioButton ? checkedRadioButton.value : null;

    // Alert the user if no answer is selected and exit the function
    if (!checkedRadioButton) {
        alert('Please select an answer');
        return;
    }

    // Log the user's answer for debugging
    console.log(userAnswer);

    // Select the feedback element by its ID
    let feedBack = document.getElementById('feedback');

    // Compare user's answer with the correct answer and provide feedback
    if (userAnswer === correctAnswer) {
        feedBack.textContent = 'Correct! Well done.';
    } else {
        feedBack.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
let btn = document.getElementById('submit-answer');
btn.addEventListener('click', checkAnswer);
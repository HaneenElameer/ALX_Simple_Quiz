function checkAnswer() {
    let correctAnswer = "4";
    let checkedRadioButton = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = checkedRadioButton ? checkedRadioButton.value : null;

    if (!checkedRadioButton) {
        alert('Please select an answer');
        return;
    }
    console.log(userAnswer);
    let feedBack = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedBack.textContent = 'Correct! Well done.';
    } else {
        feedBack.textContent = "That's incorrect. Try again!";
    }
}
let btn = document.getElementById('submit-answer');
btn.addEventListener('click', checkAnswer);
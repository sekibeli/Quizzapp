function showContent() {
    if (gameIsOver()) {
        showEndScreen();
    }
    else {
        progress();
        showNextQuestion();
        preventCheeting(true, 'auto');
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length
}


function answer(answer) {
    let question = questions[currentQuestion];
    let lastNumber = answer.slice(-1);
    let rightAnswer = `answer_${question['right_answer']}`;
    if (question[answer] == question[rightAnswer]) {
        document.getElementById(answer).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        correct++;
    }
    else {
        document.getElementById(`answer_${lastNumber}`).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    preventCheeting(false, 'none');
}


function nextQuestion() {
    progressInProgressBar();
    currentQuestion++;
    resetColor()
    showContent();
}


function progressInProgressBar() {
    progressBar = (currentQuestion + 1) / questions.length * 100;
    document.getElementById('progress').style = `width: ${progressBar}%`;
    document.getElementById('progress').innerHTML = `${progressBar}%`;
}


function resetColor() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
    }
}


function progress() {
    document.getElementById('current').innerHTML = currentQuestion + 1;
}


function switchIt(param) {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).style.pointerEvents = param;
    }
}


function restartGame() {
    currentQuestion = 0;
    correct = 0;
    document.getElementById('score').style = 'display: none';
    document.getElementById('cardbox').style = '';
    document.getElementById('progress').style = `width: 0%`;
    document.getElementById('progress').innerHTML = `0 %`;
    showContent();
}


function showEndScreen() {
    document.getElementById('score').style = '';
    document.getElementById('cardbox').style = 'display:none';
    document.getElementById('evaluation-first').innerHTML = `Du hast <b>${correct}</b> von <b>${questions.length}</b> Fragen richtig beantwortet.`;
}


function showNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('length').innerHTML = questions.length;
    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
}


function preventCheeting(trueOrFalse, autoOrNone) {
    document.getElementById('next-question').disabled = trueOrFalse;
    switchIt(autoOrNone);
}
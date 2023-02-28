let currentQuestion = 0;

function showContent() {
    if(currentQuestion >= questions.length){
               showEndScreen();
        
    }
    else {
    document.getElementById('length').innerHTML = questions.length;
    progress();
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
    }
}


function answer(answer) {
    let question = questions[currentQuestion];
    let givenAnswer = question[answer];
    let lastNumber = answer.slice(-1);

    let rightAnswer = `answer_${question['right_answer']}`;

    if (givenAnswer == question[rightAnswer]) {
        document.getElementById(answer).parentNode.classList.add('bg-success');
    }
    else {
        document.getElementById(`answer_${lastNumber}`).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-question').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-question').disabled = true;
    resetColor()
    showContent();

   
}

function resetColor(){
    for( let i = 1; i< 5; i++){
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
        }
}

function progress(){
    document.getElementById('current').innerHTML = currentQuestion +1;
}

function showEndScreen(){
    document.getElementById('cardbox').innerHTML = endScreenHTML();
    currentQuestion = 0;
}

function endScreenHTML(){
    return `<div id="score">
    <div><img src="img/brainResult.png"></div>
    <div>Dein Ergebnis: 10/10 Fragen</div>
    <button class="btn btn-primary mt-3" onclick="showContent()">Neuer Versuch</button>
    </div>
    `;
}
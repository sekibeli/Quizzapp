let currentQuestion = 0;

function init(){
   
    
}

function showContent(){

    document.getElementById('length').innerHTML = questions.length; 
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;

   }

   
   function answer(answer){
    let question = questions[currentQuestion];
    let givenAnswer = question[answer];
    let lastNumber = answer.slice(-1);

    let rightAnswer = `answer_${question['right_answer']}` ;
    
    if (givenAnswer == question[rightAnswer]){
        document.getElementById(answer).parentNode.classList.add('bg-success');
     }
    else{
        document.getElementById(`answer_${lastNumber}`).parentNode.classList.add('bg-danger');
    }
   }


   function react(){

   }
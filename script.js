const quizData=[
    {
        question:'What is my name?',
        a:'Praveen',
        b:'KK',
        c:'Suji',
        d:'Viji',
        correct:'a',     
    },
    {
        question:'Where am I from?',
        a:'Madurai',
        b:'Thoothukudi',
        c:'Tirunelveli',
        d:'Tenaksi',
        correct:'b',       
    },
    {
        question:'Which sport do I like?',
        a:'Golf',
        b:'Table Tennis',
        c:'Badminton',
        d:'Football',
        correct:'c',        
    },
    {
        question:'Whom do I like?',
        a:'Lee C W',
        b:'Lin Dan',
        c:'Chen Long',
        d:'Axelsen',
        correct:'a',        
    },
    {
        question:'Which language do I like the most?',
        a:'JS',
        b:'C',
        c:'C++',
        d:'Python',
        correct:'d',
    }
];

const quiz=document.getElementById('quiz');
const questionEL=document.getElementById('question');
const answerEls=document.querySelectorAll(".answer");
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score =0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionEL.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}

function getSelected(){
   
    let answer =undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer= answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;

    });

}
submitBtn.addEventListener("click",()=>{
    

    const answer=getSelected();
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz<quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button
            onClick="location.reload()">Reload</button>`;
        }
    }


    
});
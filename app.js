const scrambledWord = document.querySelector(".word");
const Hint = document.querySelector(".hint");
const newQ = document.querySelector(".new-question");
const checkAns = document.querySelector(".check-ans");
const inputField = document.querySelector(".input");
const resultDisplay = document.querySelector(".result");
const timer = document.querySelector(".timer");
// set interval clear interval
let runner; 
let clock = maxtimer => {
    clearInterval(runner);//to make timer reset
    runner = setInterval(() => {
        if (maxtimer > 0) {
            maxtimer--;
            return timer.innerText = maxtimer;
        }
        resultDisplay.innerText = `Timer Over Try Again Please`;
        startGame();
    }, 1000)
}

function startGame() {
     clock(30);
    let questions = quiz[Math.floor(Math.random() * quiz.length)]//to get random values from quiz
    let array = questions.word.split("");// spliting the words
    for (let i = array.length - 1; i > 0; i--) {
        let k = Math.floor(Math.random() * (i + 1));//doubt for loop (getting random numbers)
        [array[i], array[k]] = [array[k], array[i]];
    }
    scrambledWord.innerText = array.join("");
    Hint.innerText = `HINT : ${questions.hint} `
    Answer = questions.word.toLocaleLowerCase();
    resultDisplay.innerText = `🎉🎉Start The Game GoodLuck😎😎`;
    inputField.value = "";
    inputField.setAttribute("maxlength", Answer.length);
    console.log(questions, array);
}
startGame();

newQ.addEventListener("click", startGame);// chrome edge 
checkAns.addEventListener("click", checkAnswer);

function checkAnswer() {
    let userInput = inputField.value.toLocaleLowerCase();
    if (!userInput) return resultDisplay.innerText = `PLease enter Your Answer😎😊`
    if (userInput == Answer) {
        return resultDisplay.innerText = `🏆Correct Answer😎😊`
    } else return resultDisplay.innerText = `wrong Answer😒`
}
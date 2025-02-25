const DICE_FACE_FILE_NAME = "dice";
const DICE_FACE_FILE_EXTENSION = ".png";

function dieRandomValue() {
    return Math.ceil(Math.random() * 6);
}

function dieFaceSwap(die, imageFolder) {
    die.setAttribute("src", imageFolder + DICE_FACE_FILE_NAME + dieRandomValue() + DICE_FACE_FILE_EXTENSION);
}

function diceRoll(dice, imageFolder, labelElement) {
    let diceValue=[];
    let diceAnimation;
    let maxValue=0;
    let result="";

    labelElement.innerHTML = "Rolling...";

    //Start the Dice Roll
    diceAnimation = setInterval(() => dice.forEach(die => dieFaceSwap(die, imageFolder)), 100);
    
    //Stop the Dice Roll
    setTimeout(
        function () {
            clearInterval(diceAnimation);
            dice.forEach(die => {
                let fileName = die.getAttribute("src");
                diceValue.push(fileName.slice(fileName.lastIndexOf(".")-1, fileName.lastIndexOf(".")));
            });

            for(let i=0; i < diceValue.length; i++) {
                if (diceValue[i] > diceValue[i-1]){
                    result = "win";
                    maxValue = i;
                }
                else if(diceValue[i] === diceValue[i-1]) {
                    result = "draw";
                }
                else {
                    result = "win";
                    maxValue = i-1;
                }
            }

            showResult(maxValue, result, labelElement);
        }
        , 3000
    );
}

function showResult(dieNumber, result, labelElement) {
    if (result === "draw") {
        labelElement.innerHTML = "DRAW";
    }
    else {
        labelElement.innerHTML = "Player " + (dieNumber+1) + " WINS!";
    }
}
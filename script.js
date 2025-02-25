function diceValue() {
    return Math.ceil(Math.random() * 6);
}

function rollDice(element, imageFolder) {
    const diceAnimation = setInterval(function() {
            let diceNumber = diceValue();
            element.setAttribute("src", imageFolder + "dice" + diceNumber + ".png");
        },
        100
    );

    setTimeout(function() {clearInterval(diceAnimation)}, 3000);
}
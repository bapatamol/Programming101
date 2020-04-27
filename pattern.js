const GLOBAL_SIZE = 7;

function draw() {
    var option = document.getElementById("pattern");
    var selectedOption = option.options[option.selectedIndex].value;
    switch (selectedOption) {
        case "square": drawSquare(); break;
    }
}


function drawSquare() {
    for (var row = 0; row < GLOBAL_SIZE; row++) {
        for (var col = 0; col < GLOBAL_SIZE; col++) {
            appendPatternBox("*");
        }
        appendPatternBox("<br/>");
    }
}



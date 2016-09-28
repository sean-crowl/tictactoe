var turn = 0;

function createX() {
$('.tic').click(function() {
    if (turn % 2 === 0 && $(this).text() == '') {
      $(this).text("X");
      victory();
      turn++;
    }
    if (turn % 2 === 1 && $(this).text() == '') {
      $(this).text("O");
      victory();
      turn++;
    }
});
};

function victory() {
    if ($("#board1").text() == 'X' && $("#board2").text() == 'X' && $("#board3").text() == 'X') {
        alert("X wins!");
    }
    if ($("#board4").text() == 'X' && $("#board5").text() == 'X' && $("#board6").text() == 'X') {
        alert("X wins!");
    }
    if ($("#board7").text() == 'X' && $("#board8").text() == 'X' && $("#board9").text() == 'X') {
        alert("X wins!");
    }
    if ($("#board1").text() == 'X' && $("#board4").text() == 'X' && $("#board7").text() == 'X') {
        alert("X wins!");
    }
    if ($("#board2").text() == 'X' && $("#board5").text() == 'X' && $("#board8").text() == 'X') {
        alert("X wins!");
    }
    if ($("#board3").text() == 'X' && $("#board6").text() == 'X' && $("#board9").text() == 'X') {
        alert("X wins!");
    }
    if ($("#board1").text() == 'X' && $("#board5").text() == 'X' && $("#board9").text() == 'X') {
        alert("X wins!");
    }
    if ($("#board3").text() == 'X' && $("#board5").text() == 'X' && $("#board7").text() == 'X') {
        alert("X wins!");
    }
    if ($("#board1").text() == 'O' && $("#board2").text() == 'O' && $("#board3").text() == 'O') {
        alert("O wins!");
    }
    if ($("#board4").text() == 'O' && $("#board5").text() == 'O' && $("#board6").text() == 'O') {
        alert("O wins!");
    }
    if ($("#board7").text() == 'O' && $("#board8").text() == 'O' && $("#board9").text() == 'O') {
        alert("O wins!");
    }
    if ($("#board1").text() == 'O' && $("#board4").text() == 'O' && $("#board7").text() == 'O') {
        alert("O wins!");
    }
    if ($("#board2").text() == 'O' && $("#board5").text() == 'O' && $("#board8").text() == 'O') {
        alert("O wins!");
    }
    if ($("#board3").text() == 'O' && $("#board6").text() == 'O' && $("#board9").text() == 'O') {
        alert("O wins!");
    }
    if ($("#board1").text() == 'O' && $("#board5").text() == 'O' && $("#board9").text() == 'O') {
        alert("O wins!");
    }
    if ($("#board3").text() == 'O' && $("#board5").text() == 'O' && $("#board7").text() == 'O') {
        alert("O wins!");
    }
}

$(function () {
createX();
});
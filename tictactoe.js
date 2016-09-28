var turn = 0;

function gameRestartX() {
    turn = 0;
    $('.tic').text("");
    $("#restartx").hide();
    $("#restarto").hide();
    $("#boardfull").show();
    $("#xwins").hide();
    $("#owins").hide();

}

function gameRestartO() {
    turn = 1;
    $('.tic').text("");
    $("#restartx").hide();
    $("#restarto").hide();
    $("#boardfull").show();
    $("#xwins").hide();
    $("#owins").hide();

}

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
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
    }
    if ($("#board4").text() == 'X' && $("#board5").text() == 'X' && $("#board6").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
    }
    if ($("#board7").text() == 'X' && $("#board8").text() == 'X' && $("#board9").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
    }
    if ($("#board1").text() == 'X' && $("#board4").text() == 'X' && $("#board7").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
    }
    if ($("#board2").text() == 'X' && $("#board5").text() == 'X' && $("#board8").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
    }
    if ($("#board3").text() == 'X' && $("#board6").text() == 'X' && $("#board9").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
    }
    if ($("#board1").text() == 'X' && $("#board5").text() == 'X' && $("#board9").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
    }
    if ($("#board3").text() == 'X' && $("#board5").text() == 'X' && $("#board7").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
    }
    if ($("#board1").text() == 'O' && $("#board2").text() == 'O' && $("#board3").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
    }
    if ($("#board4").text() == 'O' && $("#board5").text() == 'O' && $("#board6").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
    }
    if ($("#board7").text() == 'O' && $("#board8").text() == 'O' && $("#board9").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
    }
    if ($("#board1").text() == 'O' && $("#board4").text() == 'O' && $("#board7").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
    }
    if ($("#board2").text() == 'O' && $("#board5").text() == 'O' && $("#board8").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
    }
    if ($("#board3").text() == 'O' && $("#board6").text() == 'O' && $("#board9").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
    }
    if ($("#board1").text() == 'O' && $("#board5").text() == 'O' && $("#board9").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
    }
    if ($("#board3").text() == 'O' && $("#board5").text() == 'O' && $("#board7").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
    }
}

$(function () {
createX();
$("#restartx").hide();
$("#restarto").hide();
$("#boardfull").show();
$("#xwins").hide();
$("#owins").hide();
});
var turn = 0;

function gameRestartX() {
    turn = 0;
    $('.tic').text("");
    $("#restartx").hide();
    $("#restarto").hide();
    $("#boardfull").show();
    $("#xwins").hide();
    $("#owins").hide();
    $("#xturn").show();
    $("#oturn").hide();

}

function gameRestartO() {
    turn = 1;
    $('.tic').text("");
    $("#restartx").hide();
    $("#restarto").hide();
    $("#boardfull").show();
    $("#xwins").hide();
    $("#owins").hide();
    $("#xturn").hide();
    $("#oturn").show();

}

function playerturn() {
    if (turn % 2 === 1) {
        $("#xturn").show();
        $("#oturn").hide();
    }
    if (turn % 2 === 0) {
        $("#xturn").hide();
        $("#oturn").show();
    }
    if (victory() == true) {
        $("#xturn").hide();
        $("#oturn").hide();
    }
}

function createX() {
$('.tic').click(function() {
    if (turn % 2 === 0 && $(this).text() == '') {
      $(this).text("X");
      victory();
      playerturn();
      turn++;
    }
    if (turn % 2 === 1 && $(this).text() == '') {
      $(this).text("O");
      victory();
      playerturn();
      turn++;
    }
});
};

function victory() {
    if ($("#board1").text() == 'X' && $("#board2").text() == 'X' && $("#board3").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board4").text() == 'X' && $("#board5").text() == 'X' && $("#board6").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board7").text() == 'X' && $("#board8").text() == 'X' && $("#board9").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board1").text() == 'X' && $("#board4").text() == 'X' && $("#board7").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board2").text() == 'X' && $("#board5").text() == 'X' && $("#board8").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board3").text() == 'X' && $("#board6").text() == 'X' && $("#board9").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board1").text() == 'X' && $("#board5").text() == 'X' && $("#board9").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board3").text() == 'X' && $("#board5").text() == 'X' && $("#board7").text() == 'X') {
        $("#boardfull").hide();
        $("#restartx").show();
        $("#xwins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board1").text() == 'O' && $("#board2").text() == 'O' && $("#board3").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board4").text() == 'O' && $("#board5").text() == 'O' && $("#board6").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board7").text() == 'O' && $("#board8").text() == 'O' && $("#board9").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board1").text() == 'O' && $("#board4").text() == 'O' && $("#board7").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board2").text() == 'O' && $("#board5").text() == 'O' && $("#board8").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board3").text() == 'O' && $("#board6").text() == 'O' && $("#board9").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board1").text() == 'O' && $("#board5").text() == 'O' && $("#board9").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
    if ($("#board3").text() == 'O' && $("#board5").text() == 'O' && $("#board7").text() == 'O') {
        $("#boardfull").hide();
        $("#restarto").show();
        $("#owins").show();
        $("#xturn").hide();
    $("#oturn").hide();
    }
}

$(function () {
createX();
$("#restartx").hide();
$("#restarto").hide();
$("#boardfull").show();
$("#xwins").hide();
$("#owins").hide();
$("#xturn").show();
$("#oturn").hide();
});
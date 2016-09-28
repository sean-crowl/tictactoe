var turn = 0;

function createX() {
$('.tic').click(function() {
    if (turn % 2 === 0 && $(this).text() == '') {
      $(this).text("X");
      turn++;
    }
    if (turn % 2 === 1 && $(this).text() == '') {
      $(this).text("O");
      turn++;
    }
});
};

$(function () {
createX();
});
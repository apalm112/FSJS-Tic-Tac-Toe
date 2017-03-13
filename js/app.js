// Treehouse Project-04: Tic-Tac-Toe Game
'use strict';
(function (module) {

// Global Variables -----------------------------------------------------
  // Get the start screen div
  const $start = $('#start');
  // Get the button that hides the start screen
  const $button = $('.button');
  const $finish1 = $('#finish1');
  const $finish2 = $('#finish2');
  const $tie = $('#tie');

  const $player1 = $('#player1');
  const $player2 = $('#player2');
  const $board = $('#board');
  const $boxes = $('.boxes');
  const twoDimArr = [];
  const game = document.querySelectorAll('.boxes');
  let count = 0;

  const player1 = {
    name: 'player1',
    bgColor: '#FFA000',
    svg: 'img/o.svg',
    boxFill: 'box-filled-1',
    isWinner: false
  };

  const player2 = {
    name: 'player2',
    bgColor: '#3688C3',
    svg: 'img/x.svg',
    boxFill: 'box-filled-2',
    isWinner: false
  };

// Main Function ------------------------------

  // On page load, show the start screen.
  $(document).ready(function() {
    $start.css('display', 'block');
  });
  // On button click, start the game.
  $button.on('click', function() {
    $start.css('display', 'none');
    $player1.toggleClass('active');
    play(player1);
    pickSquare(player1);
  });

  function play(player) {
    $('.box').hover(
      function() {
        $(this).toggleClass(player.boxFill);
      });
  }

  function pickSquare(player) {
    $('.box').click(
      function() {
        $(this).css({'background-image': 'url(' + player.svg + ')'});
        $(this).css({'background-color': player.bgColor});
        count++;
        console.log(count);
        increaseCount();
      }
    )
  }


  $finish1.css('display', 'none');
  $finish2.css('display', 'none');
  $tie.css('display', 'none');


  function increaseCount() {
    if (count < 9) {
      togglePlayer();
    } else if (count > 9) {
      $finish1.css('display', 'block');
    }
  }

  function togglePlayer() {
    $player1.toggleClass('active');
    $player2.toggleClass('active');
  }


}) (window);

// Treehouse Project-04: Tic-Tac-Toe Game
'use strict';
(function(module) {

/*
  From Treehouse The Module Pattern:

  (function() {
    // code
  }(window) );

  That is the self-enclosing function or
  the module pattern.
  Can also use a '+' or '!' sign,

  !function(module) {
    // code
  }(window);
*/


// Global Variables -----------------------------------------------------
  // Get the start screen div
  const $start = $('#start');
  // Get the button that hides the start screen
  const $button = $('.button');
  // Get 'O' win game div
  const $finish1 = $('#finish1');
  const $finish2 = $('#finish2');
  const $tie = $('#tie');

  // Gets 'O' & 'X' divs at top of game board
  const $player1 = $('#player1');
  const $player2 = $('#player2');
  // Gets entire game board div
  const $board = $('#board');
  // Gets ul of of game board
  const $boxes = $('.boxes');
  // create MT array to hold stuff?????
  let twoDimArr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  // Get all the li's of the game grid
  // EVEN BEING USED??????????
  const game = document.querySelectorAll('.boxes');

  function setGridToZero(num) {
    let liZero = document.querySelectorAll('.box');
    for (let idx=0;idx<liZero.length;idx++) {
      liZero[idx].value = num;
    }
  }

  // Count something????
  let count = 0;


  // Are these needed???? Prolly...
  const player1 = {
    name: 'player1',
    bgColor: '#FFA000',
    svg: 'img/o.svg',
    boxFill: 'box-filled-1',
    isWinner: false,
    grid: 'O'
  };

  const player2 = {
    name: 'player2',
    bgColor: '#3688C3',
    svg: 'img/x.svg',
    boxFill: 'box-filled-2',
    isWinner: false,
    grid: 'X'
  };


// Main Functions -------------------------------------

  // On page load, show the start screen.
  $(document).ready(function() {
    $start.css('display', 'block');
    // Hide the various winning screens.
    $finish1.css('display', 'none');
    $finish2.css('display', 'none');
    $tie.css('display', 'none');
    setGridToZero('hobbits');
    // call a function which controls the start button
    // and won't start game until a name is entered
    startGame();
  });


  function enterName() {
    // Meets rubric EC: On the start screen, prompt the user add their name before the game starts.
    const playerOneInput = document.getElementById('name1');
    const playerOneLabel = document.getElementsByClassName('nameOne');
    const playerTwoInput = document.getElementById('name2');
    const playerTwoLabel = document.getElementsByClassName('nameTwo');

    if (playerOneInput.value != '' && playerTwoInput.value != '') {
      // Meets rubric: Display the player’s name on the board screen during game play
      playerOneLabel[0].textContent = playerOneInput.value;
      playerTwoLabel[0].textContent = playerTwoInput.value;
      $start.css('display', 'none');
      $finish1.css('display', 'none');
      $finish2.css('display', 'none');
    } else {
      playerOneInput.placeholder = 'Enter Player 1 Name!';
      playerTwoInput.placeholder = 'Enter Player 2 Name!';
    }
  }

  function startGame() {
    // On button click, start the game.
    $button.on('click', function() {
      enterName();
    //  $player1.toggleClass('active');
      togglePlayer();
    });
  }

  function play(player) {
    // Meets rubric: When the current player mouses over an empty square on the board, it's symbol the X or O should appear on the square. Also does color, NOT NEEDED.
    $('.box').hover(
      function() {
        $(this).toggleClass(player.boxFill);
      });
  }

  function pickSquare(player) {
    if ($(this).value === 0) {
      $('.box').click(
        function() {
          $(this).value = player.grid;
          $(this).css({'background-image': 'url(' + player.svg + ')'});
          $(this).css({'background-color': player.bgColor});
          count++;
          increaseCount();
        }
      )
    }
  }

  function increaseCount() {
    // NOT WORKING
    if (count < 9) {
      // if (player1.class === 'active') {
      //   //console.log(player1);
      // } else {
      //   // console.log(player2);
      // }
      togglePlayer();
    } else if (count >= 9) {
      $finish1.css('display', 'block');
      count = 0;
    }
  }

  function togglePlayer() {
    // Changes the active O or X on game board.
    // NOT WORKING
    if (count === 0) {
      $player1.toggleClass('active');
    //  $player2.toggleClass('active');
      play(player1);
      pickSquare(player1);
    } else if (count != 0 && $player1.hasClass('active')) {
      $player1.toggleClass('active');
      $player2.toggleClass('active');
      play(player1);
      pickSquare(player1);
    } else if ($player2.hasClass('active')) {
      $player1.toggleClass('active');
      $player2.toggleClass('active');
      play(player2);
      pickSquare(player2);
    }
  }


  // Add the game play following these rules:
  // Play alternates between X and O.
  // The current player is indicated at the top of the page -- the box with the symbol O or X is highlighted for the current player. You can do this by simply adding the class .active to the proper list item in the HTML. For example, if it's player one's turn, the HTML should look like this: <li class="players active" id="player1">
  // When the current player mouses over an empty square on the board, it's symbol the X or O should appear on the square. You can do this using the x.svg or o.svg graphics (hint use JavaScript to set the background-image property for that box.)
  // Players can only click on empty squares. When the player clicks on an empty square, attach the class box-filled-1 (for O) or box-filled-2 (for X) to the square. The CSS we're providing will automatically add the proper image to the square marking it as occupied.
  // The game ends when one player has three of their symbols in a row either horizontally, vertically or diagonally. If all of the squares are filled and no players have three in a row, the game is a tie.

})(window);

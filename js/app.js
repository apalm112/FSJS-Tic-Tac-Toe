/* eslint-disable*/
// ABOVE LINE DISABLES ESLINT FOR THIS FILE.
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

  // Trying to code 7/13/17
  let gridSquare = document.querySelectorAll('.box');


  let turn = 0;
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

  let liNodeList = document.querySelectorAll('.box');

  let liHTMLCollection = document.getElementsByClassName('.box');

  const boardState = {
    // Object to experiment w/ making an Object to track the state of the game in the DOM & maybe help control the game w/ its own methods.



  };

// Main Functions ------------------------------------------------------------

  // On page load, show the start screen.
  $(document).ready(function() {
    $start.css('display', 'block');
    // Hide the various winning screens.
    $finish1.css('display', 'none');
    $finish2.css('display', 'none');
    $tie.css('display', 'none');
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
    //  enterName();
    $start.css('display', 'none');
    $finish1.css('display', 'none');
    $finish2.css('display', 'none');
      setGridToZero('MT');
      $player1.toggleClass('active');
      hover(player1);
      clickIt(player1);
    });
  }

  let liZero = document.querySelectorAll('.box');
  // TEST LINE BELOW
  let turd = document.getElementsByClassName('.box');

  function setGridToZero(num) {
    for (let idx=0;idx<liZero.length;idx++) {
     liZero[idx].setAttribute('fuck', num);
    }
  }

  function hover(player) {
  // Meets rubric: When the current player mouses over an empty square on the board, it's symbol the X or O should appear on the square. Also does color, NOT NEEDED.
  // Function checks if grid square is empty, if so then displays current player symbol & color on grid.
    $('.box').hover(
      function() {
      // TODO:  what if, write a Conditional that checks the turn number and then shows the corresponding player boxFill
        // if (turn === 0 || turn === 2 || turn === 4 || turn === 6 || turn === 8) {
        //   if ($(this)[0].attributes[1].value === 'MT') {
        //     $(this).toggleClass('box-filled-1');
            $(this).toggleClass(player.boxFill, 'MT');
            // console.log( $(this)[0]);
            // console.log(player.boxFill);
          // } else if (turn === 1 || turn === 3 || turn === 5 || turn === 7) {
        //    $(this).toggleClass('box-filled-2');
          });
        // }
      // });
  }

  function clickIt(player) {
    // TODO: function is not dropping player1 class box-filled-1, won't add a 'X' to the game board.
    // Slack from N Hampton: You would assign another .one() handler to each of those boxes in that instance. `jQuery.one()` is the same as `jQuery.on()`, except that it runs `$(this).off(event)` at the end of the callback
      $('.box').one('click', function() {
        if ($(this)[0].attributes[1].value === 'MT') { // This line works, checked in console!
        // Conditional checks the board li to see if it's MT, if MT then change color/img.
          $(this).css({'background-image': 'url(' + player.svg + ')'});
          $(this).css({'background-color': player.bgColor});
          // Set atr to 'O' or 'X'
          $(this)[0].setAttribute('fuck', player.grid);
          // console.log('$(this)[0].attribute[1].value is on line below: ');
          // console.log( $(this)[0].attributes[1].value );
          // console.log( $(this).attr('fuck', player.grid) );
          count++;
          turn++;
          console.log(turn);
        //  hover();
          increaseCount();
          // console.log('player.grid is: ' + player.grid);
          //  console.log(count + ' <--count, FUCK THIS SHIT!');
        }
      });
  }

  function increaseCount() {
    // Play alternates between X and O.
    // NOT WORKING TODO:  I think this function is where the problem is.  As hover() & click() functions both work.
    // It's only when this function is called that shit starts fucking up.
    $player1.toggleClass('active');
    $player2.toggleClass('active');
    hover(player2);








    // This block below is shit.
  /*  if ( $player1.hasClass('active') && count < 9) {
      $player1.toggleClass('active');
      $player2.toggleClass('active');
      hover(player2);
      // clickIt(player2);
    } else if ($player2.hasClass('active') && count < 9) {
      $player2.toggleClass('active');
      $player1.toggleClass('active');
      hover(player1);
      // clickIt(player1);
    } else if (count >= 9) {
      $finish1.css('display', 'block');
      count = 0;
      startGame();
    } */
  }

  // Add the game play following these rules:
  // The current player is indicated at the top of the page -- the box with the symbol O or X is highlighted for the current player. You can do this by simply adding the class .active to the proper list item in the HTML. For example, if it's player one's turn, the HTML should look like this: <li class="players active" id="player1">
  // When the current player mouses over an empty square on the board, it's symbol the X or O should appear on the square. You can do this using the x.svg or o.svg graphics (hint use JavaScript to set the background-image property for that box.)
  // Players can only click on empty squares. When the player clicks on an empty square, attach the class box-filled-1 (for O) or box-filled-2 (for X) to the square. The CSS we're providing will automatically add the proper image to the square marking it as occupied.
  // The game ends when one player has three of their symbols in a row either horizontally, vertically or diagonally. If all of the squares are filled and no players have three in a row, the game is a tie.

})(window);

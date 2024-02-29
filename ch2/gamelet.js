/*
    Gamelet: A starting of for writing games
    Author: Mancs

    Instructions:
    Includde gamelet, js in an HTML document containing 
    an alement with an id of 'ball'
    The script will detect when the left or right arrow
    key is pressed and will move the ball element 
    accordingly.
 */

const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0

/*
    handelKeyPress
    responds to certain key presses by updating position
 */
function handleKeyPress(e){
    if(e.code === 'ArrowLeft'){
        position -= 10
    }
    if(e.code === 'ArrowRight'){
        position += 10
    }
    if (position < 0){
        position = 0
    }
    refresh(); // reposition the ball
}

/*
    refresh
    changes the position of the ball
 */
function refresh(){
    ball.style.left = position + 'px';
}
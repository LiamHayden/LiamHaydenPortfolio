//I think I need to use animations instead of this

// if another button is clicked stop moving this way, move another. 

// variable for both divs
let snake = document.getElementById("snake");
let border = document.getElementById("container");

// variables for pos of snake and border
let snakePos = snake.getBoundingClientRect();
let borderPos = border.getBoundingClientRect();

// interval variable
let id;

// if snake hits the border end game


// const down = () => {
//     clearInterval(id);
//     id = setInterval(frame, 3);
//     let pos = 0;
//     function frame() {
//         if (pos == 600) {
//             clearInterval(id);
//         }else {
//             pos++;
//             snakeTop = snake.style.top = pos + "px";
//         }
//     }
// }
let test = 10;
const down = () => {
    test++;
    snake.style.marginTop = test + "px";
}

const up = () => {
    let pos = 600;
    id = setInterval(frame, 3);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            snake.style.top = pos + "px";
        }
    }
}
const left = () => {
    let pos = 720;
    id = setInterval(frame, 3);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            snake.style.left = pos + "px";
        }
    }
}
const right = () => {
    let pos = 0;
    id = setInterval(frame, 3);
    if (pos == 720) {
        return;
    }
    function frame() {
        if (pos == 720) {
            clearInterval(id);
        } else {
            pos++;
            snake.style.left = pos + "px";
        }
    }
}

// rotate the snake for left and right turns
const rotate = () => {
    let snake = document.getElementById("snake");
    let width = snake.style.width;
    let height = snake.style.height;
    // swap height and width
    if (height < width){
        let newWidth = height;
        let newHeight = width;
        snake.style.width = newWidth;
        snake.style.height = newHeight;
    }

    
}

// rotate the snake for up and down
const rotate2 = () => {
    let snake = document.getElementById("snake");
    let width = snake.style.width;
    let height = snake.style.height;
    // swap height and width
    if (height > width){
        let w = width;
        let h = height;
        snake.style.width = h;
        snake.style.height = w;
    }
    
    
}

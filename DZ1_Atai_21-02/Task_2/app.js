const childElement = document.querySelector(".child");
let x = 0;

const changePosition = () => {
    x += 100;
    childElement.style.left = x + "px";
    if (x < 1000) {
        changePosition();
    }
};

changePosition();

const triangle = document.querySelector(".triangle");

let positionX = -25;
let positionY = 0;

const handleTriangleMove = () => {
    if (positionX >= -25 && positionX <= 200 && positionY <= 445) {
        positionX += 10.6;
        positionY += 21.3;
        triangle.style.left = `${positionX}px`;
        triangle.style.top = `${positionY}px`;
        setTimeout(handleTriangleMove, 100);
    } else if (positionX >= -240 && positionY >= 445) {
        positionX -= 10.6;
        triangle.style.left = `${positionX}px`;
        setTimeout(handleTriangleMove, 100);
    } else if (positionX <= 0 && positionY > 0) {
        positionX += 10.6;
        positionY -= 21.3;
        triangle.style.left = `${positionX}px`;
        triangle.style.top = `${positionY}px`;
        setTimeout(handleTriangleMove, 100);
    }
};

handleTriangleMove();

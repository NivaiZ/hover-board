const onSetColor = (evt) => {
    const element = evt.target
    const SetColor = onGetRandomColor();
    element.style.background = SetColor;
    element.style.boxShadow = `0 0 2px ${SetColor}, 0 0 10px ${SetColor}`
};

const onRemoveColor = (evt) => {
    const element = evt.target
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #1d1d1d`
};

const board = document.querySelector('#board');
const SQUARES__NUMBER = 500;
const colorSqaures = ['#32CD32', '#8B008B', '#800000', '#00FFFF', '#000080'];
for (let i = 0; i < SQUARES__NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square);
    square.addEventListener('mouseover', onSetColor)
    square.addEventListener('mouseleave', onRemoveColor)
};

const onGetRandomColor = () => {
    return colorSqaures[Math.floor(Math.random() * colorSqaures.length)]
};
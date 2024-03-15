let boardObj = {
    "00": 0,
    "01": 0,
    "02": 0,
    "03": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
    "20": 0,
    "21": 0,
    "22": 0,
    "23": 0,
    "30": 0,
    "31": 0,
    "32": 0,
    "33": 0,
}

function getEmptyCells() {
    let emptyCells = Object.keys(boardObj).filter(key => boardObj[key] == 0);
    if (emptyCells.length > 0)
        return emptyCells;
    else
        return null;
}

function getRandomPosition(emptyCells) {
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function assignRandomPosition(randomPosition) {
    boardObj[randomPosition] = Math.random() < 0.9 ? 2 : 4;
}

function addRandomTile() {
    let emptyCells = getEmptyCells();
    if (emptyCells != null) {
        assignRandomPosition(getRandomPosition(emptyCells));
    }
}

function refreshBoard() {
    for (const key in boardObj) {
        if (boardObj[key] != 0)
            document.getElementById(key).innerHTML = boardObj[key];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    addRandomTile();
    addRandomTile();
    refreshBoard();
});
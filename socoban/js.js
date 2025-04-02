const map = [
    [1,1,1,1,1,1,1,1,1],
    [1,1,0,0,0,0,3,3,1],
    [1,3,2,2,2,0,1,1,1],
    [1,0,0,4,2,3,1,1,1],
    [1,3,2,2,2,0,1,1,1],
    [1,1,0,0,0,0,3,3,1],
    [1,1,1,1,1,1,1,1,1],
];

const gameArea = document.querySelector('.map');

for(let x = 0; x < map.length; x++){
    const row = document.createElement('div');
    row.className = 'row';

for(let y = 0; y < map[x].length; y++){
    const cell = document.createElement('div');
    cell.className = 'cell';

    switch(map[x][y]){
        case 0:
                cell.classList.add('pole');
                break;
        case 1:
            cell.classList.add('wall');
            break;
        case 2:
                cell.classList.add('box');
                break;
        case 3:
                cell.classList.add('goal');
                break;
        case 4:
                    cell.classList.add('man');
                    break;
                    

    }
    row.append(cell);
  } 
  gameArea.append(row)
}
console.log(gameArea);

const man = {
    x: 3,
    y: 3,
    value: 4,
};

for(let x = 0; x < 10; x++){
    for(let y = 0; y < 10; y++){
        const cell = document.createElement('div');
        cell.className ='cell';
        cell.dataset.coor = 'x' + x + 'y' + y;
        gameArea.append(cell);
    }
}

const currentPos = document.querySelector(`[data-coor="x${man.x}y${man.y}"]`);
currentPos.className = 'cell cell-red'
const span = document.querySelector('.span')

const moveMan = (newX, newY)=> {
    document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className = 
    "cell";
    document.querySelector(`[data-coor="x${newX}y${newY}"]`).className = 
    "cell cell-red";
    man.x = newX;
    man.y = newY;
};


document.addEventListener('keydown', function(event) {
    switch(event.code) {
    case 'ArrowUp':
       moveMan(man.x - 1, man.y);
        break;
    case 'ArrowDown':
        moveMan(man.x + 1, man.y);
        break;
    case 'ArrowLeft':
        moveMan(man.x, man.y - 1);
        break;
    case 'ArrowRight':
        moveMan(man.x, man.y + 1);
        break;
    } 
    });

const getTimer = {
    value: 0,
    changeTimer(){
co9nst TimerID

        
        const map = [
    [1,1,1,1,1,1,1,1,1],
    [1,1,0,0,0,0,3,3,1],
    [1,3,2,2,2,0,1,1,1],
    [1,0,0,4,2,3,1,1,1],
    [1,3,2,2,2,0,1,1,1],
    [1,1,0,0,0,0,3,3,1],
    [1,1,1,1,1,1,1,1,1],
];

const gameArea = document.querySelector('.map');
const counterBox = document.querySelector('.counter');
const timerBox = document.querySelector('.timer__box');

//счетчик шагов
function createCounter(){
    let steps = 1;

    function changeSteps(){
        return ++steps;
    }
    return changeSteps;
}

const counter = createCounter();


document.addEventListener('keydown', function(event){
    if(event.code === 'Space'){
        counter();
    }
    counterBox.textContent = counter;
});

// подсчет времени
const gameTimer = {
    value: 0,
    changeTimer(){
        this.value++;
    },
};

const timerId = setInterval(() => {
    gameTimer.changeTimer();
    timerBox.textContent = `${Math.floor(gameTimer.value / 60) < 10 ? '0' + Math.floor(gameTimer.value / 60) : Math.floor(gameTimer.value / 60)}:${gameTimer.value % 60 < 10 ? '0' + gameTimer.value % 60 : gameTimer.value % 60}`;
}, 1000);

    








for(let x = 0; x < map.length; x++){
    const row = document.createElement('div');
    row.className = 'row';

for(let y = 0; y < map[x].length; y++){
    const cell = document.createElement('div');
    cell.className = 'cell';

    switch(map[x][y]){
        case 0:
                cell.classList.add('pole');
                break;
        case 1:
            cell.classList.add('wall');
            break;
        case 2:
                cell.classList.add('box');
                break;
        case 3:
                cell.classList.add('goal');
                break;
        case 4:
                    cell.classList.add('man');
                    break;
                    

    }
    row.append(cell);
  } 
  gameArea.append(row)
}
console.log(gameArea);


//const gameArea = document.querySelector('.gamearea');

const man = {
    x: 3,
    y: 3,
    value: 4,
};

for(let x = 0; x < 0; x++){
    for(let y = 0; y < 0; y++){
        const cell = document.createElement('div');
        cell.className ='cell';
        cell.dataset.coor = 'x' + x + 'y' + y;
        gameArea.append(cell);
    }
}

const currentPos = document.querySelector(`[data-coor="x${man.x}y${man.y}"]`);
currentPos.className = 'cell cell-red'
const span = document.querySelector('.span')

const moveMan = (newX, newY)=> {
    document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className = 
    "cell";
    document.querySelector(`[data-coor="x${newX}y${newY}"]`).className = "cell cell-red";
    man.x = newX;
    man.y = newY;
};



// const moveMan = (newX, newY) => {
//     // Проверка границ и стен
//     if (map[newX][newY] !== 1) { // Если не стена
//         // Обновление позиции игрока на карте
//         map[man.x][man.y] = 0; // Удаляем человека с текущей позиции
//         man.x = newX; // Обновляем координаты игрока
//         man.y = newY; // Обновляем координаты игрока
//         map[man.x][man.y] = man.value; // Устанавливаем человека на новой позиции
        
//     }
// };

document.addEventListener('keydown', function(event) {
    switch(event.code) {
    case 'ArrowUp':
       moveMan(man.x - 1, man.y);
        break;
    case 'ArrowDown':
        moveMan(man.x + 1, man.y);
        break;
    case 'ArrowLeft':
        moveMan(man.x, man.y - 1);
        break;
    case 'ArrowRight':
        moveMan(man.x, man.y + 1);
        break;
    } 
    });
    

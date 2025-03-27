const map = [
    [1,1,1,1,1,1,1,1,1],
    [1,1,0,0,0,0,3,3,1],
    [1,3,2,2,2,0,1,1,1],
    [1,0,0,4,2,3,1,1,1],
    [1,3,2,2,2,0,1,1,1],
    [1,1,0,0,0,0,3,3,1],
    [1,1,1,1,1,1,1,1,1],
];

// const gameArea = document.querySelector('.map');

// // Отрисовка карты
// for (let x = 0; x < map.length; x++) {
//     const row = document.createElement('div');
//     row.className = 'row';

//     for (let y = 0; y < map[x].length; y++) {
//         const cell = document.createElement('div');
//         cell.className = 'cell';
//         cell.dataset.coor = `x${x}y${y}`; // Задаем координаты в data-атрибуте

//         switch (map[x][y]) {
//             case 0:
//                 cell.classList.add('pole');
//                 break;
//             case 1:
//                 cell.classList.add('wall');
//                 break;
//             case 2:
//                 cell.classList.add('box');
//                 break;
//             case 3:
//                 cell.classList.add('goal');
//                 break;
//             case 4:
//                 cell.classList.add('man');
//                 break;
//         }

//         row.append(cell);
//     }
//     gameArea.append(row);
// }

// const man = {
//     x: 3,
//     y: 3,
//     value: 4,
// };

// // Устанавливаем начальную позицию игрока
// const currentPos = document.querySelector(`[data-coor="x${man.x}y${man.y}"]`);
// currentPos.classList.add('cell-red');

// const moveMan = (newX, newY) => {
//     // Проверка на границы и стены
//     if (map[newX] && map[newX][newY] !== undefined && map[newX][newY] !== 1) {
//         // Проверяем на наличие бокса для перемещения
//         if (map[newX][newY] === 2) {
//             // Проверяем следующую клетку в направлении перемещения бокса
//             const nextX = newX + (newX - man.x);
//             const nextY = newY + (newY - man.y);
//             // Если следующая клетка пустая (поль) или цель
//             if (map[nextX] && map[nextX][nextY] !== 1 && map[nextX][nextY] !== 2) {
//                 // Сдвигаем бокс
//                 map[nextX][nextY] = 2;
//                 map[newX][newY] = 0; // Очищаем место, где был бокс
//             } else {
//                 return; // Если нельзя сдвинуть бокс, выходим
//             }
//         }

//         // Убираем красный квадрат с текущей позиции
//         document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).classList.remove('cell-red');

//         // Обновляем позицию игрока
//         man.x = newX;
//         man.y = newY;

//         // Устанавливаем новую позицию игрока как красную
//         const newPos = document.querySelector(`[data-coor="x${man.x}y${man.y}"]`);
//         newPos.classList.add('cell-red');
//     }
// };

// // Обработка нажатий клавиш
// document.addEventListener('keydown', function(event) {
//     switch (event.code) {
//         case 'ArrowUp':
//             moveMan(man.x - 1, man.y);
//             break;
//         case 'ArrowDown':
//             moveMan(man.x + 1, man.y);
//             break;
//         case 'ArrowLeft':
//             moveMan(man.x, man.y - 1);
//             break;
//         case 'ArrowRight':
//             moveMan(man.x, man.y + 1);
//             break;
//     }
// });





const gameArea = document.querySelector('.map');
const gameArea2 = document.querySelector('.gamearea');  // Убедитесь, что этот элемент существует!

const man = {
    x: 3, // Начальная позиция человека (x)
    y: 3, // Начальная позиция человека (y)
    value: 4,
};

// Функция для отрисовки карты и человека
const drawMap = () => {
    gameArea.innerHTML = ''; // Очищаем карту перед перерисовкой
    for (let x = 0; x < map.length; x++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let y = 0; y < map[x].length; y++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            switch (map[x][y]) {
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
        gameArea.append(row);
    }
}

// Вызываем функцию для первоначальной отрисовки
drawMap();

// Функция для перемещения человека
const moveMan = (newX, newY) => {
    // Проверяем, не выходит ли новая позиция за границы карты
    if (newX < 0 || newX >= map.length || newY < 0 || newY >= map[0].length) {
        return;
    }

    const mapValue = map[newX][newY];

    // Если человек пытается переместить ящик
    if (mapValue === 2) {
        const boxMoveX = newX + (newX - man.x);
        const boxMoveY = newY + (newY - man.y);

        // Проверяем, можно ли переместить ящик
        if (boxMoveX >= 0 && boxMoveX < map.length && boxMoveY >= 0 && boxMoveY < map[0].length && map[boxMoveX][boxMoveY] === 0) {
            // Перемещаем ящик
            map[boxMoveX][boxMoveY] = 2;
            map[newX][newY] = 4;
            map[man.x][man.y] = 0;
            man.x = newX;
            man.y = newY;
            drawMap(); // Перерисовываем карту

            console.log("Moved box to", boxMoveX, boxMoveY);
            return;
        } else {
            console.log("Cannot move box.");
            return;
        }
    }

    // Если человек пытается пройти сквозь стену
    if (mapValue === 1) {
        return; // Не двигаемся
    }

    // Если новая позиция допустима
    map[newX][newY] = 4; // Устанавливаем новую позицию человека на карте
    map[man.x][man.y] = 0; // Убираем человека со старой позиции
    man.x = newX; // Обновляем координаты человека
    man.y = newY;

    drawMap(); // Перерисовываем карту
};

// Обработчик нажатия клавиш
document.addEventListener('keydown', function (event) {
    let newX = man.x;
    let newY = man.y;

    switch (event.code) {
        case "ArrowUp":
            newX--;
            break;
        case "ArrowDown":
            newX++;
            break;
        case "ArrowLeft":
            newY--;
            break;
        case "ArrowRight":
            newY++;
            break;
    }

    moveMan(newX, newY);
});

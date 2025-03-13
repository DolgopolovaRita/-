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

document.addEventListener('keydown', function(event)){
    case 'ArrowUp':
        document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).
        className = 'cell';
        man.x--;
        document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).
    }


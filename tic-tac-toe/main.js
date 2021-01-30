const equals3 = (a, b, c) => {
    return (a == b && b == c && a != '');
}

const checkWinner = (model) => {
    let winner = null;

    // я захотел масштабируемое решение, простите
    // оставляю комментарии чтобы было проще понять логику
    
    // это для проверки диагонали ii
    let tmpD = [];
    // это для проверки диагонали ij
    let tmpR2 = [];

    let draw = [];

    for (let i = 0; i < model[0].length; i++) {
        // делаем из строки set
        let xSet = new Set(model[i]);
        // если длина set = 1 получим два варианта
        if (xSet.size == 1) {
            // отметаем вариант с пустой строкой
            if (model[i][0] != '') {
                // передаём первый элемент текущей строки в победителя
                return model[i][0];
            }
        }
        // создаю временный array для хранения вертикальной строки
        let tmp = [];
        for (let j = 0; j < model[0].length; j++) {
            // формирую "столбец"
            tmp.push(model[j][i]);
            // если его длина равна общей длине поля, начинаем проверку
            if (tmp.length == model[0].length) {
                // реобразуем array в set, чтобы убрать повторяющиеся значения
                let ySet = new Set(tmp);
                // если длина set = 1 получим два варианта
                if (ySet.size == 1) {
                    // отметаем вариант с пустой строкой
                    if (model[j][i] != '') {
                        // передаём последний элемент текущей строки в победителя
                        return model[j][i];
                    }
                } else {
                    tmp = [];
                }
            }
        }

        // проверка диагонали ii
        tmpD.push(model[i][i]);
        // наше поле - квадрат, используем это свойство
        if (tmpD.length == model[0].length) {
            let tmpDSet = new Set(tmpD);
            // логика та же самая
            // если длина set = 1 получим два варианта
            if (tmpDSet.size == 1) {
                // отметаем вариант с пустой строкой
                if (model[i][i] != '') {
                    // передаём последний элемент текущей строки в победителя
                    winner = model[i][i];
                    return winner;
                }
            }
        }
        // для проверки обратной диагонали придётся пустить циклы в обратную сторону
        // проверка диагонали ij
        tmpR2.push(model[i][model[0].length - i -1]);
        // наше поле - квадрат, используем это свойство
        if (tmpR2.length == model[0].length) {
            let tmpR2Set = new Set(tmpR2);
            // логика та же самая
            // если длина set = 1 получим два варианта
            if (tmpR2Set.size == 1) {
                // отметаем вариант с пустой строкой
                if (model[i][model[0].length - i -1] != '') {
                    // передаём последний элемент текущей строки в победителя
                    winner = model[i][model[0].length - i -1];
                    return winner;
                }
            }
        }

        // ничью проверяем через оставшиеся свободными клетки
        model[i].forEach(element => {
            draw.push(element);
        });
        // если прошли по всем строкам поля
        if (i+1 == model[0].length) {
            // формируем набор уникальных значений
            let drawSet = new Set(draw);
            // если пустая клетка в этот список не входит
            if (!drawSet.has('')) {
                // возвращаем ноль
                return 0;
            }
        }

    }
}

const game = () => {
    const model = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    const playerX = 'X';
    const playerO = 'O';
    let currentPlayer = playerX;

    const $game = document.querySelector('#game');
    const $table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const $tr = document.createElement('tr');
        $tr.dataset.index = i;

        for (let j = 0; j < 3; j++) {
            const $td = document.createElement('td');
            $td.dataset.index = j;
            $tr.appendChild($td);
        }

        $table.appendChild($tr);
    }

    $game.appendChild($table);

    $table.addEventListener('click', (e) => {
        const row = e.target.parentNode.dataset.index;
        const column = e.target.dataset.index;

        // 2. check if td assigned -- done
        if (e.target.innerHTML == '') {
            model[row][column] = currentPlayer;
            e.target.innerHTML = currentPlayer;

            const winner = checkWinner(model);
            if (winner != null) {
                if (winner == 0) {
                    alert('This is the end. Draw!')
                } else {
                    alert(`Winner: ${winner}`);
                }
            }

            // 1. tie

            currentPlayer = currentPlayer === playerX ? playerO : playerX;
        }
    });
}

window.onload = () => {
    game();
};

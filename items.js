let item1 = {
    "id": 1,
    "category": 1,
    "params": [{
        "name": "Товар 1",
        "price": 1,
        "img_link": "../img1.jpg"
    }]
};
let item2 = {
    "id": 2,
    "category": 1,
    "params": [{
        "name": "Товар 2",
        "price": 10,
        "img_link": "../img2.jpg"
    }]
};
let item3 = {
    "id": 3,
    "category": 2,
    "params": [{
        "name": "Товар 3",
        "price": 100,
        "img_link": "../img3.jpg"
    }]
};
let item4 = {
    "id": 4,
    "category": 2,
    "params": [{
        "name": "Товар 4",
        "price": 1000,
        "img_link": "../img4.jpg"
    }]
};
let item5 = {
    "id": 5,
    "category": 3,
    "params": [{
        "name": "Товар 5",
        "price": 10000,
        "img_link": "../img5.jpg"
    }]
};
let item6 = {
    "id": 6,
    "category": 3,
    "params": [{
        "name": "Товар 6",
        "price": 100000,
        "img_link": "../img3.jpg"
    }]
};

let items = [item1, item2, item3, item4, item5, item6];

function drowItems(items) {
    // обозначаем место куда будем направлять сгенерырованный блок страницы
    let target = document.getElementsByClassName('items_block')[0];

    for (let step = 0; step < items.length; step++) {
        // создаём для элемента собственный блок
        let itemBody = document.createElement('div');
        itemBody.setAttribute('class', 'item_block');
        itemBody.setAttribute('id', step);
        // создаём подблок изображения для item
        let itemImage = document.createElement('div');
        itemImage.setAttribute('class', 'item_image');
        // создаём подблок описания объекта item
        let itemDescription = document.createElement('div');
        itemDescription.setAttribute('class', 'item_dscr');
        // создаём кнопку для покупки
        let buyButton = document.createElement('button');
        buyButton.setAttribute('onClick', `addItemToCart(${step}); return false;`);
        buyButton.setAttribute('type', 'button');
        buyButton.innerHTML = 'Добавить в корзину';

        let descriptionText = `
        Name: ${items[step].params[0]['name']} <br>
        Price: ${items[step].params[0]['price']}
        `;
        let image = document.createElement("img");
        image.setAttribute('src', items[step].params[0]['img_link']);

        let imgAhref = document.createElement('a');
        imgAhref.setAttribute('href', `${items[step].params[0]['img_link']}`);
        imgAhref.appendChild(image);
        
        itemDescription.innerHTML = descriptionText;

        itemBody.appendChild(itemDescription);
        itemBody.appendChild(imgAhref);
        itemBody.appendChild(buyButton);
        target.appendChild(itemBody);
    }
    // pass
};

function addItemToBasket(items) {
    // pass
};

drowItems(items);
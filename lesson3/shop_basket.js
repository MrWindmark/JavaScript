let item1 = {
    "id": 1,
    "category": 1,
    "quantity": 1,
    "params": [{
        "name": "Товар 1",
        "price": 19990,
        "img_link": "../img1.jpg"
    }]
};
let item2 = {
    "id": 2,
    "category": 1,
    "quantity": 10,
    "params": [{
        "name": "Товар 2",
        "price": 5700,
        "img_link": "../img2.jpg"
    }]
};
let item3 = {
    "id": 3,
    "category": 1,
    "quantity": 2,
    "params": [{
        "name": "Товар 3",
        "price": 64570,
        "img_link": "../img3.jpg"
    }]
};

let basket = [item1, item2, item3];

function countBasketPrice(basket){
    totalPrice = 0;
    for(i = 0; i < basket.length; i++){
        totalPrice += basket[i]["params"][0]["price"] * basket[i]["quantity"];
    }
    return totalPrice;
}

function printBasket(basket){
    document.write("Товары в корзине:<br>");
    for(i = 0; i < basket.length; i++){
        document.write("<br>", "Наименование: ", basket[i]["params"][0]["name"], "<br>",
        "Цена: ", basket[i]["params"][0]["price"], "<br>",
        "Количество: ", basket[i]["quantity"], "<br>",
        "Ссылка на изображение: ", basket[i]["params"][0]["img_link"]
        );
    }
}

printBasket(basket);
totalAmount = countBasketPrice(basket);
document.write("<br>", "<br>", "Общая стоимость: ", totalAmount);

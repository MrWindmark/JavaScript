// функция добавления товара в карзину
function addItemToCart(id) {
    // получаем id товара для добавления
    curItem = items[id];
    // проверяем существование товара в карзине
    if (basket[id]){
        basket[id]['quantity'] += 1;
    } else {
        // добавляем в объект товара параметр кол-ва,
        // если ранее товар не был добавлен в корзину
        curItem['quantity'] = 1;
        basket[id] = curItem;
    }
    // вызываем функции отрисовки и подсчёта
    // для актуализации отображаемых данных
    printBasket();
    countBasketPrice();
}

function printBasket(){
    // выбираем целевой объект для изменений
    let target = document.getElementsByClassName('basket_items')[0];
    // сбрасываем уже имеющиеся значения
    target.innerHTML = '';
    
    // подготавка данных для целевого объекта согласно актуальных сведений (из переменных)
    let basketKeys = Object.keys(basket);
    for(i = 0; i < basketKeys.length; i++){
        // создаём объект товара в корзине
        let basketItem = document.createElement('div');
        basketItem.setAttribute('class', 'basket_item');
        // создаём подэлемент для описания товара в объекте корзины
        let desc = document.createElement('div');
        desc.setAttribute('class', 'ibp');
        // формируем текст страницы с параметрами названия и цены товара
        let itemName = `Name: ${basket[basketKeys[i]].params[0]['name']}`;
        let itemPrice = `Price: ${basket[basketKeys[i]].params[0]['price']}`;        
        desc.innerHTML = `${itemName}<br>${itemPrice}`;
        // создаём подблок количества и стоимости item в корзине
        let itemQuantity = document.createElement('div');
        itemQuantity.setAttribute('class', 'item_cart_param');
        // формируем строку стоимости позиции
        let priceText = `
            Стоимость:
            ${basket[basketKeys[i]].params[0]['price'] * basket[basketKeys[i]]['quantity']}
        `;
        // формируем строку количества единиц в позиции
        let quantityBlock = `${basket[basketKeys[i]]['quantity']} штук`;
        // вносим имеющиеся значения в тело странички
        itemQuantity.innerHTML = `${priceText}<br>${quantityBlock}`;
        basketItem.appendChild(desc);
        basketItem.appendChild(itemQuantity);
        target.appendChild(basketItem);
    }

}
// функция подсчёта общей стоимости ВСЕХ элементов в корзине
function countBasketPrice(){
    totalPrice = 0;
    let calcBasket = Object.keys(basket);
    // проходим по корзине
    for(i = 0; i < calcBasket.length; i++){
        // на каждом шаге обращаемся к элементу корзины по ключу, подтягиваем параметры цены и количества
        // сразу увеличиваем общую сумму на значение "цена" * "количество"
        totalPrice += basket[calcBasket[i]]["params"][0]["price"] * basket[calcBasket[i]]["quantity"];
    }
    // передаём полученное значение в нужный нам элемент, предварительно оформив вид строки
    let totalAmount = document.getElementsByClassName('basket_total_amount')[0];
    totalAmount.innerHTML = `Total Price: ${totalPrice}`;
}
// инициализация корзины
let basket = {};
// внесение тестовых значений
addItemToCart(0);
addItemToCart(2);
addItemToCart(2);
addItemToCart(3);
addItemToCart(5);
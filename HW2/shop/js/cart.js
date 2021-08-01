class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render(item, img = 'https://via.placeholder.com/200x150') {
        return `<div class="product-item" data-id="${item.id}">
                    <img src="${img}" alt="Some img">
                    <div class="desc">
                        <h3>${item.title}</h3>
                        <p>${item.price} </p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`;
    }
};

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
                id: 1,
                title: 'Notebook',
                price: 20000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 1500
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 5000
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 4500
            },
        ];
    }

    render(item) {
        let listHtml = '';
        item.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml += goodItem.render(good);
        });
        document.querySelector('.products').innerHTML = listHtml;
    }

    calculateTotalPrice(a) {
        return a.reduce((acc, b) => {
            return acc + b.price
        }, 0)
    }
};

class Cart {
    constructor(title, price) {
        this.title = title
        this.price = price
    }
    addItemToHTML() {} //заброс карточки товара в разметку
    totalCost() {}//подсчет итого в корзине
    itemRemove() {} //удаление товара из корзины
    getItems() {}//получение списка уже добавленых товаров с сервера
    setItems() {}//отправка списка уже добавленных товаров на сервер
    getHTMLElement() {}//отыскать необходимый элемент HTML для вставки и т.п.
    setQuantity() {}//выбор количества
};

class ItemCart extends Cart {
    renderItem() {} //генерация карточки конкретного товара
    getItemProperty() {}//получение данных о товаре с сервера в т.ч. картинки
    setProperty() {}//чекбокс или выпадающий список для выбора параметров
}

const list = new GoodsList();
list.fetchGoods();
list.render(list.goods);
list.calculateTotalPrice(list.goods);
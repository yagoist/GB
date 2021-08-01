'use strict'

const burgers = [
    { title: 'Burger L', cost: 50, ccal: 20 },
    { title: 'Burger XL', cost: 100, ccal: 40 }
];

const stuff = [
    { title: 'Cheese', cost: 10, ccal: 20 },
    { title: 'Salad', cost: 20, ccal: 5 },
    { title: 'Potatoes', cost: 15, ccal: 10 }
];

const toppings = [
    { title: 'Peper', cost: 50, ccal: 20 },
    { title: 'Sauce', cost: 20, ccal: 5 }
];

class Hamburger {

    constructor(burgers, stuff, toppings) {
        this.burgers = burgers;
        this.stuff = stuff;
        this.toppings = toppings;
        this.userBurger = [];
        this.rendering = []
    }

    calculatePrice(price) {
        return price.reduce((acc, { cost }) => acc + cost, 0)
    }

    calculateCalories(ccal) {
        return ccal.reduce((acc, { ccal }) => acc + ccal, 0)
    }

    addIngredients(id, item) {

        item.forEach(element => {
            let b = Object.values(element)
            if (b.includes(id) === true) {
                this.userBurger.push(element)
            }
        });
    }

    deliteIngredients(id) {
        if (this.userBurger.length > 0) {
            this.userBurger.forEach((element, index) => {
                let b = Object.values(element)
                if (b.includes(id) === true) { this.userBurger.splice(index, index + 1) }
            });
        } else {
            return
        }
    }

    generateHTMLString(element, buttonName, buttonclass) {
        return `<div class="${element.title}">
                    <div class="desc" id = " ${(element.title).replace(' ', '-')}">
                      <h3>Наименование: ${element.title}</h3>
                      <p>Цена: ${element.cost}</p>
                      <p>Калорийность: ${element.ccal}</p>
                      <button id = " ${(element.title).replace(' ', '-')}" class="${buttonclass}">${buttonName}</button>
                  </div>
              </div>`;
    }

    getHTMLElement(selector) {
        return document.querySelector(`${selector}`)
    }

    getHTMLElements(selector) {
        return document.querySelectorAll(`${selector}`)
    }

    render(element, container, buttonName, buttonclass) {

        element.forEach((item) => {
            this.rendering.push(this.generateHTMLString(item, buttonName, buttonclass))
        })
        this.getHTMLElement(`.${container}`).innerHTML = this.rendering.join('')
    }

    getClickedButtonAdd() {
        const elementClick = this.getHTMLElements('.button-add')
        for (let element of elementClick) {
            element.addEventListener('click', function () {
                let a = (element.parentNode.id).replace(' ', '').replace('-', ' ')
                burg.configureBurger(a)
            })
        }

    }

    getClickedButtonRemove() {
        const elementClick = this.getHTMLElements('.button-remove')
        for (let element of elementClick) {
            element.addEventListener('click', function () {
                let a = (element.parentNode.id).replace(' ', '').replace('-', ' ')
                burg.deliteIngredientsFromBurger(a)
            })
        }

    }
    renderingBurger(item, container, buttonName, buttonclass) {
        this.rendering = []
        this.render(item, container, buttonName, buttonclass)
        this.getClickedButtonRemove()

    }

    configureBurger(id) {
        if (this.checkingIngredients(id) === false) {
            return
        } else {
            if (id === 'Burger L' || id === 'Burger XL') {
                this.addIngredients(id, burgers)
                this.renderingBurger(this.userBurger, 'cart', 'удалить', 'button-remove')
            }
            if (id === 'Cheese' || id === 'Salad' || id === 'Potatoes') {
                this.addIngredients(id, stuff)
                this.renderingBurger(this.userBurger, 'cart', 'удалить', 'button-remove')
            }

            if (id === 'Peper' || id === 'Sauce') {
                this.addIngredients(id, toppings)
                this.renderingBurger(this.userBurger, 'cart', 'удалить', 'button-remove')
            }
            
        }
        this.getClickedButtonRemove()
        this.calculateParams()
    }
    deliteIngredientsFromBurger(id) {
        if (this.userBurger.length > 0) {
            this.deliteIngredients(id)
            this.renderingBurger(this.userBurger, 'cart', 'удалить', 'button-remove')
            
            this.calculateParams()
        } 
        this.getClickedButtonRemove()
    }

    calculateParams() {
        let total = `<div class="totale">
                     <h3>ИТОГО</h3>
                    <p>Цена набора: ${this.calculatePrice(this.userBurger)}</p>
                    <p>Общая калорийность: ${this.calculateCalories(this.userBurger)}</p>
                    </div>`

        this.getHTMLElement('.total').innerHTML = total
    }
    checkingIngredients(a) {
        let answer = true
        if (this.userBurger.length > 0) {
            this.userBurger.map((b) => {
                if (a === b.title) answer = false
            })
        }
        return answer
    }


}

const burg = new Hamburger(burgers, stuff, toppings);
burg.render(burg.burgers, 'sale', 'добавить', 'button-add')
burg.render(burg.stuff, 'sale', 'добавить', 'button-add')
burg.render(burg.toppings, 'sale', 'добавить', 'button-add')
burg.getClickedButtonAdd()
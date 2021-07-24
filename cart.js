const product = {
    1: 1 = {
        item: 'shoes',
        size: '42',
        price: 4200,
        quantity: 3
    },
    2: 2 = {
        item: 'boots',
        size: '40',
        price: 8300,
        quantity: 2
    },
    3: 3 = {
        item: 'socks',
        size: '39 - 42',
        price: 150,
        quantity: 1
    },
    4: 4 = {
        art: 0004,
        item: 'T-Shirt',
        size: 'M',
        price: 700,
        quantity: 5
    },

    renderItemCard(obj) {
        let cardOfItem = document.createElement('div')
        cardOfItem.id = `${obj.art}`
        cardOfItem.classList.add('item-card')
        for (let property in obj) {
            let propertyOfItem = document.createElement('div')
            propertyOfItem.classList.add('item-property')
            propertyOfItem.textContent = `${property} : ${obj[property]}`
            cardOfItem.append(propertyOfItem)
        }
        let addCard = document.querySelector('.sale')
        addCard.append(cardOfItem)

        let createButton = document.createElement('button')
        createButton.classList.add('item-button')
        createButton.textContent = "Add to cart"
        cardOfItem.append(createButton)
    },

    buttonClick(){
        let objectOnClick = document.querySelectorAll('.item-button')
        for (let elem of objectOnClick) {
    elem.onclick = function() {
        parentElem = elem.parentElement
        let a = parentElem.getAttribute('id')
        for (let property in )
        delete product.a
        
    }
    }
    }
    
}
const cart = {

}

product.renderItemCard(shoes)
product.renderItemCard(boots)
product.renderItemCard(socks)
product.renderItemCard(tshirt)
product.buttonClick()
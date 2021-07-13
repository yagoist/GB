const product = {
    shoes: shoes = {
        item: 'shoes',
        size: 42,
        price: 4200,
        quantity: 3
    },
    boots: boots = {
        item: 'boots',
        size: 40,
        price: 8300,
        quantity: 2
    },
    socks: socks = {
        item: 'socks',
        size: 39 - 42,
        price: 150,
        quantity: 1
    },
    tshirt: tshirt = {
        item: 'T-Shirt',
        size: 'M',
        price: 700,
        quantity: 5
    },

    renderItemCard(obj) {
        let cardOfItem = document.createElement('div')
        cardOfItem.classList.add('item-card')
        for (let property in obj) {
            let propertyOfItem = document.createElement('div')
            propertyOfItem.classList.add('item-property')
            propertyOfItem.innerHTML = `${property} : ${obj[property]}`
            cardOfItem.append(propertyOfItem)
        }
        let addCard = document.querySelector('.sale')
        addCard.append(cardOfItem)
    }

}
const cart = {

}

product.renderItemCard(this.shoes)
product.renderItemCard(this.boots)
product.renderItemCard(this.socks)
product.renderItemCard(this.tshirt)
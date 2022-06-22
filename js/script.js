const priceParagraph = document.getElementById('user-price')
const discountParagraph = document.getElementById('discount')

const km = parseInt(prompt('Quanti km vuoi percorrere?', 50))
console.log(km);

const age = parseInt(prompt('Quanti anni hai?', 23))
console.log(age)

let price = km * 0.21
console.log(price)

let discount = ``


//validazione
let isValid = true
let massege = ''

if (isNaN(km)) {
    isValid = false
    message = 'I km sono errati'
}

if (isNaN(age)) {
    isValid = false
    message = 'l\'età è errata'
}

if (isValid) {

    //calcolo prezzo
    if (age < 18) {
        price = price - (price * 20 / 100)
        console.log(price)
        discount = `lo sconto è del 20%`
    } else if (age > 65) {
        price = price - (price * 40 / 100)
        console.log(price)
        discount = `lo sconto è del 40%`
    }

} else {
    alert(message)
}



priceParagraph.innerText = `Il totale del tuo biglietto è di: ` + price.toFixed(2) + `euro`
discountParagraph.innerText = discount
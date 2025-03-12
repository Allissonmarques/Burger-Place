const menu = document.querySelector('ul')
const showAll = document.querySelector('.show-all')
const map = document.querySelector('.map')
const addItAllUp = document.querySelector('.add-it-all-up')
let myLi = ''

function buttonShowAll(optionsArray){
    myLi = ''
    optionsArray.forEach(element => {

        myLi +=
            `<li>
                    <img src=${element.src} id="jpeg">
                    <p class="burger-name">${element.name}</p>
                    <p class="value">R$ ${element.price}</p>
        </li>
        `
    })

    menu.innerHTML = myLi
}

function buttonMap(){

    const newPrice = menuOptions.map((options) =>({
       name:  options.name,
       price: options.price * 0.9,
       vegan: options.vegan,
       src: options.src
    }))

    buttonShowAll(newPrice)
}

function sumButton(){

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    menu.innerHTML =`
        <li>
                    <p class="value"> O valor total da soma de todos os itens é R$ ${totalValue}</p>
        </li>
    `
}

showAll.addEventListener('click', () => buttonShowAll(menuOptions) )
map.addEventListener('click', buttonMap)
addItAllUp.addEventListener('click', sumButton)

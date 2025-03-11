const menu = document.querySelector('ul')
const showAll = document.querySelector('.show-all')
const map = document.querySelector('.map')
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

showAll.addEventListener('click', () => buttonShowAll(menuOptions) )
map.addEventListener('click', buttonMap)

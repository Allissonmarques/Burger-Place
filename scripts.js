const menu = document.querySelector('ul')
const showAll = document.querySelector('.show-all')
const map = document.querySelector('.map')
const addItAllUp = document.querySelector('.add-it-all-up')
const filterVeganOnly = document.querySelector('.filter-vegan-only')
let myLi = ''

function formatValue(value){
    const formattedValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return formattedValue
}

function buttonShowAll(optionsArray){
    myLi = ''
    optionsArray.forEach(element => {

        myLi +=
            `<li>
                    <img src=${element.src} id="jpeg">
                    <p class="burger-name">${element.name}</p>
                    <p class="value"> ${formatValue(element.price)}</p>
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
                    <p class="value"> O valor total da soma de todos os itens é ${formatValue(totalValue)}</p>
        </li>
    `
}

function veganFilterButton(){

    const veganOptions = menuOptions.filter((options) => options.vegan)

    buttonShowAll(veganOptions)
}



showAll.addEventListener('click', () => buttonShowAll(menuOptions) )
map.addEventListener('click', buttonMap)
addItAllUp.addEventListener('click', sumButton)
filterVeganOnly.addEventListener('click', veganFilterButton)

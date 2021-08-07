import './style.css'
import splash from './images/pizza-checker.jpg'
import { createElement } from './page-load'

function main(){
    const content = document.querySelector('#content')
    const myImage = new Image()

    const title = new createElement(
        'h1', 'title', "Inky's Pizzeria"
    )
    content.appendChild(title.newElement())
    const description = new createElement(
        'p', 'descriptor', 
        "The finest artisanal pizzas")
    content.appendChild(description.newElement())


    //setup the navbar
    const nav = new createElement('nav', 'nav-bar')
    content.appendChild(nav.newElement())
    const navBar = document.querySelector('.nav-bar')
    const homeNav = new createElement('a', 'nav', 'Home', '#')
    navBar.appendChild(homeNav.newElement())
    const menuNav = new createElement('a', 'nav', 'Menu', '#')
    navBar.appendChild(menuNav.newElement())
    const aboutNav = new createElement('a', 'nav', 'About', '#')
    navBar.appendChild(aboutNav.newElement())

    //setup the listeners
    const navigationMenu = document.querySelectorAll('.nav')
    navigationMenu.forEach(function(item){
        item.addEventListener("click", navigationHandler)
    })

    const contentArea = new createElement('div', 'content-area')
    content.appendChild(contentArea.newElement())
    const newContentArea = document.querySelector('.content-area')
    myImage.src = splash
    newContentArea.appendChild(myImage)

    return content
}

function menu(){
    const newContentArea = document.querySelector('.content-area')
    clearContent()
    const menuItem = new createElement('p', 'menu1', 'This is a food')
    newContentArea.appendChild(menuItem.newElement())
}

function home(){
    const newContentArea = document.querySelector('.content-area')
    clearContent()
    const myImage = new Image()
    myImage.src = splash
    newContentArea.appendChild(myImage)
}

function about(){
    const newContentArea = document.querySelector('.content-area')
    clearContent()
}

function clearContent(){
    const newContentArea = document.querySelector('.content-area')
    while(newContentArea.childNodes.length >= 1){
        newContentArea.childNodes[0].remove()
    }
}

function navigationHandler(e){
    switch(e.target.textContent){
        case 'Home':
            home()
            break;
        case 'Menu':
            menu()
            break;
        case 'About':
            about()
            break;
    }
}
document.body.appendChild(main())
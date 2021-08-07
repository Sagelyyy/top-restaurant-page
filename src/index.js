import './style.css'
import splash from './images/pizza-checker.jpg'
import { createElement } from './page-load'

function component(){
    const content = document.querySelector('#content')
    const myImage = new Image()

    const title = new createElement(
        'h1', 'title', "Inky's Pizzeria"
    )
    content.appendChild(title.newElement())


    //setup the navbar
    const nav = new createElement('nav', 'nav-bar')
    content.appendChild(nav.newElement())
    const navBar = document.querySelector('.nav-bar')
    const homeNav = new createElement('a', 'home-nav', 'Home', '#')
    navBar.appendChild(homeNav.newElement())
    const menuNav = new createElement('a', 'menu-nav', 'Menu', '#')
    navBar.appendChild(menuNav.newElement())
    const aboutNav = new createElement('a', 'about-nav', 'About', '#')
    navBar.appendChild(aboutNav.newElement())


    myImage.src = splash
    content.appendChild(myImage)

    const description = new createElement(
        'p', 'descriptor', 
        "The Finest artisanal pizzas")
    content.appendChild(description.newElement())

    return content

}
document.body.appendChild(component())
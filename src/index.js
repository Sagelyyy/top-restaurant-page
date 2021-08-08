import './style.css'
import splash from './images/pizza-checker.jpg'
import menu1 from './images/pizza-close.jpg'
import menu2 from './images/pizza-thin.jpg'
import menu3 from './images/pizza-sliced.jpg'
import menu4 from './images/inkys-special.jpg'
import aboutChef from './images/chef-inky-hat.jpg'
import logoImg from './images/chef-inky-logo.png'
import { createElement } from './page-load'
import { newMenu } from './menu-item'

function main(){
    const logo = new Image()
    logo.src = logoImg
    logo.classList.add('chef-logo')


    const content = document.querySelector('#content')
    const topContent = new createElement('div', 'top-content')
    content.appendChild(topContent.newElement())
    const topContentq = document.querySelector('.top-content')
    topContentq.appendChild(logo)
    const topContentText = new createElement('div', 'top-content-text')
    topContentq.appendChild(topContentText.newElement())
    const topContentTextq = document.querySelector('.top-content-text')
    const myImage = new Image()


    const title = new createElement(
        'h1', 'title', "Inky's Pizzeria"
    )
    topContentTextq.appendChild(title.newElement())
    const description = new createElement(
        'p', 'descriptor', 
        "The finest artisanal pizzas")
    topContentTextq.appendChild(description.newElement())


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
    let menuArray = []
    clearContent()
    let menuLength = 6
    let item = new newMenu(
        'menu-item', 'Pepperoni & Black Olive', 
        'Delicious hand-cut pepperonis with black olives picked ' +
        'straight from the olive tree.', 
        'src/images/pizza-close.jpg')
    newContentArea.appendChild(item.newItem())
    menuArray.push(item)
        let item2 = new newMenu(
        'menu-item', 'Flat Pan Pizza', 
        'Amazing flat pan pizza with fresh picked veggies', 
        'src/images/pizza-close.jpg')
    newContentArea.appendChild(item2.newItem())
    menuArray.push(item2)
    let item3 = new newMenu(
        'menu-item', 'Hand Cut Veggie', 
        'Our one of a kind hand cut veggie pizza with  our ' +
        'all organic, locally grown vegetables', 
        'src/images/pizza-close.jpg')
    newContentArea.appendChild(item3.newItem())
    menuArray.push(item3)
    let item4 = new newMenu(
        'menu-item', "Inky's Special", 
        "Inky's paw picked pizza, black and white like " +
        "his little furry body. Inky would love this...if " +
        "he could eat it!", 
        'src/images/pizza-close.jpg')
    newContentArea.appendChild(item4.newItem())
    menuArray.push(item4)
    const menuItems = document.querySelectorAll('.menu-item')
    for(let i = 0;i < menuItems.length;i++){
        switch(i){
            case 0:
                let currImg = new Image()
                currImg.src = menu1
                currImg.classList.add('menu-item-img')
                menuItems[i].appendChild(currImg)
                let textDiv1 = new createElement('div', 'menu-text-div1')
                menuItems[i].appendChild(textDiv1.newElement())
                let textDivq1 = document.querySelector('.menu-text-div1')
                let currTitle = new createElement(
                    'h2', 'item-title', menuArray[i].title)
                textDivq1.appendChild(currTitle.newElement())
                let currDesc = new createElement(
                    'p', 'item-desc', menuArray[i].description)
                textDivq1.appendChild(currDesc.newElement())
                break
            case 1:{
                let currImg = new Image()
                currImg.src = menu2
                currImg.classList.add('menu-item-img')
                menuItems[i].appendChild(currImg)
                let textDiv2 = new createElement('div', 'menu-text-div2')
                menuItems[i].appendChild(textDiv2.newElement())
                let textDivq2 = document.querySelector('.menu-text-div2')
                let currTitle = new createElement(
                    'h2', 'item-title', menuArray[i].title)
                textDivq2.appendChild(currTitle.newElement())
                let currDesc = new createElement(
                    'p', 'item-desc', menuArray[i].description)
                textDivq2.appendChild(currDesc.newElement())
                break
            }
            case 2:{
                let currImg = new Image()
                currImg.src = menu3
                currImg.classList.add('menu-item-img')
                menuItems[i].appendChild(currImg)
                let textDiv3 = new createElement('div', 'menu-text-div3')
                menuItems[i].appendChild(textDiv3.newElement())
                let textDivq3 = document.querySelector('.menu-text-div3')
                let currTitle = new createElement(
                    'h2', 'item-title', menuArray[i].title)
                textDivq3.appendChild(currTitle.newElement())
                let currDesc = new createElement(
                    'p', 'item-desc', menuArray[i].description)
                textDivq3.appendChild(currDesc.newElement())
                break
            }
            case 3:{
                let currImg = new Image()
                currImg.src = menu4
                currImg.classList.add('menu-item-img')
                menuItems[i].appendChild(currImg)
                let textDiv4 = new createElement('div', 'menu-text-div4')
                menuItems[i].appendChild(textDiv4.newElement())
                let textDivq4 = document.querySelector('.menu-text-div4')
                let currTitle = new createElement(
                    'h2', 'item-title', menuArray[i].title)
                textDivq4.appendChild(currTitle.newElement())
                let currDesc = new createElement(
                    'p', 'item-desc', menuArray[i].description)
                textDivq4.appendChild(currDesc.newElement())
                break
            }
        }
    }
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
    let currImg = new Image()
    currImg.src = aboutChef
    currImg.classList.add('chef-img')
    
    let aboutDiv = new createElement('div', 'about-div')
    newContentArea.appendChild(aboutDiv.newElement())
    let aboutDivq = document.querySelector('.about-div')
    let aboutTextDiv = new createElement('div', 'chef-text-div')
    aboutDivq.appendChild(currImg)
    aboutDivq.appendChild(aboutTextDiv.newElement())
    let chefTextDivq = document.querySelector('.chef-text-div')
    let currTitle =  new createElement(
        'h2', 'about-title', 'About Chef Inky')
        chefTextDivq.appendChild(currTitle.newElement())
    let currDesc = new createElement(
        'p', 'about-desc',
        'Chef Inky always had a curiousity for food, and loved to ' +
        'experiment with new flavors. Founded since the beginning of ' +
        'time, Chef inky has strived for one thing. To fill the plate ' +
        'with as much delicious food as possible.'
    )
    chefTextDivq.appendChild(currDesc.newElement())

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
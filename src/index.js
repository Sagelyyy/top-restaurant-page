import './style.css'
import splash from './images/pizza-checker.jpg'

function componenet(){
    const content = document.querySelector('#content')

    const myImage = new Image()
    myImage.src = splash

    content.appendChild(myImage)
}

document.body.appendChild(componenet())
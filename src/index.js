import './style.css'
import splash from './images/pizza-checker.jpg'
import { createElement } from './page-load'

function component(){
    const content = document.querySelector('#content')
    const myImage = new Image()

    myImage.src = splash
    content.appendChild(myImage)

    const myP = new createElement('p', 'test')
    content.appendChild(myP.newElement())

    return content

}
document.body.appendChild(component())
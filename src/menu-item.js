export class newMenu{
    constructor(className, title, description, img){
      this.className = className
      this.title = title
      this.description = description
      this.img = img
    }
    newItem(){
        let temp = document.createElement('div')
        let tempTitle = document.createElement('h1')
        let tempDesc = document.createElement('p')
        let tempImg = this.img
        temp.classList.add(this.className)
        temp.textContent = this.text
      return temp
    }
}

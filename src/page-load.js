
export class createElement{
    constructor(type, eClass, ...args){
        this.type = type;
        this.eClass = eClass;
        this.args = args
    }
    newElement(){
        let temp = document.createElement(this.type)
        temp.classList.add(this.eClass)
        switch(this.type){
            case 'p':
            case 'h1':
            case 'h2':
            case 'button':
                temp.textContent = this.args[0]
            break
            case 'a':
                temp.textContent = this.args[0]
                temp.setAttribute('href', this.args[1])
            break;
            case 'input':
            case 'textarea':
                temp.setAttribute('placeholder', this.args[0])
                temp.setAttribute('type', this.args[1])
                temp.setAttribute('required', this.args[3])
            break;

        }

        return temp
    }
}

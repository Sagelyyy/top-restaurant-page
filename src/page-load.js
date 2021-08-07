
export class createElement{
    constructor(type, eClass){
        this.type = type;
        this.eClass = eClass;
    }
    newElement(){
        let temp = document.createElement(this.type)
        temp.classList.add(this.eClass)
        console.log(temp)
        return temp
}

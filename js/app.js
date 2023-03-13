let myDom = document; // document es un objeto global que tiene un moton de informacion

const myDog = {
    name: "Firulais"
};

const myCat = {
    "name" : "Michigun"
};

console.log(myDog.name)
console.log(myCat.name)



class Mouse{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const myMouse = new Mouse("Perez",4);

function Rat(name,age){
    this.name = name;
    this.age = age;
}

class Button{
    constructor(partentID,text){
        this.partentID = partentID;
        this.text = text;
       
    }

    render(){
        let myApp = document.getElementById(this.partentID);
        
        const myButtonHTML = myApp.innerHTML+ "<button>" + this.text+"</button>";
        
        myApp.innerHTML = myButtonHTML;//Se escribe el html para dibujar el boton con el texto de this.text
       
    }
}
    let myButton = new Button("app","Login...");
    myButton.render();
    let myButton2 = new Button("app","LoginMagico...");
    myButton2.render();
    let myButton3 = new Button("app","LoginPro...");
    myButton3.render();

    class Input{
        constructor(partentID,type){
            this.type = type;
            this.partentID = partentID;
        }

        render(){
            let myApp = document.getElementById(this.partentID);
            const myInputHTML = myApp.innerHTML+ "<input type= "+this.type+">";
        
            myApp.innerHTML = myInputHTML;
        }
    } 

    let myInput = new Input("app","checkbox");
    myInput.render();

    let myInput2 = new Input("app","date");
    myInput2.render();

let mySuperArrayOfString = ["Login","Start up","Search"];
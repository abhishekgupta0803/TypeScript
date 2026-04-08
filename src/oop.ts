// class Chai {
//     flavour:String;
//     price:number

//     constructor (flavour:String , price:number){
//         this.flavour = flavour
//         this.price = price
//     }
// }

// const masalaChai = new Chai("Ginger" , 29)
// masalaChai.flavour = "Masala"

//Access Modifers 

class Chai {
    public flavour:String = "Masala"
    private secreteIngrediants = "cardmom"

    reveal(){
        return this.secreteIngrediants
    }
}

// const c = new Chai()

//protected
class Shop {
    protected shopName = "Chai Corner"
}
class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

class Walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

//readonly propertyes

class Cup{
    readonly capacity:number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}

//getter setter
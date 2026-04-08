// function makeChai(type: String , cups:number){
//     console.log(`Making ${cups} cups of ${type}`)
// }

// makeChai("Masala" , 2)

//return type

// function getChaiPrice():number{
//     return 25
// }

function makeOrder(order:String){
    if(!order) return null
    return order
}

function logChai(): void{
    console.log("Chai is Ready")

}

// function orderChai(type?:String){

// }

function orderChai(type:String = "Masala"){

}


function createChai(order:{
    type:String;
    sugar:number;
    size:"small" | "large"
}):number{
    return 4;
}
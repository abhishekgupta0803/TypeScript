// function getChai(Kind : Number | String){
//     if(typeof Kind === "string"){
//         return `Making ${Kind} chai ..`;
//     }

//     return `chai order ${Kind}`
// }

// console.log(getChai(10))

// function serveChai(msg?:String){
//        if(msg){
//         return `hello msg ${msg}`;
//        }
// }

// console.log(serveChai());


// function orderChai(size: "small" | "medium" | "large" | number){
//     if(size === "small"){
//         return `small cutting chai...`
//     }
//     if(size === "medium" || size === "large"){
//         return `make extra chai` 
//     }
//     return `chai order #${size}`
// }

// type ChaiOrder = {
//     type:String,
//     sugar:number,
// } 


// function isChaiOrder(obj:any):obj is ChaiOrder{
//     return(
//         typeof obj === "object" && obj !== null 
//         && typeof obj.type === "string" && 
//         typeof obj.sugar === "number"
//     )
// }

// class kulhadChai{
//     serve(){
//         return `serve kulhad chai..`
//     }
// }

// class Cutting{
//     serve(){
//         return `serve Cutting chai..`
//     }
// }

// function serve(chai : kulhadChai | Cutting){
//     if(chai instanceof kulhadChai){
//         return chai.serve()
//     }
// }

// type MasalaChai = { type: "masala", spicelevel: number };
// type GingerChai = { type: "ginger", amount: number };
// type ElaichiChai = { type: "elaichai", aroma: number };

// type Chai = MasalaChai | GingerChai | ElaichiChai

// function MakeChai(order : Chai){
//     switch (order.type){
//         case "masala":
//             return `Masala Chai`
//             break;
        
//         case "ginger":
//             return `Ginger Chai`
//             break;
        
//         case "elaichai":
//             return `Elaichai Chai`
//             break;
        
//     }
// }

// function isStringArray(arr:unknown):arr is String[]{
//     //
// }

//type Assertion

// let response : any = "42";

// let numericLength:number = (response as String ).length

// type Book ={
//     name:String;
// }

// let bookString = '{"name":"who moved my cheese"}';
// let bookObject = JSON.parse(bookString) as Book
// console.log(bookObject)

// let inputElement = document.getElementById("username") as HTMLInputElement;

//Any or unknown example

// let value : any ;

// value = 30;
// value = 3.5;
// value = "Rishabh";

// value.toUpperCase();


// let unk : any ;

// unk = 30;
// unk = 3.5;
// unk = "Rishabh";

// if(typeof unk === "string"){
//    unk.toUpperCase();    
// }

// try{

// }catch(error){
//     if(error instanceof Error){
//         console.log(error.message)
//     }
//     console.log("Error",error)
// }


// const data:unknown = "chai aur code"
// const strData:String = data as String

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role):void{
    if(role === "admin"){
        console.log("Redirect to admiin dashboard");
        return;
    }
    if(role === "user"){
        console.log("Redirect to user dashboard");
        return;
    }
    role;
}
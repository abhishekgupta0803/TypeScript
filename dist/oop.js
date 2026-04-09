"use strict";
// class Chai {
//     flavour:String;
//     price:number
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor (flavour:String , price:number){
//         this.flavour = flavour
//         this.price = price
//         console.log(flavour , price)
//     }
// }
// const masalaChai = new Chai("Ginger" , 29)
// masalaChai.flavour = "Masala"
//Access Modifers 
// class Chai {
//     public flavour:String = "Masala"
//     private secreteIngrediants = "cardmom"
//     reveal(){
//         return this.secreteIngrediants
//     }
// }
// // const c = new Chai()
//protected
// class Shop {
//     protected shopName = "Chai Corner"
// }
// class Branch extends Shop{
//     getName(){
//         return this.shopName
//     }
// }
// class Walet{
//     #balance = 100
//     getBalance(){
//         return this.#balance
//     }
// }
// const w = new Walet()
//readonly propertyes
// class Cup{
//     readonly capacity:number = 250
//     constructor(capacity:number){
//         this.capacity = capacity
//     }
// }
//getter setter
// class ModernChai {
//     private _sugar = 2
//     get sugar(){
//         return this._sugar
//     }
//     set sugar(value:number){
//         if(value > 5) throw new Error("Too sweet")
//             this._sugar = value
//     }
// }
// const c  = new ModernChai();
// c.sugar = 3
// //static 
// class EkChai{
//     static shopName = "chai code caffee"
//     constructor (public flavour:String){
//     }
// }
// console.log(EkChai.shopName)
//abstract class 
// abstract class Drink{
//     abstract make():void
// }
// class MyChai extends Drink{
//     make(){
//         console.log("Brewing chai");
//     }
// }
// composition
// class Heater{
//     heat(){}
// }
// class ChaiMaker{
//     constructor(private heater:Heater){}
//     make(){
//         this.heater.heat
//     }
// }
//# sourceMappingURL=oop.js.map
"use strict";
// let tea:{
//     name:String;
//     price:number;
//     isHot:boolean
// }
Object.defineProperty(exports, "__esModule", { value: true });
// tea = {
//     name :"Ginger Tea",
//     price:25,
//     isHot:true
// }
// type Tea = {
//     name:String;
//     price:number;
//     ingrediants:String[]
// }
// const adrakChai : Tea = {
//     name :"Adrak Chai",
//     price: 25,
//     ingrediants:["ginger" , "tea leaves"]
// }
// type Cup = {size:String}
// let smallCup:Cup = {size: "200ml" }
// let bigCup = {size:"500ml" , material: "steel"}
// smallCup = bigCup
// type Item = {name:String , quantity:number}
// type Address = {street:String , pin:number}
// type order = {
//     id:String;
//     items:Item[];
//     address:Address
// }
//partial
// type Chai ={
//     name:String;
//     price:number;
//     isHot:boolean
// }
// const updateChai = (updates : Partial<Chai> ) =>{
//     console.log("updating chai with , updates", updates)
// }
// updateChai({price:25})
//required
// type ChaiOrder = {
//     name?:String,
//     quantity?:number,
// }
// const placeOrder = (order : Required<ChaiOrder>) =>{
//     console.log(order);
// }
// placeOrder({
//     name:"Masala Chai",
//     quantity:2
// })
//pick'
// type Chai ={
//     name:String;
//     price:number;
//     isHot:boolean;
//     ingridents:String[]
// }
// type BasicChaiInfo = Pick<Chai, "name" | "price">
// const chaiInfo:BasicChaiInfo = {
//     name: "Lemon Tea",
//     price: 30
// }
// console.log(chaiInfo)
//Omit
//  type Chai ={
//     name:String;
//     price:number;
//     isHot:boolean;
//     secret_ingridents:String[]
// };
// type PublicChai = Omit<Chai , " secret_ingridents">;
//# sourceMappingURL=objectts.js.map
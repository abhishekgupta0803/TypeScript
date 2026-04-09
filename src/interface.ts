// interface Chai{
//     flavour:String;
//     price:number;
//     milke?:boolean;
// }

// const masala:Chai ={
//     flavour:"Masala",
//     price:30,
// }

// //read only 
// interface Shop{
//     readonly id:number
//     name:String

// }

// const s:Shop = {id:1, name:"Chai Caffe"

// }

// //declearation interface

// interface DiscountCalculator{
//     (price:number):number

// }
// const apply50:DiscountCalculator = (p) =>p*0.5

// //func in interface

// interface TeaMachine{
//     start():void
//     stop():void

// }

// const machine: TeaMachine ={
//     start(){
//         console.log("Start")
//     },

//     stop(){
//         console.log("Stop")
//     }
// }

//index signature

// interface ChaiRating{
//     [flavor:String] :number

// }

// const ratings:ChaiRating = {
//     masala:4.5,
//     ginger:4.5,
// }

//interface auto merge

// interface User{
//     name:String

// }

// interface User{
//     age:number
// }

// const u :User = {
//     name:"Hitesh",
//     age:23
// }

//how to extend interface
interface A {a:String}
interface B{b:String}

interface C extends A,B {}
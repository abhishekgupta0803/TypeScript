//Any and unknown

// let a ;

// a = 10;
// a = "hello";

// a.length;

// let b :unknown;

// b = 12;
// b = "strings value"

// if(b === "string"){
//     b.includes
// }

// //void

// function hello ():void{
//    console.log("hello")
// }

// //null
// let k:number | null;
// k=null;
// k=10;

// //undefined
// let u:undefined | string;
// u="hellobye"

// //enum
// enum statusCode  {
//     fail = "404",
//     pending = "300",
//     rejected = "000"
// }

// statusCode.pending

// //type inference vs any

// let infrence = 10;
// infrence = "hello";



// let ani;
// ani = 10;
// ani = "hello"

// //type annotation
// let anotat:number = 10


// //interface 

// interface User {

//     name:string;
//     email:string;
//     psw:number;

// }

// function abcd(obj:User){
//     console.log(obj.psw)
// }

// //how to interface extends

// interface User1{
//     name:String;
//     age:number;
// }


// interface Admin{
//     nameAdmin:String;
//     psw:string;
// }

// interface Admin extends User1{

// }

// function Admins(obj:Admin){
//     obj.name
// }

// //union
// let myName : string | number;

// //type 

// type values = string | null;

// function sayHello(value : values){
//     console.log(value)
// }

// //intersaction type

// type newUser = {
//     name:String;
//     password:string;
// }

// type newAdmin = newUser & {
//     getDetails(user:string):void
// }

// function usethisValues(a:newAdmin){

//     console.log(a.getDetails)

// }

//oops concepts

// class Devices{
   
// }

// let D = new Devices();
// let D2 = new Devices();


// //constructor

// class HumanMaker{
//     age = 0;
//     constructor (public name:string ,public isHandsome :boolean){

//     }
// }

// new HumanMaker("Abhi" , true)

// //this 

// class Abcd{
//     name = "harsh";
//     age = 12;

//     changeStuff(){
//         this.age = 12;
//     }


// }

// //constructor with super

// class BottleMaker {
//     constructor(public name:string){}


// }

// class MetalBootleMaker extends BottleMaker{
//     constructor(name:string){
//         super(name)
//     }

//     getValue(){
//         console.log(this.name)
//     }
// }

// let b1 = new MetalBootleMaker("chilt")

//protected and private modifiers

// class BottleMaker{
//     protected name= "milton";
// }

// class MetalBootleMaker extends BottleMaker{
//     public material = "metal";

//     changeName(){
//         this.name = "Some other Name"
//     }


// }

// let b1 = new MetalBootleMaker();
// b1.name = "some more names of bottles";

//readOnly

// class User {
//     constructor(public readonly name:string){
        
//     }
//     changeName(){
//             this.name = "hello";
//     }
// }

// let u1 = new User("Harsh");
// u1.changeName()

// /optionals properties
// class User{
//     constructor(public name:string , public age:number , public gender?:string){}

// }

// let u1 = new User("Harsh" ,25 , "male");
// let u2 = new User("Harsh" ,25 );


//parameter properties

// class User{
//     constructor(public name:string , public age:number , public gender?:string){}

// }


//getter and setter

// class User {
//     constructor(public _name :string ,public _age :number){}

//     get name(){
//         return this._name;
//     }

//     set setname(value:string){
//         this._name = value;
//     }

// }

// let u1 = new User("harsh" , 25);

//static 

// class Shery{
//     static version = 1.0;

//     static getRandomNumber(){
//         return Math.random();
//     }
// }


//function type

// function greet(name:string, cb:(value:string)=>void){

// }

// greet("Harsh", (value:string)=>{
//     console.log(value)
// })


// function abcd(name:string , cb:(arg:string)=>void){

// }

// abcd("harsh" , (arg:string)=>{
//     console.log("abcd")
// })

//optional and default parameters
 
// function optionalParameter(name:String , age:number , gender?:string = "not to be disclosed"){

//     console.log(name , age , gender)

// }

// optionalParameter("manu", 23 , "M")


//Rest Paramaeter and spread

// function friends(...args :string[]){

//     console.log(args)

// }

// friends("abhi", "manu" ,"bablu")

 
//function overloadings

// function abcd(a:string):void
// function abcd(a:string , b:number):number;

// function abcd(a:any , b?:any){
//     if(typeof a === "string" && b === undefined){
//         console.log("hey")
//     }

//     if(typeof a === "string" && typeof b === "number"){
//         return 123;
//     }

//     else throw new Error ("something is wrong")
// }

// abcd("hey");
// abcd("hey" , 12);

//generic functions

// function add<T>(value:T){

// }

// add<number>(33)
// add<string>("23")


//interface Generic

// interface Halua<T>{
//     name:string;
//     age:number;
//     key:T;
// }

// function abcd(obj:Halua<string>){

// }

// abcd({name:"foo" , age:25 ,key:"ahcns"})



// interface Halua<T ,H>{
//     name:string;
//     age:number;
//     key:T;
//     value:H
// }

// function abcd(obj:Halua<string , number>){

// }

// abcd({name:"foo" , age:25 ,key:"ahcns" , value:23})

//generic classes

// class BottleMaker<T>{
//     constructor(public key:T){

//     }
// }

// let b1 = new BottleMaker<String>("hey")
// let b2 = new BottleMaker<number>(23)

// "hey"-->stringliteral


//modules
// export function hello(value:String){

// }

//TypeAssertion , typecasting 

// let a = Number("12");
// console.log(typeof a)

//non-null assertion operation
// a!-> eske value na hi null hogi na hi undefined

// type Guards
//instanceof
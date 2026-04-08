//Arrays Syntx
// const ChaiFlavours: String[] = ["Masala" , "Adrak"]
// const ChaiPrice: Number[] = [10,20, 30 ,40]

// const rating:Array<Number> = [4.5,5.0]

// console.log(rating)
// console.log(ChaiPrice)
// console.log(ChaiFlavours)

//Array Objects

// type Chai = {
//     name:String;
//     price:number
// }

// const menu:Chai[] = [
//     {name:"Masala" , price:15},
//     {name:"Adrak" , price:25}
// ]

//readonly array

// const cities:readonly String[] = ["Delhi" , "jaipur"]
// cities.push("pune")

//MultiDimentional Array
// const table:number[][] = [
//     [1,2,3],
//     [4,5,6]
// ]

//Tuple

// let tuple : [String , Number] = [
//     "Abc",
//     23
// ]


// let userInfo:[String ,number ,boolean?]

// userInfo = ["hitesh" , 100]
// userInfo = ["hitesh" , 100 , true]


//readonly tuple
// const location:readonly[number , number] = [28.66 , 32.22]

//named tuple

// const chaiItems:[name:String , price:number] = ["Masala" ,12]

// enums

// enum Cupsize {
//     small ,
//     medium,
//     large
// }

// enum ChaiType {
//     Masala = "masala",
//     Ginger = "ginger"

// }

// function makeChai(type: ChaiType){
//     console.log("Making ",type)
// }

// makeChai(ChaiType.Masala)

// const enum Sugar {
//     Low = 1,
//     Medium = 2,
//     High = 3
// }

// let t:[String , number] = ["chai" , 10]
// t.push("extra")
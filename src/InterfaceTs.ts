// type ChaiOrder ={
//     type:String;
//     sugar:number;
//     strong:boolean;
// };

// function makeChai(order:ChaiOrder){
//     console.log(order)
// }


// function serveChai(order:ChaiOrder){
//     console.log(order)
// }

// interface TeaRecipe{
//     water:number;
//     milk:number;
// }


// class MasalaChai implements TeaRecipe{
//     water = 100;
//     milk  = 50; 
// }

//intersecton

type BaseChai = {teaLeaves : number}
type Extra = {masala : number}

type MasalaChai = BaseChai & Extra

const cup:MasalaChai = {
    teaLeaves : 2,
    masala : 1
}

type User = {
    username:String,
    bio?:String
}

const u1 : User = {username : "Hitesh"}
const u2 : User = {username: "Hitesh" , bio:"hitesh.ai"}


type Config = {
    readonly appName : String
    version:number

}

const cfg:Config = {
    appName : "Masterji",
    version:1
}


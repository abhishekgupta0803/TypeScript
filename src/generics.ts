//basic generics
// function wrapInArray<T>(item: T):T[]{
//     return [item]
// }

// console.log(wrapInArray("masala"),
// wrapInArray(42),
// wrapInArray({flavour:"Ginger"}))


// function pair<A,B>(a:A,b:B):[A,B]{
//     return[a,b]
// }

// pair("masala",20)
// pair("masala",{flavour:"ginger"})

//generic interface

// interface Box<T>{
//     content:T

// }

// const numberBox:Box<number> = {content:10}
// const numberBoxCup:Box<String> = {content:"10"}

//example fetch api using generic

interface ApiPromise<T>{
    status:number,
    data:T
}

const res:ApiPromise<{flavour:String}> = {
    status:200,
    data:{flavour:"masala"}
}


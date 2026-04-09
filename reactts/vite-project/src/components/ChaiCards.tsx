interface ChaiCardProp {
    name:String,
    price:number,
    isSpecial?: boolean

}


export function ChaiCard ({name , price , isSpecial = false}:ChaiCardProp){
    return(
        <article>
            {name}
             {isSpecial && <span>star</span>}
             <h1>{price}</h1>
        </article>
    )
}
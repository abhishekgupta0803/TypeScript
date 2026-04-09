import type { PropsWithChildren , ReactNode } from "react";


interface CardProps extends PropsWithChildren {
    tittle:String;
    footer?:ReactNode;
}

export function Card({tittle , children , footer}:CardProps){
    return (
        <section>
            <h2>{tittle}</h2>
            <div>{children}</div>
            {footer && <footer>{footer}</footer>}
        </section>
    )
}
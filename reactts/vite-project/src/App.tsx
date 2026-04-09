import './App.css'
import { ChaiCard } from './components/ChaiCards'
import { Counter } from './Counter'
import ChaiList from './components/ChaiList'
import type { Chai } from './components/types.ts'
import { OrderForm } from './components/OrderForm.tsx'
import { Card } from './components/Card.tsx'


const menu:Chai[]=[

 { id:1 , name:"Message", price:25},
 { id:2 , name:"ginger", price:50},
 { id:3 , name:"Lemon", price:60},
]

function App() {
 

  return (
    <>
      <ChaiCard name="Hello"  price={1000} isSpecial={true}/>
       <ChaiCard name="ChaiorCode"  price={3000} isSpecial={true}/>
       <div>
            <Counter />
       </div>
       <div>
        <ChaiList items={menu} />
       </div>
       <div>
          <OrderForm 
           onSubmit={(order)=>{ //prop function
            console.log("Placed " , order.name , order.cups)
           }}
          />
       </div>
       <div>
        <Card tittle="chai aur code" footer={<button>order Now</button>}/>
       </div>
    </>
  )
}

export default App

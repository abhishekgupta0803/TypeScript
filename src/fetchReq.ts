import axios ,{AxiosResponse}from "axios"

interface Todo {
    userId:number;
    id:number;
    title:String;
    completed:boolean
}


//using fetch 
const fetchData = async () =>{
    try{
        const  response =  await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!response.ok){
            throw new Error(`Http error ${response.status}`)
        }
        const data : Todo = await response.json()
    }catch(error : any){

        

    }
}
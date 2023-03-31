import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    return (
        <div>
        <button onClick={()=>setCount(count+1)}>You pressed me {count} times</button>
        </div>
    )
}
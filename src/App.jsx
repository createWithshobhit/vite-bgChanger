import { useState } from "react"



function App(){
const [color, setcolor] = useState("olive")


return(
  <>
  <div className="w-full h-screen duration-200"
  style={{backgroundColor:color}}>
    <div className="flex justify-center items-center h-full">
    <h1 className="text-6xl text-yellow-500 font-bold">Change Background Color</h1></div>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
      <button onClick={()=>setcolor('blue')} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"blue"}}>BLUE</button>
      <button onClick={()=>setcolor('red')} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"red"}}>RED</button>
      <button onClick={()=>setcolor('black')} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"black"}}>Black</button>
      <button onClick={()=>setcolor('purple')} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"purple"}}>PURPLE</button>
      <button onClick={()=>setcolor('white')} className="outline-none px-3 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor:"white"}}>White</button>
      <button onClick={()=>setcolor('olive')} className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"olive"}}>OLIVE</button>
    </div>
  </div>
  </div>
  
  
  
  
  
  </>
)
}

export default App
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  const submitHandler = (e)=> {
    e.preventDefault()

    const copyTask =[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    
    setTitle("")
    setDetails("")
  }


  return (
    <div className="h-auto md:h-screen w-full bg-black text-white lg:flex">
      <div className="lg:w-1/2 my-auto">
        <h1 className='p-10 font-bold text-4xl'>Add Notes</h1>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className='flex flex-col gap-5 mx-10'>
            <input className="border-3 w-full rounded px-4 py-3 border-white text-xl outline-none"j type="text" placeholder='Title' value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}/>
            <textarea className="border-3 w-full rounded px-4 py-3 border-white text-xl h-40 outline-none"  placeholder='Write details ' value={details} onChange={(e)=>{
              setDetails(e.target.value)
            }}></textarea>
            <button className='bg-white text-black rounded px-4 py-3 font-semibold text-xl active:scale-95 cursor-pointer'>Add Note</button>
          </div>
        </form>
      </div>
      <div id="right" className="lg:w-1/2 overflow-auto">
        <h1 className='p-10 font-bold text-4xl'>Recent Notes</h1>
        <div id="urnotes" className='ml-10 flex flex-wrap gap-8'>
          {task.map(function(elem,idx){
            return <div key={idx} className='h-60 w-44 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover rounded-3xl relative flex flex-col justify-between'>
              <div><h3 className='text-black pt-9 px-4 font-bold text-xl'>{elem.title}</h3>
              <p className='text-gray-500 pl-4 pt-3 font-bold text-lg'>{elem.details}</p></div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='bg-red-500 w-[80%] mb-6 ml-4 rounded font-semibold text-sm py-1 cursor-pointer active:scale-95'>Delete</button>
            </div>
          })}
          
        </div>
      </div>

    </div>
  )
}

export default App

import React from 'react'
import {v4 as uuid} from "uuid"
import { Input,Button } from "@chakra-ui/react";
import { NewTask } from '../Page/NewTaskPage';

export const SubTaskAdder = ({subTask,setSubTask}) => {
  // const [SubTask,SetSubTask]=React.useState([])
    const [text,setText]=React.useState("")

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleCheckChange=(id)=>{
     const updatedList=[...subTask.map((el)=>el.id==id ? {...el,status:!el.status}: el)]
      setSubTask(updatedList)
    }

    const handleDelete=(id)=>{
        const updated=[...subTask.filter((el)=>el.id !==id)]
        setSubTask(updated);
    }

    const handleSubmit=()=>{
        const obj={
            title:text,
            status:false,
            id:uuid()
        }
        // console.log(obj)
     setSubTask(prev=>(
        [...prev,obj]
     ))
    }
  return (
      <div>
             <div>
         
         <Input type="text"  placeholder="Tilte" value={text} onChange={handleChange}  width={200} />
        
         <Button onClick={handleSubmit}  >Add</Button>
     </div>
       {/* <div style={{display:"flex", justifyContent:"space-evenly"  ,width:"200"}}> */}
       {
         subTask.map((el)=>{
             return(

               <div  style={{display:"flex", justifyContent:"space-evenly"}} className='subTaskItem' key={el.id}>
                
                   <input type="checkbox" checked={el.status} onChange={()=>{handleCheckChange(el.id)}} />
                    <div>
                       {el.title}
                    </div>
                    <Button  onClick={()=>{handleDelete(el.id)}}>Delete</Button>
                
               </div>
           )
        })
   }
       </div>
    // </div>
  )
}

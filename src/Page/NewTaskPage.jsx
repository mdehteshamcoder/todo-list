import { Input, Textarea,Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { SubTaskAdder } from "../Components/SubTaskAdder";
import { addTaskError, addTaskLoading, addTasks, addTaskSuccess } from "../Store/Task/Action";
import { useDispatch } from "react-redux";
export const NewTask=()=>{
    const [subTask,setSubTask]=React.useState([])
    const [title,setTitle]=React.useState("");
    const [description,setDescription]=React.useState("")
    const [checkState,setCheckState]=React.useState({
        official:false,
        personal:false,
        others:false

    })
    const [radioState,setRadioState]=React.useState({
        todo:false,
        inprogress:false,
        done:false

    })
    const dispatch=useDispatch()

    const handleRadio=(e)=>{
        const {name,checked}=e.target
     const Object={
        todo:false,
        inprogress:false,
        done:false,
        [name]:checked
     }
     setRadioState(Object)
    }
    const handleCreate=()=>{
        console.log("hello")
        let tags=[]
        console.log(checkState)
        for(const key in checkState)
        {
           
            if(checkState[key]){
                tags.push(key)
            }
 
        }
        console.log(tags)
       

        let task_status=""
        for(const key in radioState)
        {
           if(Object.hasOwnProperty.call(radioState,key)){
            const element=radioState[key];
            if(element){
                task_status=key;
                break;
            }
           } 
        }


        const obj={
            title,
            description,
            tags,
            task_status,
            subTask:subTask

        }
        console.log(obj)
        dispatch(addTasks(obj))
    }

    const handleCheckChange=(e)=>{
        console.log("1")
       const {checked,name}=e.target;
       setCheckState(prev=>({
        ...prev,
        [name]:checked
        
       }))
    //    console.log(checkState)
    }

    return(
      <div  style={{display:"flex",justifyContent:"space-around"}}  >
          <div>
            <Input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Tilte"  width={200} />
            <br />
            <br />
            <Textarea  placeholder="Description"  value={description} onChange={(e)=>{setDescription(e.target.value)}}  width={200} ></Textarea>
             
            <div>
            <br />
            <input type="radio"  name="todo" checked={radioState.todo}  onChange={handleRadio}   /> <label>Todo</label><br />
            <input type="radio"  name="inprogress"checked={radioState.inprogress}  onChange={handleRadio}   /><label>In Progress</label><br />
            <input type="radio" name="done" checked={radioState.done} onChange={handleRadio}   /><label>Done</label>
            </div>
             <br />
            <div>
                <h4>Tag (multiple possible)</h4>
                <input type="checkbox"  onChange={handleCheckChange}  checked={checkState.official}  name="official"  /><label>Official</label><br />
                <input type="checkbox" onChange={handleCheckChange}   checked={checkState.personal} name="personal"   /><label>Personal</label><br />
                <input type="checkbox"  onChange={handleCheckChange}    checked={checkState.others}  name="others"  /><label>Others</label>
            </div>
           
        </div>
        <div>
            {/* <SubTaskAdder   /> */}
            <SubTaskAdder  subTask={subTask} setSubTask={setSubTask} />
            <br />
            <div   >
                <Button onClick={handleCreate} >Create Task</Button>
            </div>
            </div>
           
      </div>

    )
}
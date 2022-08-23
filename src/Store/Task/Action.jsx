import { PATCH_TASK_ERROR,PATCH_TASK_SUCCESS,PATCH_TASK_LOADING,GET_TASK_LOADING,ADD_TASK_ERROR,ADD_TASK_SUCCESS,GET_TASK_SUCCESS,GET_TASK_ERROR,ADD_TASK_LOADING } from "./ActionType"
import axios from "axios"

export const getTaskLoading=()=>{
    return{
        type:"GET_TASK_LOADING"
    }
}

export const getTaskSuccess=(payload)=>{
    return{
        type:"GET_TASK_SUCCESS",
        payload

    }
}
export const getTaskError=()=>{
    return{
        type:"GET_TASK_ERROR"
    }
}

export const addTaskLoading=()=>{
    return{
        type:"ADD_TASK_LOADING"
    }
}

export const addTaskSuccess=()=>{
    return{
        type:"ADD_TASK_SUCCESS",
        

    }
}
export const addTaskError=()=>{
    return{
        type:"ADD_TASK_ERROR"
    }
}

export const patchTaskLoading=()=>{
    return{
        type:"PATCH_TASK_LOADING"
    }
}

export const patchTaskSuccess=()=>{
    return{
        type:"PATCH_TASK_SUCCESS",
        

    }
}
export const patchTaskError=()=>{
    return{
        type:"PATCH_TASK_ERROR"
    }
}


export const deleteTaskLoading=()=>{
    return{
        type:"DELETE_TASK_LOADING"
    }
}

export const deleteTaskSuccess=()=>{
    return{
        type:"DELETE_TASK_SUCCESS",
        

    }
}
export const deleteTaskError=()=>{
    return{
        type:"DELETE_TASK_ERROR"
    }
}


export const addTasks=(obj)=>(dispatch)=>{
    dispatch(addTaskLoading())
    axios({
        method:"post",
        url:"http://localhost:8080/tasks",
        data:obj
    }).then(res=>{
       dispatch(addTaskSuccess())
       dispatch(getTasks)
    }).catch(err=>{
       dispatch(addTaskError())
    })
    
}


export const getTasks=()=>(dispatch)=>{
    dispatch(getTaskLoading())
    axios({
        method:"get",
        url:"http://localhost:8080/tasks",
        
    }).then(res=>{
       dispatch(getTaskSuccess(res.data))
       
    }).catch(err=>{
       dispatch(getTaskError())
    })
}

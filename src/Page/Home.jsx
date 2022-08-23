import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getTasks } from '../Store/Task/Action'


 export const Home = () => {
const dispatch=useDispatch()
const data=useSelector(state=>state.tasks)
console.log(data)
const {loading,error,tasks}=useSelector(state=>state.tasks);



  React.useEffect(()=>{
    dispatch(getTasks())
  },[])
  if(loading){
    return <h2>....LOADING</h2>
  }
  if(error)
  {
    return
  }
  return (
    <div>
      <h1>home</h1>
    </div>
  )
}

export default Home

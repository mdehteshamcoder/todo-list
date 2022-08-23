import React from 'react'
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux'
import {Navigate} from "react-router-dom"
import { signupReq } from '../Store/Auth/Action'
import { Box, Button, Center, Heading, Input, TagLabel, Text } from '@chakra-ui/react'
const initialState={
  Name: "",
  Email: "",
  Password: "",
  Username: "",
  Mobile: "",
  Description:""
}

export const SignUp = () => {
  const [signupData,setSignupData]=React.useState(initialState)
  const {name,email,password,username,mobile,description}=signupData
  // const arr=Object.keys(signupData)
  // console.log(arr)
  const dispatch=useDispatch()
  const token=useSelector(store=>store.auth.token)
  

  const handleChange=(el)=>{
    const {name,value}=el.target;
    setSignupData(prev=>({...prev,[name]: value}))
  }
   
  

  const handleSignup=()=>{
    let isValid=true;
    Object.values(signupData).forEach(el=>{
      if(!el)
      {
        isValid=false
      }
    })
    if(!isValid)
    {
      alert("Please fill all the values")
    }
    // dispatch(signupLoading())
    


    axios({
      method:"post",
      url:"https://masai-api-mocker.herokuapp.com/auth/register",
      data:signupData,
      // headers: { 
      //   'Content-Type': 'application/json'
      // }
    }).then(res=>{
      console.log(res.data)
      // dispatch(signupSuccess())
      
   })
    .catch(res=>{
      // dispatch(signupError())
    })

  //  dispatch(signupReq(signupData))
   setSignupData(initialState)
  }
  // if(token)
  // {
  //   return <Navigate to="/"/>
  // }
      
  return (
  
        <Center>
      <Box>

      <Heading  marginLeft={20}   paddingBottom={10}  color={"red"}>Registration</Heading>
      {
        Object.keys(signupData).map((el)=>{
          return(
            <div>
               <Box>
             <label>{el}</label> <Input type="text"  key={el} placeholder={el} name={el} value={signupData[el]} onChange={handleChange}/>
             </Box>

            </div>
          )})}
          <br/>
          <Button marginLeft={20} onClick={handleSignup}>
            Sign Up
          </Button>


        
      
    </Box>
    </Center>
  )
}

import React from 'react'
import {Route,Routes} from "react-router-dom"
import { SignUp } from './SignUp'
import {Home} from './Home'
import Login from "./Login"
import { Private } from '../Components/Private'
import { NewTask } from './NewTaskPage'


export default function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/newTask" element={<NewTask/>}></Route>
        <Route path="*" element={<h2>Page Not Found</h2>}></Route>
    </Routes>
  )
}


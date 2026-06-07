import MovieView from "./component/MoviesView"
import "./Project/BillingJava.css";
import "./App.css"
import "./Navbar.css"
import Counter from "./component/Counter"
import Kit from "./component/Kit"
import Bhuvi from "./component/Bhuvi"
import ApiCall from "./component/ApiCall"
import Count from "./component/Count"
import InputBox from "./component/InputBox"
import Toggle from "./component/Toggle"
import HideText from "./component/HideText"
import ColorChanger from "./component/ColorChanger"
import Listconcept from "./component/ListConcept"
import LifeCycle from "./component/LifeCycle"
import { useState } from "react"
import ApiCal from "./component/ApiCal"
import UserForm from "./component/UserForm"
// Bootrap import 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

import ToDoList from "./component/ToDoList"
import Navbar from "./Project/Navbar"
import MovieBook from "./component/MovieBook"
import Home from "./Project/Home"
import CounterProvider from "./component/CounterProvider"
import ApiCalling from "./Project/ApiCalling"
import { use } from "react"
import MoviesCard from "./Project/MoviesCard"
import BootStrap from "./component/BootStrap"
import HookForm from "./component/HookForm"
import BillingJava from "./Project/BillingJava"
import Calculator from "./practice/Calculator";
import DigitalClock from "./practice/DigitalClock";
import GreetingApp from "./practice/GreetingApp";
import ToDo from "./practice/todo";
import Search from "./practice/Search";
import Password from "./practice/Password";
import Accordion from "./practice/Accordion";
import WeatherApp from "./practice/WeatherApp";
import Pagination from "./practice/Pagination";
import SearchMovie from "./practice/SearchMovie";

function Add() {

  // const[islog,setislog]=useState(true)

  // const handlelogout=()=>{
  //   setislog(false)
  // }
  const [moviedata, setmoviedata] = useState([
    { name: "Bigil", rent: 182 },
    { name: "Karnan", rent: 192 },
    { name: "3", rent: 170 },
    { name: "love today", rent: 350 },
    { name: "Lik", rent: 99 },
    { name: "with love", rent: 399 },
    { name: "youth", rent: 12 },
    { name: "puli", rent: 370 },
    { name: "Ayirathil oruvan", rent: 1000 },])

  const handlebook = (nu) => {
    console.log(nu);
  }

const[page,setpage]=useState("home");

  return (
    <div>
      {/* <div>
        <Navbar setpage={setpage}/>
        {page==="home" && <Home/> }
        {page==="movies" && <ApiCalling/>}
      </div> */}


{/* <ApiCalling/> */}
        {/* <HookForm/> */}
      {/* <BootStrap/> */}

      {/* <ApiCal/> */}

      {/* <ToDoList/> */}
      {/* <Navbar/> */}
      
      {/* {moviedata.map((dt)=>(
    <MovieBook handlebook={handlebook} name={dt.name} price={dt.rent}/> 
  ))} */}
      {/* <CounterProvider>
  <Counter/>
  </CounterProvider> */}
     <div>
    {/* <Bhuvi/> */}
    {/* <ApiCall/> */}
    {/* <ColorChanger/> */}
    {/* <HideText/> */}
    {/* <Count/> */}
    {/* <ToDoList/> */}
    {/* <BillingJava/> */}

     </div>
      {/* practice react */}
      <div>
        {/* <Calculator/> */}
        {/* <DigitalClock/> */}
        {/* <GreetingApp/> */}
        {/* <ToDo/> */}
        {/* <Search/> */}
        {/* <Password/> */}
        {/* <Accordion/> */}
        {/* <WeatherApp/> */}
        {/* <Pagination/> */}
        <SearchMovie/>


      </div>
    </div>
    //     <BrowserRouter>
    //       {/* <h1 >DHANUSH</h1>
    //     <h1>THRISHA</h1> */}
    //       {/* <MovieView/>
    //     <MovieView/> */}
    //       {/* <Counter/> */}

    //       {/* <Kit/> */}

          //  <Bhuvi/>

    //       {/* {islog?<LifeCycle/>:"u need to login"}

    // <button onClick={handlelogout}>logout</button> */}

    //       {/* <ApiCall/> */}

    //       {/* <Count/> */}

    //       {/* <InputBox/>    */}

    //       {/* <Listconcept/> */}

          //  {/*  <ApiCal/> */}

    //       {/* <Link to="/">home</Link>
    //       <Link to="/product">product</Link>
    //       <Link to="/about">about</Link>
    //       <Link to="/contact">contact</Link>

    //       <Routes>

    //         <Route path="/" element={<ColorChanger />} />

    //         <Route path="/product" element={<HideText />} />

    //         <Route path="/about" element={<Toggle />} />

    //         <Route path="/contact" element={<UserForm />} />

    //       </Routes> */}


    //     </BrowserRouter>

  )
}
export default Add
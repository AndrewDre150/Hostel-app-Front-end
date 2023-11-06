import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import Card1 from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import Register from './Components/Register';
import NewsletterSection from './Components/NewsletterSection';
import Footer from './Components/Footer'
import Landing from './Components/Landing';
import Hero from './Components/Hero';
import FAQs from './Components/FAQs';
import Booking from './Components/Booking';
import BookDashboard from './Components/BookDashboard';
import BookingComponent from './Components/BookingComponent';
import SideMenu from './Components/SideMenu';
import Login from './Components/Login';
import { DefaultSidebar } from './Components/DefaultSidebar';
import StudentDashboard from './Components/StudentDashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Card1></Card1>}/>
      <Route path='/forgot' element={<ForgotPassword></ForgotPassword>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard/' element={<StudentDashboard/>}/>
    </Routes>
  );
}

export default App;



// function App() {
//   return(
//     // <Card1></Card1>
//     // <ForgotPassword></ForgotPassword>
//     // <NewsletterSection></NewsletterSection>
//     // <Footer></Footer>
//     // <Landing/>
//     // <Navbar></Navbar>
//     // <Hostel></Hostel>
//     // <FAQs></FAQs>
//     // <Hero/>
//     // <Bookingform></Bookingform>
//     // <Booking></Booking>
//     // <BookDashboard></BookDashboard>
//     // <BookingComponent></BookingComponent>
//     // <SideMenu></SideMenu>
//     // <DefaultSidebar></DefaultSidebar>
//     <StudentDashboard></StudentDashboard>
//   )
// }

// export default App;

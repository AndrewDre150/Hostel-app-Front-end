import React from 'react'
import NewsletterSection from './NewsletterSection'
import Footer from './Footer'
import Navbar from './Navbar'
import Hostels from './Hostels'
import About from './About'
import FAQs from './FAQs'
import Hero from './Hero'

function Landing() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Hostels></Hostels>
        <FAQs></FAQs>
        <NewsletterSection/>
        <Footer/>
    </div>
  )
}

export default Landing
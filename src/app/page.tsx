import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Productlist from './components/Productlist'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='min-h-screen '>
      <Navbar/>
<Hero/>
      <Banner/>

      <h2 className='text-3xl uppercase text-center font-bold font-serif mt-10 mb-5'>Top Picks from MZ Flourista</h2>
      <Productlist/>
      <Footer/>
    </div>
  )
}

export default page

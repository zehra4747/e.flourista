import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Productlist from '../components/Productlist'

const page = () => {
  return (
    <div>
      <Navbar/>

 <Productlist/>
      <Footer/>
    </div>
  )
}

export default page

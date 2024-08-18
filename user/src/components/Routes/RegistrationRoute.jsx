import React from 'react'
import RegistrationForm from "../Forms/RegistrationForm/RegistrationForm"
import Authentication from "../Forms/RegistrationForm/Steps/Authentication"
import Navbar1 from "../Navbar/Navbar1"
import Footer from '../Footer/Footer'
export default function RegistrationRoute() {
  return (
    <>
    <Navbar1/>
    <RegistrationForm />
    {/* <Authentication /> */}
    <Footer />
    </>
  )
}

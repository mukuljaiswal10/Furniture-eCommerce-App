import React from 'react'
import Breadcrumb from '../Components/Common/Breadcrumb'
import MapShowing from '../Components/pages/contact-components/MapShowing'
import ContactEnquiryForm from '../Components/pages/contact-components/ContactEnquiryForm'

export default function Contactus() {
  return (
    <>
    <Breadcrumb title="Contact Us"/>
    <MapShowing/>
    <ContactEnquiryForm/>
    </>
  )
}

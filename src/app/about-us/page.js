import React from 'react'
import Breadcrumb from '../Components/Common/Breadcrumb'
import AboutContentArea from '../Components/pages/about-components/AboutContentArea'
import WhyWeChooseUs from '../Components/pages/about-components/WhyWeChooseUs'
import AboutCard from '../Components/pages/about-components/AboutCard'
import CustomerSay from '../Components/pages/home-components/CustomerSay'

export default function AboutuS() {
  return (
    <>
    <Breadcrumb title="About Us"/>
    <AboutContentArea/>
    <WhyWeChooseUs/>
    <AboutCard/>
    <CustomerSay/>
    </>
  )
}

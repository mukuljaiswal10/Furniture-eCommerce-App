import React from 'react'
import Image from "next/image";
import BannerSection from './Components/pages/home-components/BannerSection';
import CollectionSection from './Components/pages/home-components/CollectionSection';
import NavTabsSection from './Components/pages/home-components/NavTabsSection';
import NewCollectionBanner from './Components/pages/home-components/NewCollectionBanner';
import BestSellingProduct from './Components/pages/home-components/BestSellingProduct';
import Facility from './Components/pages/home-components/Facility';
import CustomerSay from './Components/pages/home-components/CustomerSay';
import Newsletter from './Components/pages/home-components/Newletter';


// jis bbhi page ka seo krna hai usme react-hook koi bhi use nhi krte hai. us page me use-client nhi use krenge .

export default function Home() {
  return (
    <>
    <BannerSection/>
    <CollectionSection/>
    <NavTabsSection/>
    <NewCollectionBanner/>
    <BestSellingProduct/>
    <Facility/>
    <CustomerSay/>
    <Newsletter/>
    </>
  )
}

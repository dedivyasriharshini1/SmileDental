'use client'

import Image from "next/image";

import Nav from '../components/Nav'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import ContactBanner from "../components/ContactBanner";
import Footer from '../components/Footer'
import DoctorsPage from '../components/DoctorsPage'
import Services from "../components/Services";
import Layout from "../components/Layout";
import Carousel from '../components/Carousel';


export default function Home() {
  return(
    <Layout>
     
      <Carousel/>
      
      <ContactBanner/>
      <AboutUs/>
      <Services/>
      <DoctorsPage/>
    
    </Layout>
  )
}
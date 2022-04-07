import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

// Page Components
import Header from '../components/Header'
import Mission from '../components/Mission'
import Hero from '../components/Hero'
import Events from '../components/Events'
import Resources from '../components/Resources'
import Staff from '../components/Staff'
import Give from '../components/Give'


export default function Home() {

  const [floatingButton, setFloatingButton] = useState(false)


   useEffect(function headerscroll() {
         const Fab = () => {
            if(window.scrollY >= 400 ) {
                setFloatingButton(true);
            } else{
                setFloatingButton(false);
            }
        };
    //    const windowheight = document.documentElement.clientHeight ---- If i want to switch at fullsize header
        window.addEventListener('scroll', Fab);
    }, []);


  return (
    <>
    <Layout>
      <Header />

      <Hero />
      <Mission />
      <Events />
      <Resources />
      <Staff />
      <Give />

    {floatingButton &&  <div className='fixed bottom-10  right-10'>
        <a href='#top ' className='bg-white shadow-2xl p-2 rounded-full '>Top</a>
      </div>}
     

    </Layout>
    
    </>
  )
}

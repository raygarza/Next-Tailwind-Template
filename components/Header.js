import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { XIcon, MenuAlt4Icon } from '@heroicons/react/outline'
import logo from '../public/branding/ccrtl-logo.svg'


export default function Header() {

    const [showSidenav, setShowSidenav] = useState(false)

    return(
        <>
        
        <nav className=' px-[2.5vw] m-auto bg-white h-[60px] sticky top-0 justify-between items-center md:px-4 lg:px-10 '>  
            <ul className=' space-x-3 max-w-[100%] max-h-[60px] flex items-center justify-between'>

                <div className='min-h-[60px] flex items-center justify-start'>
                    <Image src={logo}  height='40px' width='40px' quality='100' />
                     <Link href='#top'>
                        <li className=' min-h-[60px] cursor-pointer justify-center items-center hover:border-black'>
                            <a className='min-h-[60px] font-bold px-2  flex justify-center items-center '>Corpus Christi Right To Life</a>
                        </li>
                    </Link>
                </div>

                <div className=' min-h-[60px] items-center hidden lg:flex justify-end'>
                    
                    <Link href='#mission'>
                        <li className=' min-h-[40px] cursor-pointer px-4 group  justify-center items-center hover:border-black'>
                            <a className='min-h-[40px] font-semibold text-gray-600 duration-100 border-b-4 pt-4px border-white group-hover:border-[#495688]  group-hover:text-black flex justify-center items-center   '>Mission</a>
                        </li>
                    </Link>
                    <Link href='#events'>
                        <li className='min-h-[40px] cursor-pointer  px-4 group justify-center items-center '>
                            <a className='min-h-[40px] font-semibold text-gray-600 duration-100 border-b-4 pt-4px border-white group-hover:border-[#495688] group-hover:text-black flex justify-center items-center'>Events</a>
                        </li>
                    </Link>
                    <Link href='#resources'>
                        <li className='min-h-[40px] cursor-pointer  px-4 group justify-center items-center'>
                            <a className='min-h-[40px] font-semibold text-gray-600 duration-100 border-b-4 pt-4px border-white group-hover:border-[#495688] group-hover:text-black flex justify-center items-center'>Resources</a>
                        </li>
                    </Link>
                    <Link href='#staff'>
                        <li className='min-h-[40px] cursor-pointer  px-4 group justify-center items-center'>
                            <a className='min-h-[40px] font-semibold text-gray-600 duration-100 border-b-4 pt-4px border-white group-hover:border-[#495688] group-hover:text-black flex justify-center items-center'>Staff</a>
                        </li>
                    </Link>
                    <Link href='#give'>
                        <li className='min-h-[40px] cursor-pointer  px-4 group justify-center items-center'>
                            <a className='min-h-[40px] font-semibold text-gray-600 duration-100 border-b-4 pt-4px border-white group-hover:border-[#495688] group-hover:text-black flex justify-center items-center'>Give</a>
                        </li>
                    </Link>
                </div>
                <div className=' min-h-[60px] flex items-center lg:hidden justify-end'>
                {!showSidenav ?  <MenuAlt4Icon className='lg:hidden h-7 mt-1 w-7 '  onClick={() => setShowSidenav(!showSidenav)} /> : 
                 <XIcon className=' h-7 mt-1 w-7 '  onClick={() => setShowSidenav(!showSidenav)} /> }
                </div>
            </ul>  
            
        </nav>

        {showSidenav && 
        <sidenav className='bg-white shadow-lg  h-auto fixed top-[65px] right-[3vw] duration-100  rounded-lg  py-6 px-4'>
            <div>
            <ul className=' '>
                     <Link href='#about'>
                         <li className='flex space-x-2 '  onClick={() => setShowSidenav(!showSidenav)}>
                             <MenuAlt4Icon className='lg:hidden h-7 mt-1 w-7 '/>
                             <a>Mission</a>
                         </li>
                    </Link>
                    <Link href='#events'>
                         <li className='flex space-x-2'  onClick={() => setShowSidenav(!showSidenav)}>
                             <MenuAlt4Icon className='lg:hidden h-7 mt-1 w-7 '/>
                             <a>Events</a>
                         </li>
                    </Link>
                    <Link href='#resources'>
                         <li className='flex space-x-2'  onClick={() => setShowSidenav(!showSidenav)}>
                             <MenuAlt4Icon className='lg:hidden h-7 mt-1 w-7 '/>
                             <a>Resources</a>
                         </li>
                    </Link>
                    <Link href='#staff'>
                         <li className='flex space-x-2'  onClick={() => setShowSidenav(!showSidenav)}>
                             <MenuAlt4Icon className='lg:hidden h-7 mt-1 w-7 '/>
                             <a>Staff</a>
                         </li>
                    </Link>
                    <Link href='#give'>
                         <li className='flex space-x-2'  onClick={() => setShowSidenav(!showSidenav)}>
                             <MenuAlt4Icon className='lg:hidden h-7 mt-1 w-7 '/>
                             <a>Give</a>
                         </li>
                    </Link>
                 </ul>
            </div>
        </sidenav> }
       
        
        
        
        </>
    )
}
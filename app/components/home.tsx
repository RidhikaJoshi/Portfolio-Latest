'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import photo from '../assests/Screenshot 2023-07-17 114109.png'

const navItems = ['Home','About', 'Skills', 'Projects', 'Education', 'Contact']

export function HomePageComponent() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].toLowerCase())
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-20 h-20 flex items-center">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer hover:text-pink-500 transition-colors md:font-semibold font-medium md:text-lg text-sm ${
                    activeSection === item.toLowerCase() ? 'text-pink-500' : ''
                  }`}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen w-[80%] mx-auto flex items-center">
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <motion.div 
                className="lg:w-1/2 mb-10 lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Welcome to My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Dev World</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-6">I&apos;m Ridhika Joshi</h2>
                <p className="text-lg mb-8 text-gray-300">
                Transforming visions into reality with cutting-edge full-stack solutions. Mastering the MERN stack to craft dynamic and user-centric applications that redefine digital engagement.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://drive.google.com/file/d/1CkI4uZ-rjcgMBdOtv5TiVW9EJZjV0ZMM/view?usp=sharing"
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target='_blank'
                  >
                   View Resume
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-xl opacity-20"></div> */}
                <Image
                  src={photo}
                  alt="Ridhika Joshi"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-pink-300 m-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main> 
     
    </div>
  )
}
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion,AnimatePresence} from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import photo from '../assests/My.webp'
import { Menu, X } from 'lucide-react'

const navItems = ['Home','About', 'Skills', 'Projects', 'Education', 'Contact']

export function HomePageComponent() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
     <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-pink-400 text-xl font-serif italic">Ridhika</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer px-3 py-2 rounded-md text-lg font-semibold text-pink-400 ${
                      activeSection === item.toLowerCase()
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.toLowerCase()
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
                  className="rounded-full border-4 border-pink-400 m-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main> 
     
    </div>
  )
}
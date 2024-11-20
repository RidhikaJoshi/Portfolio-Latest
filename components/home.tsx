'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion} from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import photo from '../app/assests//My.webp'
import { Home, Book, Code, Layers, Mail,SquareCode,FolderCode   } from 'lucide-react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { BackgroundBeams } from './ui/background-beams'

const navItems = [
  { name: 'Home', icon: Home },
  { name: 'About', icon: Book },
  { name: 'Projects', icon: FolderCode  },
  { name: 'Skills', icon: Code },
  {name: 'CodingProfiles', icon: SquareCode},
  { name: 'Education', icon: Layers },
  { name: 'Contact', icon: Mail }
]

export function HomePageComponent() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.name.toLowerCase()))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].name.toLowerCase())
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
     <header className="fixed top-0 left-0 right-0 z-20 px-4 py-4 ">
      <nav className="max-w-2xl z-50 mx-auto bg-gradient-to-r from-gray-900 to-black rounded-full px-4 md:py-3  py-1 border-[0.1px] border-pink-300">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-between items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.name.toLowerCase()}
                smooth={true}
                duration={500}
                className={`cursor-pointer px-4 py-2 rounded-full transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-pink-400 bg-gray-800'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <ul className="flex md:hidden justify-evenly items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.name.toLowerCase()}
                smooth={true}
                duration={500}
                className={`cursor-pointer p-2 rounded-full transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-pink-400 '
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <item.icon size={24} />
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
                  {/* <motion.a
                    href="https://drive.google.com/file/d/1CkI4uZ-rjcgMBdOtv5TiVW9EJZjV0ZMM/view?usp=sharing"
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target='_blank'
                  >
                   View Resume
                  </motion.a> */}
                  <div className="flex gap-2">
                <motion.a
                  href="https://www.linkedin.com/in/ridhika-joshi-069164221/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-700 hover:text-pink-400 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/RidhikaJoshi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-700 hover:text-pink-400 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://x.com/ridhika_joshi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-700 hover:text-pink-400 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter size={20} />
                </motion.a>
              </div>
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
      <BackgroundBeams />
     
    </div>
  )
}
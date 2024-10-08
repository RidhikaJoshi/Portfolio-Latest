'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import photo from '../app/assests/CSE_RIDHIKAJOSHI_PHOTO.webp'

export function AboutMeComponent() {
  return (
    <div id="about" className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          About Me
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg shadow-purple-500/50"
          >
            <Image
              src={photo}
              alt="Profile"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            {/* //<h2 className="text-3xl font-bold mb-4 text-pink-400">John Doe</h2> */}
            <p className="text-white mb-6">
            I am Ridhika Joshi from Rishra, West Bengal, India.Currently pursuing a Bachelor of Technology in Computer Science and Engineering from the Academy of Technology, Adisaptagram, I am a dedicated individual with a passion for learning and solving complex problems. My commitment to excellence, coupled with a drive for continuous improvement, fuels my pursuit of impactful work that simplifies complexity and elevates quality of life.
            </p>
            <p className="text-white mb-6">In addition to my dedication to coding and development, I have a broad range of interests that inspire my creativity:</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-pink-400 mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
</svg>
</span>
                <span>Enriching my perspective through self-help books</span>
              </div>
              <div className="flex items-center">
                <span className="text-pink-400 mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
</svg>
</span>
                <span>Unleashing creativity through painting</span>
              </div>
              <div className="flex items-center">
                <span className="text-pink-400 mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
</svg>
</span>
                <span>Exploring new cultures and experiences through travel</span>
              </div>
            </div>
            <p className="text-white mt-6 mb-6">&quot;Endeavoring to create impactful contributions that bring about meaningful change.&quot;</p>
          </motion.div>
        </div>
        
        
      </motion.div>
    </div>
  )
}
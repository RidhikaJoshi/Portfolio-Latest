'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import photo from '../app/assests/CSE_RIDHIKAJOSHI_PHOTO.webp'

export function AboutMeComponent() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div id="about" className="max-w-4xl mx-auto">
        <motion.h1
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="w-64 h-64 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg shadow-purple-500/50"
          >
            <Image
              src={photo}
              alt="Profile of Ridhika Joshi"
              width={256}
              height={256}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </motion.div>
          
          <div className="flex-1 space-y-6">
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="text-white"
            >
              I am Ridhika Joshi from Rishra, West Bengal, India. Currently pursuing a Bachelor of Technology in Computer Science and Engineering from the Academy of Technology, Adisaptagram, I am a dedicated individual with a passion for learning and solving complex problems. My commitment to excellence, coupled with a drive for continuous improvement, fuels my pursuit of impactful work that simplifies complexity and elevates quality of life.
            </motion.p>
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="text-white"
            >
              In addition to my dedication to coding and development, I have a broad range of interests that inspire my creativity:
            </motion.p>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="space-y-4"
            >
              {[
                "Enriching my perspective through self-help books",
                "Unleashing creativity through painting",
                "Exploring new cultures and experiences through travel"
              ].map((interest, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  className="flex items-center"
                >
                  <span className="text-pink-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{interest}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="text-white mt-6 italic"
            >
              &quot;Endeavoring to create impactful contributions that bring about meaningful change.&quot;
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
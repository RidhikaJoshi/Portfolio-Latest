'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import photo from "../app/assests/CSE_RIDHIKAJOSHI_PHOTO.webp"
import ParticleBackground from "../components/particleBackground"

// Using a placeholder image until the actual image is provided

export function AboutMeComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  return (
    <div ref={containerRef} id="about" className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParticleBackground containerRef={containerRef} />
      <motion.div 
        ref={containerRef}
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto"
      >
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
            className="relative w-72 h-96  overflow-hidden border-4 border-pink-400 shadow-lg shadow-purple-500/50 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <Image
              src={photo as StaticImageData}
              alt="Profile of Ridhika Joshi"
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
          </motion.div>
          
          <motion.div 
            className="flex-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              variants={fadeInUpVariants}
              className="text-white leading-relaxed"
            >
              I am Ridhika Joshi from Rishra, West Bengal, India. Currently pursuing a Bachelor of Technology in Computer Science and Engineering from the Academy of Technology, Adisaptagram, I am a dedicated individual with a passion for learning and solving complex problems. My commitment to excellence, coupled with a drive for continuous improvement, fuels my pursuit of impactful work that simplifies complexity and elevates quality of life.
            </motion.p>
            
            <motion.p
              variants={fadeInUpVariants}
              className="text-white leading-relaxed"
            >
              In addition to my dedication to coding and development, I have a broad range of interests that inspire my creativity:
            </motion.p>
            
            <motion.div
              variants={containerVariants}
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
                  className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-pink-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-white/90 hover:text-white transition-colors duration-300">{interest}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p
              variants={fadeInUpVariants}
              className="text-white/90 mt-6 italic text-lg font-light border-l-2 border-pink-400 pl-4"
            >
              &quot;Endeavoring to create impactful contributions that bring about meaningful change.&quot;
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMeComponent;
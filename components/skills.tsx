'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiMongodb, SiPostgresql, 
  SiTailwindcss, SiGit, SiDocker,SiAppwrite, SiCplusplus, SiHtml5, SiCss3, SiRedux, SiPostman
} from 'react-icons/si'
import { SiPrisma } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'React.js', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-blue-300' },
  { name: 'AWS', icon: FaAws, color: 'text-yellow-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Appwrite', icon: SiAppwrite, color: 'text-pink-500' },
  { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
  { name: 'Recoil', icon: SiRecoil , color: 'text-blue-400' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-700 ' },
  { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: SiCss3, color: 'text-blue-400' },
]

export function SkillsSectionComponent() {
  return (
    <div id="skills" className="min-h-screen w-[80%] bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
         Skills
        </h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <skill.icon className={`text-5xl ${skill.color} mb-4`} />
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
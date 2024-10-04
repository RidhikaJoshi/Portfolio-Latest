'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/RIDHIKA_JOSHI/',
    icon: <SiLeetcode />,
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/qmq0dxjk1xbl7bp49wz1cmicj5xcpcqfmn6vd7oe/',
    icon: <SiGeeksforgeeks />,
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/ridhika17',
    icon: <SiCodeforces />,
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/ridhikajoshi17',
    icon: <SiCodechef />,
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/ridhikasmrh',
    icon: <FaHackerrank />,
  },
]

export function CodingProfilesComponent() {
  return (
    <section id="codingprofiles" className="py-16 w-[80%]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Coding Profiles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {profiles.map((profile) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-pink-500 mb-2 text-4xl font-bold">{profile.icon}</div>
              <span className="text-white text-sm font-medium">{profile.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
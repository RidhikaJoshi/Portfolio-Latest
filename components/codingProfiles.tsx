'use client'

import React, { useRef } from 'react'
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiCodeforces } from 'react-icons/si'
import { FaHackerrank } from 'react-icons/fa'
import { HoverEffect } from '../components/ui/card-hover-effect'
import ParticleBackground from '../components/particleBackground'

const profiles = [
  {
    title: 'LeetCode',
    link: 'https://leetcode.com/u/RIDHIKA_JOSHI/',
    description: <SiLeetcode />,
  },
  {
    title: 'GeeksforGeeks',
    link: 'https://www.geeksforgeeks.org/user/qmq0dxjk1xbl7bp49wz1cmicj5xcpcqfmn6vd7oe/',
    description: <SiGeeksforgeeks />,
  },
  {
    title: 'Codeforces',
    link: 'https://codeforces.com/profile/ridhika17',
    description: <SiCodeforces />,
  },
  {
    title: 'CodeChef',
    link: 'https://www.codechef.com/users/ridhikajoshi17',
    description: <SiCodechef />,
  },
  {
    title: 'HackerRank',
    link: 'https://www.hackerrank.com/profile/ridhikasmrh',
    description: <FaHackerrank />,
  },
]

export function CodingProfilesComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="codingprofiles" className="py-16 w-[90%] relative overflow-hidden" ref={containerRef}>
      <ParticleBackground containerRef={containerRef} />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-extrabold mb-14 p-3 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Coding Profiles</h2>
        <HoverEffect items={profiles} />
      </div>
    </section>
  )
}

export default CodingProfilesComponent;
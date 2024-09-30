'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { BsFillAirplaneFill } from "react-icons/bs";

const educationData = [
  {
    id: 1,
    title: "Bachelor's Degree in Computer Science and Engineering",
    institution: "Academy of Technology",
    icon: FaGraduationCap,
    date: "Oct 2021 - June 2025",
    details: [
      "Graduated with First Class Honors",
      "GPA: 9.32/10 (till 6th Semester)"
    ]
  },
  {
    id: 2,
    title: "12th Standard",
    institution: "St.Joseph's Convent",
    icon: FaGraduationCap,
    date: "July 2018- March 2020",
    details: [
      "Percentage-96.25%",
      "Ranked 2nd in the school"
    ]
  },
  {
    id: 3,
    title: "10th Standard",
    institution: "City High School",
    icon: FaGraduationCap,
    date: "2014 - 2016",
    details: [
      "Percentage-93.25%",
      "House Captain for a year"
    ]
  }
]

export function EducationSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [planePosition, setPlanePosition] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = Number(entry.target.getAttribute('data-item-id'))
            if (!isNaN(itemId)) {
              setVisibleItems((prev) => Array.from(new Set([...prev, itemId])))
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    const currentItemRefs = itemRefs.current;

    currentItemRefs.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        const scrollPosition = window.scrollY - sectionTop
        const scrollPercentage = Math.min(Math.max(scrollPosition / sectionHeight, 0), 1)
        setPlanePosition(scrollPercentage * 100)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      currentItemRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="education" ref={sectionRef} className=" min-h-screen w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>

          {/* Airplane */}
          <div 
            className="absolute left-1 md:left-[calc(50%-0.65rem)] w-6 h-6 text-white transform -translate-y-1/2 transition-all duration-300 ease-out"
            style={{ top: `${planePosition}%` }}
          >
            <BsFillAirplaneFill  className="w-full h-full rotate-180 " />
          </div>

          {educationData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-item-id={item.id}
              className={`relative mb-12 md:mb-6 transition-all duration-1000 ease-out ${
                visibleItems.includes(item.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative ml-8 md:ml-0">
                  {/* Timeline dot */}
                  {/* <div className="absolute top-6 -left-12 md:-left-3 md:right-auto md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                     <item.icon className="text-white text-sm"/>
                  </div> */}
                  
                  <h3 className="text-2xl font-bold mb-2 mt-1">{item.title}</h3>
                  <p className="text-gray-400 mb-2">{item.institution}</p>
                  <p className="text-purple-400 font-semibold mb-4">{item.date}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
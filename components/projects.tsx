'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Libris from '../app/assests/Libris.webp'
import BlogSphere from '../app/assests/BlogSphere.webp'
import TouristNest from '../app/assests/TouristNest.webp'
import VideoTweets from '../app/assests/VideoTweets.webp'
import MusicAcademy from '../app/assests/MusicAcademy.webp'
import portfolio from '../app/assests/Portfolio.webp'

const projects = [
  {
    id: 1,
    title: 'Libris',
    description: 'Libris is a sophisticated library management system with Role-Based Access Control, streamlining the organization of digital and physical collections.',
    image: Libris,
    liveLink: 'https://libris.pages.dev/',
    githubLink: 'https://github.com/RidhikaJoshi/Libris',
    tags: ['HonoJs', 'PostgreSQL', 'Prisma', 'TypeScript', 'Cloudflare', 'ReactJs', 'TailwindCSS', 'ShadCN UI']
  },
  {
    id: 2,
    title: 'BlogSphere',
    description: 'BlogSphere is a web application for sharing ideas through published articles, featuring user authentication, a rich text editor, and Appwrite as the backend.',
    image: BlogSphere,
    liveLink: 'https://d2dn3c87zlk96y.cloudfront.net/',
    githubLink: 'https://github.com/RidhikaJoshi/Blog',
    tags: ['Appwrite', 'React', 'Redux','TailwindCSS', 'AWS S3', 'Cloudfront']
  },
  {
    id: 3,
    title: 'VideoTweets',
    description: 'VideoTweets is a pure backend project, offering a dynamic platform for sharing and engaging with multimedia content, featuring user comments, likes, playlists, and more.',
    image: VideoTweets,
    liveLink: 'https://documenter.getpostman.com/view/18992770/2sA2xpR8nu',
    githubLink: 'https://github.com/RidhikaJoshi/VideoTweets',
    tags: ['NodeJs', 'ExpressJs', 'MongoDb']
  },
  {
    id: 4,
    title: 'TouristNest',
    description: 'TouristNest is a comprehensive travel platform that combines backend functionality with a sleek frontend, offering users a seamless experience for planning and booking trips.',
    image: TouristNest,
    liveLink: 'https://touristnest.onrender.com/',
    githubLink: 'https://github.com/RidhikaJoshi/TouristNest',
    tags: ['NodeJs', 'ExpressJs', 'MongoDb', 'React', 'TailwindCSS', 'ShadCN UI', 'Stripe']
  },
  {
    id: 5,
    title: 'MusicAcademy',
    description: 'A Next.js and TypeScript-based website offering music courses, built with Aceternity UI for a responsive and engaging user experience.',
    image: MusicAcademy,
    liveLink: 'https://music-xi.vercel.app/',
    githubLink: 'https://github.com/RidhikaJoshi/music',
    tags: ['NextJs', 'Aceternity', 'TypeScript' ,'TailwindCSS']
  },
  {
    id: 6,
    title: 'PortFolio Website',
    description: 'A responsive portfolio website built with Next.js and TypeScript, featuring a clean UI to showcase projects, skills, and achievements effectively.',
    image: portfolio,
    liveLink: 'https://www.ridhikajoshi.me/',
    githubLink: 'https://github.com/RidhikaJoshi/Portfolio-Latest',
    tags: ['NextJs', 'ShadCN UI', 'TypeScript' ,'TailwindCSS']
  }
]

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number(entry.target.getAttribute('data-project-id'))
            if (!isNaN(projectId)) {
              setVisibleProjects((prev) => Array.from(new Set([...prev, projectId])))
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRefs = projectRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="projects" className="bg-[#0a0a0a] w-full text-white py-20">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <h2 className="text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              data-project-id={project.id}
              className={`relative overflow-hidden md:min-h-[520px] min-h-[580px] md:w-[90%] w-[100%] rounded-3xl transition-all duration-1000 ease-out ${
                visibleProjects.includes(project.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 2px)',
                backgroundSize: '40px 40px',
                aspectRatio: '1 / 1'
              }}
            >
              <div className="absolute inset-0  border-2 border-pink-400 "></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full flex items-center text-sm transition-colors duration-300 hover:from-purple-600 hover:to-pink-600"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center text-sm transition-colors duration-300 hover:bg-gray-600"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
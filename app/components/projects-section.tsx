'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import photo from '../assests/Screenshot 2024-09-29 203843.png'

const projects = [
  {
    id: 1,
    title: 'Libris',
    description: 'Libris is a sophisticated library management system with Role-Based Access Control, streamlining the organization of digital and physical collections. It empowers users and administrators to efficiently manage books, transactions, and operations with ease and precision.',
    image: photo,
    liveLink: 'https://libris.pages.dev/',
    githubLink: 'https://github.com/RidhikaJoshi/Libris',
    tags: ['HonoJs', 'PostgreSQL', 'Prisma', 'TypeScript', 'Cloudflare', 'ReactJs', 'TailwindCSS', 'ShadCN UI']
  },
  {
    id: 2,
    title: 'BlogSphere',
    description: 'BlogSphere is a web application for sharing ideas through published articles, featuring user authentication, a rich text editor, and Appwrite as the backend. Hosted on AWS S3 with CloudFront for CDN, it ensures a secure and seamless experience for both writers and readers.',
    image: photo,
    liveLink: 'https://d2dn3c87zlk96y.cloudfront.net/',
    githubLink: 'https://github.com/RidhikaJoshi/Blog',
    tags: ['Appwrite', 'React', 'TailwindCSS', 'AWS S3', 'Cloudfront']
  },
  {
    id: 3,
    title: 'VideoTweets',
    description: 'VideoTweets is a pure backend project, which offers a dynamic platform for sharing and engaging with multimedia content, featuring user comments, likes, playlists, tweets, video uploads, and channel subscriptions. With secure user authentication and personalized profiles, users can discover trending content, organize favorites, and interact seamlessly across the platform.',
    image: photo,
    liveLink: 'https://documenter.getpostman.com/view/18992770/2sA2xpR8nu',
    githubLink: 'https://github.com/RidhikaJoshi/VideoTweets',
    tags: ['NodeJs', 'ExpressJs', 'MongoDb']
  },
  {
    id: 4,
    title: 'TouristNest',
    description: 'VideoTweets is a pure backend project, which offers a dynamic platform for sharing and engaging with multimedia content, featuring user comments, likes, playlists, tweets, video uploads, and channel subscriptions. With secure user authentication and personalized profiles, users can discover trending content, organize favorites, and interact seamlessly across the platform.',
    image: photo,
    liveLink: 'https://touristnest.onrender.com/',
    githubLink: 'https://github.com/RidhikaJoshi/TouristNest',
    tags: ['NodeJs', 'ExpressJs', 'MongoDb','React', 'TailwindCSS', 'ShadCN UI', 'Stripe']
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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="bg-black w-[80%] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          My Projects
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              data-project-id={project.id}
              className={`flex flex-col lg:flex-row items-center gap-8 transition-all duration-1000 ease-out ${
                visibleProjects.includes(project.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    // width={150}
                    // height={150}
                    className=" transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center transition-colors duration-300 hover:bg-gray-200"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center transition-colors duration-300 hover:bg-gray-700"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded-full"
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
                    className="bg-purple-600 text-white px-6 py-2 rounded-full flex items-center transition-colors duration-300 hover:bg-purple-700"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-6 py-2 rounded-full flex items-center transition-colors duration-300 hover:bg-gray-600"
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
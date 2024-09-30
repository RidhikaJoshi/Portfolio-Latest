'use client'

import React from 'react'
import Image from 'next/image'
import { FaEnvelope } from 'react-icons/fa'

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#0a0a0a] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center leading-tight">
          Wanna discuss something Great!
          <div>Let&apos;s Connect</div>
        </h2>
        <div className="mt-12 bg-gradient-to-br from-purple-600 to-pink-500 p-0.5 rounded-3xl">
          <div className="bg-[#0a0a0a] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <Image
                src=""
                alt="Futuristic Helmet"
                width={300}
                height={300}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Got an idea? Let&apos;s connect and work on it together and make the imagination alive
              </p>
              <div className="flex items-center space-x-4 text-purple-400">
                <FaEnvelope size={24} />
                <a href="mailto:ridhikasmrh@gmail.com" >
                  ridhikasmrh@gmail.com
                </a>
              </div>
              <div className="mt-8">
                <a
                 href="mailto:ridhikasmrh@gmail.com"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold py-3 px-6 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
                >
                  Let&apos;s Create Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
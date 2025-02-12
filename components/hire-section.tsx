"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiStack } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";
import { BsCheckCircleFill, BsBraces, BsFillAwardFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const items = [
  {
    title: "Full-Stack Proficiency",
    description:
      "Skilled in React.js, Next.js, Node.js, PostgreSQL, and Tailwind CSS for building scalable applications.",
    icon: <GiStack className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Cloud & Deployment Expertise",
    description: "Hands-on experience with AWS (S3, CloudFront) and Docker for efficient deployment.",
    icon: <FaCloud className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Strong Problem-Solving",
    description: "Solved 900+ LeetCode problems with a peak rating of 1910 and global coding contest rankings.",
    icon: <BsCheckCircleFill className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Collaborative & Adaptive",
    description: "Excel in team environments, ensuring smooth workflows through adaptability and communication.",
    icon: <RiTeamFill className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Secure API Development",
    description: "Designed and integrated APIs with third-party tools, ensuring secure and efficient data handling.",
    icon: <BsBraces className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Leadership & Community Engagement",
    description:
      "As a Microsoft Learn Student Ambassador, I organized events and fostered tech learning communities.",
    icon: <BsFillAwardFill className="h-6 w-6 text-purple-400" />,
  },
];


export default function HireSection() {
  const [particles, setParticles] = useState<{ x: number; y: number; scale: number }[]>([]);

  useEffect(() => {
    const particlesArray = [...Array(20)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 2,
    }));
    setParticles(particlesArray);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B14] px-6 py-20">
      {/* Animated background particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-pink-500/50"
          initial={{
            x: particle.x,
            y: particle.y,
            scale: particle.scale,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <h2 className=" text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text p-3"
        >Why Hire Me?</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Here&#39;s an overview of my technical skills and professional qualities that make me a valuable asset to any
            team.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group relative rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] p-6"
            >
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/20">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-purple-500/10 to-transparent" />
              <motion.div
                className="absolute inset-0 rounded-xl border border-purple-500/20"
                animate={{
                  boxShadow: ["0 0 0px purple", "0 0 20px purple", "0 0 0px purple"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.2 * index,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Connection lines */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2">
          {[0, 60, 120, 180, 240, 300].map((rotation) => (
            <motion.div
              key={rotation}
              className="absolute left-1/2 top-1/2 h-48 w-[1px] origin-bottom"
              style={{ rotate: rotation }}
              initial={{ scale: 0 }}
              animate={{
                rotate: [rotation, rotation + 360],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="h-full w-full bg-gradient-to-t from-purple-500/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


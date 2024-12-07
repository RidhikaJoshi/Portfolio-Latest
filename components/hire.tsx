import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { FaCloud } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";
import { BsFillAwardFill } from "react-icons/bs";
import { GiStack } from "react-icons/gi";
import { BsBraces } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import fullstack from "../app/assests/Full-Stack.png"
import problemsolve from "../app/assests/Api.webp"
import Image from "next/image";
import learn from "../app/assests/learn.webp"
import cloud from "../app/assests/cloud.webp"
import API from "../app/assests/problem.webp"
import team from "../app/assests/team.webp"
import leader from "../app/assests/leader.webp"

export function Hire() {
  return (
    <div className="min-h-screen w-[80%] bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text p-3">
        Why Hire Me?
      </h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <Image
                src={item.header}
                alt={item.title}
                className="w-full h-[55%]"
              />
            }
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}


const items = [
  {
    title: "Full-Stack Proficiency",
    description:
      "Skilled in React.js, Next.js, Node.js, PostgreSQL, and Tailwind CSS for building robust applications.",
    header: fullstack,
    icon: <GiStack className="h-4 w-4 text-white" />,
  },
  {
    title: "Cloud Expertise",
    description:
      "Hands-on experience with AWS (S3, CloudFront) and Docker for seamless deployment and optimization.",
    header: learn,
    icon: <FaCloud className="h-4 w-4 text-white" />,
  },
  {
    title: "Strong Problem-Solving",
    description:
      "Solved 900+ LeetCode problems with a peak rating of 1910 and ranked globally in coding contests",
    header: problemsolve,
    icon: <BsCheckCircleFill className="h-4 w-4 text-white" />,
  },
  {
    title: "Collaborative Team Player",
    description:
      "I thrive in team environments by promoting open communication and collaboration to ensure alignment on shared goals. My adaptability and proactive approach streamline workflows and resolve challenges effectively, fostering a productive and harmonious atmosphere for achieving project success.",
    header: team,
    icon: <RiTeamFill className="h-4 w-4 text-white" />,
  },
  {
    title: "Secure API Development",
    description:
      "Designed and integrated APIs with third-party tools, ensuring secure data handling.",
    header: API,
    icon: <BsBraces className="h-4 w-4 text-white" />,
  },
  {
    title: "Adaptable and Quick Learner",
    description:
      "Thrive in dynamic environments with a strong ability to learn and apply new technologies.",
    header: cloud,
    icon: <GiGrowth className="h-4 w-4 text-white" />,
  },
  {
    title: "Leadership and Community Engagement",
    description:
      "Actively engaged as a Microsoft Learn Student Ambassador, fostering a culture of learning and collaboration within the tech community. Organized events, shared resources, and encouraged knowledge exchange to inspire and support peers in their educational and professional growth.",
    header: leader,
    icon: <BsFillAwardFill className="h-4 w-4 text-white" />,
  },
];

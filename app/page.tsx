'use client';
import { AboutMeComponent } from "../components/about"
import { SkillsSectionComponent } from "../components/skills";
import { ProjectsSection } from "../components/projects";
import {ContactSection} from "../components/contact";
import { HomePageComponent } from "../components/home";
import {CodingProfilesComponent} from "../components/codingProfiles"
import { EduTimeline } from "@/components/edu";
import HireSection from "@/components/hire-section"
import Loader from "@/components/Loader";
import { useState,useEffect} from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <div className="bg-black flex flex-col items-center justify-center">
    <HomePageComponent/>
    <AboutMeComponent />
    <ProjectsSection/>
    <SkillsSectionComponent/>
    {/* <Hire/> */}
   < HireSection/>
    <CodingProfilesComponent/>
    {/* <EducationSection/> */}
    <EduTimeline/>
    <ContactSection/>
    </div>
  );
}

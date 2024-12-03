import { AboutMeComponent } from "../components/about"
import { SkillsSectionComponent } from "../components/skills";
import { ProjectsSection } from "../components/projects";
import {ContactSection} from "../components/contact";
import { HomePageComponent } from "../components/home";
import {CodingProfilesComponent} from "../components/codingProfiles"
import { EduTimeline } from "@/components/edu";
import {Hire} from "@/components/hire"

export default function Home() {


  return (
    <div className="bg-black flex flex-col items-center justify-center">
    <HomePageComponent/>
    <AboutMeComponent />
    <ProjectsSection/>
    <SkillsSectionComponent/>
    <Hire/>
    <CodingProfilesComponent/>
    {/* <EducationSection/> */}
    <EduTimeline/>
    <ContactSection/>
    </div>
  );
}

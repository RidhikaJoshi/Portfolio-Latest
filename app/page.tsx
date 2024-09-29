import { AboutMeComponent } from "./components/about-me";
import { SkillsSectionComponent } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import {EducationSection } from "./components/education-section";
import {ContactSection} from "./components/contact-section";

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
    <AboutMeComponent />
    <SkillsSectionComponent/>
    <ProjectsSection/>
    <EducationSection/>
    <ContactSection/>
    </div>
  );
}

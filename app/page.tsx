import { AboutMeComponent } from "./components/about"
import { SkillsSectionComponent } from "./components/skills";
import { ProjectsSection } from "./components/projects";
import {EducationSection } from "./components/education";
import {ContactSection} from "./components/contact";
import { HomePageComponent } from "./components/home";

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <HomePageComponent/>
    <AboutMeComponent />
    <SkillsSectionComponent/>
    <ProjectsSection/>
    <EducationSection/>
    <ContactSection/>
    </div>
  );
}

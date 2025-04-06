import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-resume-dark min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        {/* <AboutMeSection /> */}
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import Header from "../components/Header";
import AboutSection from "../components/AboutSection"; 
import Founder from "../pages/Founder";       
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-black">
      <Header />
      
      
      <main>
        
        <section id="project">
          <AboutSection /> 
        </section>

        <section id="founder">
          <Founder />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

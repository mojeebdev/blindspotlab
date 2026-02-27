import Header from "../components/Header";
import Footer from "../components/Footer";
import StrategicFrameworks from "../components/StrategicFrameworks"; 

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 mb-20">
          <h1 className="text-5xl font-black uppercase tracking-tighter">
            System <span className="text-[#4e24cf]">Archive.</span>
          </h1>
        </div>
        
        <StrategicFrameworks />
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPage;
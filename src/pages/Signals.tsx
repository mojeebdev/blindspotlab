import Header from "../components/Header";
import Footer from "../components/Footer";

import Vision2026 from "../components/Vision2026";

const SignalsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 mb-20">
          <h1 className="text-5xl font-black uppercase tracking-tighter">
            Live <span className="text-[#4e24cf]">Signals.</span>
          </h1>
        </div>
        
        <Vision2026 />
      </main>
      <Footer />
    </div>
  );
};

export default SignalsPage;
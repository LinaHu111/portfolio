// App.jsx — 页面组装入口
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Growth from "./components/Growth";

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-neutral-200">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        {/* 分隔线 */}
        <div className="w-full h-px bg-white/5" />
        <Portfolio />
        <div className="w-full h-px bg-white/5" />
        <Education />
        <div className="w-full h-px bg-white/5" />
        <Experience />
        <div className="w-full h-px bg-white/5" />
        <Growth />
      </main>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import SkillCard from "./components/SkillCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <h1>Welcome to SkillSwap</h1>
      <p>Learn and share your skills.</p>

      <SkillCard skill="Python" />
      <SkillCard skill="Web Development" />
      <SkillCard skill="Graphic Design" />

      <button>Get Started</button>

      <Footer text="© 2026 SkillSwap" />
    </div>
  );
}

export default App;
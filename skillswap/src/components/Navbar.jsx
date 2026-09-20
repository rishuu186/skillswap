import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>SkillSwap</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
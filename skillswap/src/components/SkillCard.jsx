import { useState } from "react";

function SkillCard(props) {
  const [interested, setInterested] = useState(false);
  const [count, setCount] = useState(0);

  function handleInterest() {
    if (interested) {
      setInterested(false);
      setCount(count - 1);
    } else {
      setInterested(true);
      setCount(count + 1);
    }
  }

  return (
    <div className="skill-card">
      <h3>{props.skill}</h3>

      <p>Learn this skill from other students.</p>

      <button onClick={handleInterest}>
        {interested ? "✓ Interested" : "I'm Interested"}
      </button>

      <p>People interested: {count}</p>
    </div>
  );
}

export default SkillCard;
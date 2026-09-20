import { useState, useMemo, useCallback } from "react";
import SkillCard from "../components/SkillCard";

function Skills() {
  const [search, setSearch] = useState("");
  
  const handleSearch = useCallback((value) => {
  setSearch(value);
  }, []);

  const skills = [
    "Python",
    "Web Development",
    "Graphic Design",
    "Data Analysis",
    "Digital Marketing",
    "UI/UX Design",
  ];

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) =>
      skill.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h1>Available Skills</h1>

      <input
        type="text"
        placeholder="Search for a skill..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {filteredSkills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
      ))}
    </div>
  );
}

export default Skills;
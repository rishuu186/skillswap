import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <div>
      <h1>Available Skills</h1>

      <SkillCard skill="Python" />
      <SkillCard skill="Web Development" />
      <SkillCard skill="Graphic Design" />
    </div>
  );
}

export default Skills;
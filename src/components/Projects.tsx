import Section from "./Section";

interface ProjectCardProps {
  children?: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => {
  return <div>{children}</div>;
};

const Projects = () => {
  return (
    <Section className="grid grid-cols-3 gap-[15px]">
      <div>
        <ProjectCard></ProjectCard>
      </div>
    </Section>
  );
};

export default Projects;

import Section from "./Section";

interface ProjectCardProps {
  name?: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description }) => {
  return (
    <div>
      <div className="border-project-base border-2 rounded-t-xl py-10 px-5">
        <h3 className="text-center">Project Preview Photo</h3>
      </div>
      <div className="bg-project-base rounded-b-xl pt-2 px-4 pb-10">
        <h4 className="mb-2">{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Section className="grid grid-cols-3 gap-[15px]">
      <ProjectCard name="Project 1" description="Description of project 1" />
      <ProjectCard name="Project 2" description="Description of project 2" />
      <ProjectCard name="Project 3" description="Description of project 3" />
      <ProjectCard name="Project 4" description="Description of project 4" />
    </Section>
  );
};

export default Projects;

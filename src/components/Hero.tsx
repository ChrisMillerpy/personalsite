import Section from "./Section";

const Hero = () => {
  return (
    <Section id="hero" className="md:grid md:grid-cols-2 md:gap-[15px]">
      <div>
        <h1 className="mb-12 text-center md:text-left">
          Explore My Projects And Blog...
        </h1>
        <p className="md:w-5/6 mb-3">
          My name&apos;s Chris. I&apos;m a maths student and coding enthusiast.
          Please feel free to have a poke around my projects and blog.
        </p>
        <p>Enjoy and have a nice day :)</p>
      </div>
      <div className="hidden md:flex bg-white/30 rounded-3xl items-center justify-center">
        <h2>Logo Here</h2>
      </div>
    </Section>
  );
};

export default Hero;

import Section from "./Section";

const Hero = () => {
  return (
    <Section className="grid grid-cols-2 gap-[15px]">
      <div className="">
        <h1 className="mb-12">Explore My Projects And Blog...</h1>
        <p className="w-5/6 mb-3 text-white/85">
          My name's Chris. I'm a maths student and coding enthusiast. Please
          feel free to have a poke around my projects and blog. I am also very
          sexy with a wonderful moustache, my lost sector receives 5 star
          reviews all around, inside and out.
        </p>
        <p className="text-white/85">Enjoy and have a nice day :)</p>
      </div>
      <div className="bg-white/30 rounded-3xl flex items-center justify-center">
        <h2>Logo Here</h2>
      </div>
    </Section>
  );
};

export default Hero;

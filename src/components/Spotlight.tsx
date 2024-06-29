interface SpotlightProps {
  color?: string;
  size?: string;
  position?: string;
  blur?: string;
  opacity?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({
  color,
  size,
  position,
  blur,
  opacity,
}) => {
  return (
    <div
      className={`${color || "bg-spotlight-1"} ${
        size || "h-[30rem] w-[50rem]"
      } ${position || "left-1/4 -top-[15rem]"} ${blur || "blur-none"} ${
        opacity || "opacity-1"
      } rounded-[50%] absolute z-0 m-auto hidden md:block`}
    ></div>
  );
};

const BackgroundSpotlights = () => {
  return (
    <>
      <Spotlight
        color="bg-spotlight-1"
        size="h-[30rem] w-[50rem]"
        position="left-[20rem] -top-[15rem]"
        blur="blur-3xl"
        opacity="opacity-[0.63]"
      />

      <Spotlight
        color="bg-spotlight-2"
        size="h-[30rem] w-[50rem]"
        position="top-[20rem] -right-[15rem]"
        blur="blur-3xl"
        opacity="opacity-[0.83]"
      />

      <Spotlight
        color="bg-spotlight-3"
        size="h-[40rem] w-[40rem]"
        position="top-[30rem] -left-[20rem]"
        blur="blur-3xl"
        opacity="opacity-[0.25]"
      />
    </>
  );
};

export default BackgroundSpotlights;

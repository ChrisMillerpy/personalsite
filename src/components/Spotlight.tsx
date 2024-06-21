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
      } rounded-[50%] absolute z-0`}
    ></div>
  );
};

const BackgroundSpotlights = () => {
  return (
    <>
      <Spotlight
        color="bg-spotlight-1"
        size="h-[30rem] w-[50rem]"
        position="left-1/4 -top-[15rem]"
        blur="blur-3xl"
        opacity="opacity-[0.63]"
      />
    </>
  );
};

export default BackgroundSpotlights;

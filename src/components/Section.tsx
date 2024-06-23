interface SectionProps {
  className?: string;
  children?: any;
}

const Section: React.FC<SectionProps> = ({ className, children }) => {
  return <div className={`mt-28 ${className || ""}`}>{children}</div>;
};

export default Section;

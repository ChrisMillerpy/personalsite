interface SectionProps {
  className?: string;
  children?: any;
}

const Section: React.FC<SectionProps> = ({ className, children }) => {
  return <div className={`mt-20 ${className || ""}`}>{children}</div>;
};

export default Section;

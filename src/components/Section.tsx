interface SectionProps {
  className?: string;
  children?: any;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ className, children, id }) => {
  return (
    <div id={id} className={`pt-[180px] ${className || ""}`}>
      {children}
    </div>
  );
};

export default Section;

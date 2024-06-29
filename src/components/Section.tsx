import { ReactNode } from "react";

interface SectionProps {
  className?: string;
  children?: ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ className, children, id }) => {
  return (
    <div id={id} className={`pt-[135px] ${className || ""}`}>
      {children}
    </div>
  );
};

export default Section;

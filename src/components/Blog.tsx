import { ReactNode } from "react";
import Section from "./Section";

interface BentoCardProps {
  className?: string;
  children?: ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({ className, children }) => {
  return (
    <div
      className={`bg-white/20 rounded-lg ${
        className || ""
      } p-4 hover:bg-white/30`}
    >
      {children}
    </div>
  );
};

const Blog = () => {
  return (
    <Section id="blog" className="grid grid-cols-3 grid-rows-12 gap-[15px]">
      <BentoCard className="col-start-1 col-end-3 row-start-1 row-end-9 h-96">
        <h3 className="mb-3">Most Recent Title</h3>
        <p>this is the text for the most recent blog post</p>
      </BentoCard>

      <BentoCard className="col-start-3 col-end-4 row-start-1 row-end-7">
        <h4>Featured 1 Title</h4>
      </BentoCard>
      <BentoCard className="col-start-3 col-end-4 row-start-7 row-end-13">
        <h4>Featured 2 Title</h4>
      </BentoCard>

      <BentoCard className="col-start-1 col-end-2 row-start-9 row-end-13">
        <h4>Chronological 1 Title</h4>
      </BentoCard>
      <BentoCard className="col-start-2 col-end-3 row-start-9 row-end-13">
        <h4>Chronological 2 Title</h4>
      </BentoCard>
    </Section>
  );
};

export default Blog;

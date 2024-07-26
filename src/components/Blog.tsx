"use client";
import { ReactNode, useEffect, useState } from "react";
import Section from "./Section";
import { preferences, posts } from "../../public/blog_posts/post_index";
import PostViewer from "./PostViewer";

interface BentoCardProps {
  className?: string;
  children?: ReactNode;
  slug?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ className, children, slug }) => {
  return (
    <a
      className={`bg-white/20 rounded-lg ${
        className || ""
      } p-4 hover:bg-white/30 transition-colors`}
      href={`/blog/${slug}`}
    >
      {/* {children} */}
      <PostViewer slug={slug} />
    </a>
  );
};

const MoreBlogPostsButton = () => {
  return (
    <div className="flex w-full align-center justify-center mt-[15px]">
      <button className={`flex items-center justify-center gap-[15px] group`}>
        <div className="h-[35px] w-[35px] bg-white/20 rounded-[7px] group-hover:bg-white/30 transition-colors"></div>
        <div className="h-[25px] w-[25px] bg-white/20 rounded-[5px] group-hover:bg-white/30 transition-colors"></div>
        <div className="h-[15px] w-[15px] bg-white/20 rounded-[3px] group-hover:bg-white/30 transition-colors"></div>
      </button>
    </div>
  );
};

const Blog = () => {
  const firstFeaturedSlug = posts[preferences.firstFeaturedId].fileName;
  const secondFeaturedSlug = posts[preferences.secondFeaturedId].fileName;
  const mostRecentSlug = posts[posts.length - 1].fileName;
  const secondMostRecentSlug = posts[posts.length - 2].fileName;

  return (
    <Section id="blog">
      <div className="md:grid md:grid-cols-3 md:grid-rows-12 flex flex-col gap-[15px]">
        <BentoCard
          className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-9 h-[32rem] md:h-96"
          slug={mostRecentSlug}
        >
          {/* <h3 className="mb-3">Most Recent Title</h3>
          <p>this is the text for the most recent blog post</p> */}
        </BentoCard>
        <BentoCard
          className="md:col-start-1 md:col-end-3 md:row-start-9 md:row-end-13 h-[32rem] md:h-auto"
          slug={secondMostRecentSlug}
        >
          {/* <h4>Second Most Recent Title</h4> */}
        </BentoCard>

        <BentoCard
          className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-7 h-[32rem] md:h-auto"
          slug={firstFeaturedSlug}
        >
          {/* <h4>Featured 1 Title</h4> */}
        </BentoCard>
        <BentoCard
          className="md:col-start-3 md:col-end-4 md:row-start-7 md:row-end-13 h-[32rem] md:h-auto"
          slug={secondFeaturedSlug}
        >
          {/* <h4>Featured 2 Title</h4> */}
        </BentoCard>
      </div>

      <MoreBlogPostsButton />
    </Section>
  );
};

export default Blog;

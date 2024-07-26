"use client";
import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";

interface PostViewerProps {
  slug?: string;
}

const PostViewer: React.FC<PostViewerProps> = ({ slug }) => {
  const [content, setContent] = useState<string | undefined>(undefined);

  useEffect(() => {
    import(`../../public/blog_posts/blog_files/${slug}.mdx`)
      .then((res) => setContent(res.default))
      .catch((err) => console.log(err));
  });

  return <Markdown>{content}</Markdown>;
};

export default PostViewer;

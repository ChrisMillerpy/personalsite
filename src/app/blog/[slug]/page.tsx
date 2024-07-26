import React from "react";
import { posts } from "../../../../public/blog_posts/post_index";
import PostViewer from "../../../components/PostViewer";

export async function generateStaticParams(input = posts) {
  // already have posts imported locally, so this was redundant
  // const posts = await fetch("https://.../posts").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.fileName,
  }));
}

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  return (
    <div className="text-black">
      <p>slug: {slug}</p>
      <p>filename: {slug}.mdx</p>
      <PostViewer slug={slug} />
    </div>
  );
}

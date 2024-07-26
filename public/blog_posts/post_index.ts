export const preferences: {
  firstFeaturedId: number;
  secondFeaturedId: number;
} = {
  firstFeaturedId: 0,
  secondFeaturedId: 1,
};

interface Post {
  id: number;
  title: string;
  fileName: string;
  author: string;
  datePublished: string;
}

export const posts: Post[] = [
  {
    id: 0,
    title: "Test Post",
    fileName: "test-post",
    author: "",
    datePublished: "",
  },
  {
    id: 1,
    title: "First Post",
    fileName: "first-post",
    author: "",
    datePublished: "",
  },
  {
    id: 2,
    title: "Second Post",
    fileName: "second-post",
    author: "",
    datePublished: "",
  },
  {
    id: 3,
    title: "Third Post",
    fileName: "third-post",
    author: "",
    datePublished: "",
  },
];

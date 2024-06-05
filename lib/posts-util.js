import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");
const getPostsFiles = () => fs.readdirSync(postsDirectory);

const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map(getPostData);
  const sortedArray = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sortedArray;
};

const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((p) => p.isFeatured);
  return featuredPosts;
};

export { getFeaturedPosts, getAllPosts, getPostData, getPostsFiles };

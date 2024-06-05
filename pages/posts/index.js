import { Fragment } from "react";
import Head from 'next/head'
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => (
  <Fragment>
    <Head>
      <title>All POSTS</title>
      <meta name="description" content="LIST of blogs" />
    </Head>
    <AllPosts posts={posts} />
  </Fragment>
);

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: { posts: allPosts },
    //revalidate: 60,
  };
};
export default AllPostsPage;

import { Fragment } from "react";
import Head from "next/head";
import Featured from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
const HomePage = ({ posts }) => (
  <Fragment>
    <Head>
      <title>Imran Blog</title>
      <meta name="description" content="Stand for GAZA" />
    </Head>
    <Hero />
    <Featured posts={posts} />
  </Fragment>
);

export const getStaticProps = async (context) => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: { posts: featuredPosts },
    //revalidate: 60,
  };
};

export default HomePage;

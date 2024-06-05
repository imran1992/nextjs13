import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import { Fragment } from "react";
import Head from 'next/head'
const PostsDetailPage = ({ post }) => (
  <Fragment>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
    </Head>
    <PostContent {...post} />
  </Fragment>
);

export const getStaticProps = async ({ params: { slug } }) => {
  const post = getPostData(slug);
  return {
    props: { post },
    revalidate: 600,
  };
};
export const getStaticPaths = async () => {
  const postFilesName = getPostsFiles();
  const paths = postFilesName.map((f) => ({
    params: { slug: f.replace(/\.md$/, "") },
  }));
  console.log('Paths',paths)
  return {
    paths,
    fallback: false,
  };
};

export default PostsDetailPage;

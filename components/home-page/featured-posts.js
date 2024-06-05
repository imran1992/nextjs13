import PostGrid from "../posts/posts-grid";
import style from "./featured-posts.module.css";
const FeatComp = ({ posts }) => {
  return (
    <section className={style.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeatComp;

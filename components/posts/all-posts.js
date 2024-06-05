import PostGrid from "./posts-grid";
import style from "./all-posts.module.css";
const AllPosts = (props) => {
  return (
    <section className={style.posts}>
      <h1>All Posts</h1>
      <PostGrid {...props} />
    </section>
  );
};

export default AllPosts;

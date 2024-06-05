import PostItem from "./post-item";
import style from "./posts-grid.module.css";
const PostGrid = ({ posts }) => {
  return (
    <ul className={style.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} {...post} />
      ))}
    </ul>
  );
};

export default PostGrid;

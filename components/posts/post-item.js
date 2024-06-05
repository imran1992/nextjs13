import style from "./post-item.module.css";
import Image from "next/image";
import Link from "next/link";
const PostItem = ({ title, image, excerpt, date, slug }) => {
  const formattedData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <li className={style.post}>
      <Link href={`/posts/${slug}`}>
        <div className={style.image}>
          <Image
            src={`/images/posts/${slug}/${image}`}
            width={300}
            height={200}
            alt={title}
            layout='responsive'
          />
        </div>
        <div className={style.content}>
          <h3>{title}</h3>
          <time>{formattedData}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;

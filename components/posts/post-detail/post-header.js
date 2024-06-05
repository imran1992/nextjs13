import Image from "next/image";
import Style from "./post-header.module.css";
const PostHeader = ({ title, image }) => (
  <header className={Style.header}>
    <h1>{title}</h1>
    <Image src={image} alt={title} width={200} height={150} />
  </header>
);

export default PostHeader;

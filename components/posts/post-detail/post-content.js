import Markdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import jsLang from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsCSS from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import PostHeader from "./post-header";
import Style from "./post-content.module.css";

SyntaxHighlighter.registerLanguage("js", jsLang);
SyntaxHighlighter.registerLanguage("css", jsCSS);

const PostContent = ({ slug, image, title, content }) => {
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={Style.content}>
      <PostHeader title={title} image={imagePath} />
      <Markdown
        components={{
          //   img: (props) => (
          //     <Image
          //       src={`/images/posts/${slug}/${props.src}`}
          //       alt={props.alt}
          //       width={600}
          //       height={300}
          //     />
          //   ),
          p: ({ node, ...props }) => {
            if (node.children[0]?.tagName === "img") {
              const image = node.children[0];
              return (
                <div className={Style.image}>
                  <Image
                    src={`/images/posts/${slug}/${image.properties.src}`}
                    alt={image.properties.alt}
                    width={600}
                    height={300}
                  />
                </div>
              );
            }
            return <p>{props.children}</p>;
          },

          code: ({ children, className }) => {
            const language = className.split("-")?.[1] || "";
            return (
              <SyntaxHighlighter
                language={language}
                children={children}
                style={atomDark}
              />
            );
          },
        }}
      >
        {content}
      </Markdown>
    </article>
  );
};

export default PostContent;

import style from "./hero.module.css";
import Image from "next/image";

const HeroComp = () => {
  return (
    <section className={style.hero}>
      <div className={style.image}>
        <Image
          src="/images/site/imran.png"
          alt="User Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Imran</h1>
      <p>I blog about nothing...</p>
    </section>
  );
};

export default HeroComp;

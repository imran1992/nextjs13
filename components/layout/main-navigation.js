import Link from "next/link";
import style from "./main-navigation.module.css";
import Logo from "./logo";
const MainNav = () => (
  <header className={style.header}>
    <Link href="/">
      <Logo />
    </Link>

    <nav>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default MainNav;

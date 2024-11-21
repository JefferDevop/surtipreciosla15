import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.image}>
        <Link href="/">
          <CardImg src="/image/logo.jpeg" alt="Image" />
        </Link>
      </div>

      <div className={styles.title}>
        <h2>SURTIPRECIOS LA 15</h2>
      </div>
    </div>
  );
}

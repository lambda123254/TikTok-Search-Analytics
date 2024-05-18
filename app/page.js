import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Search TikTok Keywords
          <br></br>
          <input></input>
        </h1>
      </div>
    </main>
  );
}

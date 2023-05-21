import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.welcome}>
        <div className={styles.textIcon}>
          <h2>Hello, welcome to my space on the Internet!</h2>
          <Image
            className={styles["col-2"]}
            src="/icons/namaste.png"
            height={25}
            width={25}
            alt="icon"
          ></Image>
        </div>
      </div>

      <div className={styles.social}>
        <div className={styles.container}>
          <div className={styles.textIcon}>
            <Image
              src="/icons/github.png"
              height={18}
              width={18}
              alt="icon"
            ></Image>
            <b className={styles["col-2"]}>
              <a href="https://www.google.com" target="_blank">
                Github
              </a>
            </b>
          </div>

          <div className={styles.textIcon}>
            <Image
              src="/icons/code.png"
              height={18}
              width={18}
              alt="icon"
            ></Image>
            <b className={styles["col-2"]}>
              <a href="https://www.google.com" target="_blank">
                CodeChef
              </a>
            </b>
          </div>

          <div className={styles.textIcon}>
            <Image
              src="/icons/linkedin.png"
              height={18}
              width={18}
              alt="icon"
            ></Image>
            <b className={styles["col-2"]}>
              <a href="https://www.google.com" target="_blank">
                LinkedIn
              </a>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

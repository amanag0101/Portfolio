import styles from "./css/techstack.module.css";

export default function TechStack() {
  return (
    <div className={styles.techstack}>
      <div className={styles.layer}>
        <h2>FRAMEWORKS / LIBRARIES / TOOLS</h2>
        <img className={styles.icon} src="./icons/spring-boot.svg" alt="icon" />
        <img className={styles.icon} src="./icons/hibernate.svg" alt="icon" />
        <img className={styles.icon} src="./icons/rabbit-mq.svg" alt="icon" />
        <img className={styles.icon} src="./icons/thymeleaf.svg" alt="icon" />
        <img className={styles.icon} src="./icons/react-js.svg" alt="icon" />
        <img className={styles.icon} src="./icons/next-js-blue.svg" alt="icon" />
        <img className={styles.icon} src="./icons/android-studio.svg" alt="icon" />
        <img className={styles.icon} src="./icons/git.svg" alt="icon" />
      </div>

      <div className={styles.layer}>
        <h2>PROGRAMMING LANGUAGES</h2>
        <img className={styles.icon} src="./icons/c.svg" alt="icon" />
        <img className={styles.icon} src="./icons/c++.svg" alt="icon" />
        <img className={styles.icon} src="./icons/java.svg" alt="icon" />
        <img className={styles.icon} src="./icons/javascript.svg" alt="icon" />
        <img className={styles.icon} src="./icons/typescript.svg" alt="icon" />
        <img className={styles.icon} src="./icons/solidity-purple.svg" alt="icon" />
      </div>

      <div className={styles.layer}>
        <h2>BLOCKCHAIN</h2>
        <img className={styles.icon} src="./icons/ethereum.svg" alt="icon" />
        <img className={styles.icon} src="./icons/truffle-suite.svg" alt="icon" />
        <img className={styles.icon} src="./icons/ganache.svg" alt="icon" />
        <img className={styles.icon} src="./icons/solidity-purple.svg" alt="icon" />
      </div>

      <div className={styles.layer}>
        <h2>FRONTEND</h2>
        <img className={styles.icon} src="./icons/html.svg" alt="icon" />
        <img className={styles.icon} src="./icons/css.svg" alt="icon" />
        <img className={styles.icon} src="./icons/sass.svg" alt="icon" />
      </div>

      <div className={styles.layer}>
        <h2>DATABASE</h2>
        <img className={styles.icon} src="./icons/sql-server.png" alt="icon" />
        <img className={styles.icon} src="./icons/mysql.svg" alt="icon" />
      </div>
    </div>
  );
}

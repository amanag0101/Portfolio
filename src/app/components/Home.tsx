import Image from "next/image";
import styles from "./css/home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles["col-1"]}>
          <Image src="/images/profile.jpg" alt="profile" height={300} width={300} />
        </div>

        <div className={styles["col-2"]}>
          <div>
            <h2>
              Hi!{" "}
              <Image
                className={styles.icon}
                src="/icons/wave.svg"
                alt="icon"
                height={20}
                width={20}
              />
              <br />I am Aman Agarwal
            </h2>
            <p>
              I am a person who is positive about every aspect of life. I am
              passionate about programming and I like to learn and explore new
              things. I am strong in design and integration with intuitive
              problem-solving skills and ability to translate business
              requirements into technical solutions.
            </p>
          </div>

          <div>
            <h2>Work Experience (April 2022 - Present)</h2>
            <p>
              Fullstack Web Developer at VedX <br />
              Backend: Spring Boot, Hibernate, RabbitMQ, MySQL <br />
              Frontend: Next.js, React.js
            </p>
          </div>

          <div>
            <h2>Post Graduation (2022 - 2024)</h2>
            <p>
              Masters of Computer Applications (MCA) <br />
              Vellore Institute of Technology, Vellore
            </p>
          </div>

          <div className={styles.hobby}>
            <h2>Hobbies</h2>
            <Image
              className={styles.icon}
              src="/icons/table-tennis.svg"
              alt="icon"
              height={30}
              width={30}
            />

            <Image
              className={styles.icon}
              src="/icons/badminton.svg"
              alt="icon"
              height={30}
              width={30}
            />

            <Image
              className={styles.icon}
              src="/icons/books.svg"
              alt="icon"
              height={30}
              width={30}
            />

            <Image
              className={styles.icon}
              src="/icons/controller.svg"
              alt="icon"
              height={30}
              width={30}
            />

            <Image
              className={styles.icon}
              src="/icons/television.svg"
              alt="icon"
              height={30}
              width={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

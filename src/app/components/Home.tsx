"use client";

import Image from "next/image";
import Lottie from "lottie-react";

import astronaut from "../../../public/lotties/astronaut.json";
import styles from "./css/home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles["col-1"]}>
          {/* <Image src="/images/profile.jpg" alt="profile" height={300} width={300} /> */}
          <Lottie
            animationData={astronaut}
            loop={true}
            style={{
              height: "80vh",
            }}
          />
        </div>

        <div className={styles["col-2"]}>
          <div>
            <h2 className={styles.about}>
              Hi! &nbsp;
              {/* <Image
                className={styles.icon}
                src="/icons/wave.svg"
                alt="icon"
                height={20}
                width={20}
              /> */}
              I am Aman Agarwal
            </h2>
            <p className={styles.content}>
              I am a person who is positive about every aspect of life. I am
              passionate about programming and I like to learn and explore new
              things. I am strong in design and integration with intuitive
              problem-solving skills and ability to translate business
              requirements into technical solutions.
            </p>
          </div>

          <div>
            <h2>Work Experience</h2>

            <h3>
              Fullstack Web Developer at VedX Academy (April 2022 - August 2023)
            </h3>

            <p className={styles.content}>
              Independently developed and deployed back end APIs, designed
              intuitive user interfaces, and managed the release of new features
              to enhance the user experience. My technical expertise includes
              working with a diverse tech stack, including Spring Boot, Next.js,
              MySQL, RabbitMQ, Git, and REST API.
            </p>
          </div>

          <div>
            <h2>Education</h2>
            
            <h3>Post Graduation</h3>
            <p className={styles.content}>
              MCA (2022 - 2024), Vellore Institute of Technology, Vellore
            </p>

            <h3>Graduation</h3>
            <p className={styles.content}>
              BCA (2017 - 2020), Inspiria Knowledge Campus, Siliguri
            </p>
          </div>

          <div className={styles.hobby}>
            <h2>Hobbies</h2>
            <div className={styles.content}>
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
    </div>
  );
}

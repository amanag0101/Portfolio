"use client";

import Image from "next/image";
import styles from "./css/header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const GREETINGS = [
    "स्वागत",
    "સ્વાગત છે",
    "ਜੀ ਆਇਆਂ ਨੂੰ",
    "স্বাগতম",
    "வருக",
    "خوش آمدید",
    "ようこそ",
    "歡迎",
    "환영",
    "Прошу",
    "Hoş geldin",
    "Bienvenido",
    "Добро пожаловать",
    "Benvenuto",
    "Selamat datang",
    "Willkommen",
    "Bienvenue",
    "歡迎",
    "WELCOME",
  ];

  const [welcomeMessage, setWelcomeMessage] = useState<string>(GREETINGS[0]);

  const updateWelcomeMessage = async () => {
    for (let i = 0; i < GREETINGS.length; i++)
      setTimeout(() => setWelcomeMessage(GREETINGS[i]), 1000 * i);
  };

  useEffect(() => {
    updateWelcomeMessage();
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.textIcon}>
          <Image
            className={styles["col-1"]}
            src="/icons/namaste.png"
            height={25}
            width={25}
            alt="icon"
          ></Image>
          <h2>{welcomeMessage}</h2>
        </div>

        <div className={styles.social}>
          <div className={styles.container}>
            <div className={styles.textIcon}>
              <Image
                onClick={() =>
                  window.open("https://github.com/amanag0101", "_blank")
                }
                src="/icons/github.png"
                height={30}
                width={30}
                alt="icon"
              ></Image>
              <b className={styles["col-2"]}>
                <a href="https://github.com/amanag0101" target="_blank">
                  Github
                </a>
              </b>
            </div>

            <div className={styles.textIcon}>
              <Image
                onClick={() =>
                  window.open(
                    "https://www.codechef.com/users/aman___agarwal",
                    "_blank"
                  )
                }
                src="/icons/brackets.png"
                height={30}
                width={30}
                alt="icon"
              ></Image>
              <b className={styles["col-2"]}>
                <a
                  href="https://www.codechef.com/users/aman___agarwal"
                  target="_blank"
                >
                  CodeChef
                </a>
              </b>
            </div>

            <div className={styles.textIcon}>
              <Image
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/amanag0101/",
                    "_blank"
                  )
                }
                src="/icons/linkedin.png"
                height={30}
                width={30}
                alt="icon"
              ></Image>
              <b className={styles["col-2"]}>
                <a
                  href="https://www.linkedin.com/in/amanag0101/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"

import Image from "next/image";
import styles from "./css/projectcard.module.css";

export interface ProjectCardProps {
  imageSrc: string;
  heading: string;
  description: string;
  stack: string;
  gitHubLink: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <Image src={props.imageSrc} height={220} width={350} alt="img" />
      <p className={styles.heading}>
        <b>{props.heading}</b>
      </p>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.stack}>
        <span className={styles.tech_stack}>Tech Stack:</span>{" "}
        <span>{props.stack}</span>
      </p>
      <button onClick={() => window.open(props.gitHubLink, "_blank")}>
        GitHub
      </button>
    </div>
  );
}

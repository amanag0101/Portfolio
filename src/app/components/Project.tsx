import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import styles from "./css/project.module.css";

const data: ProjectCardProps[] = [
  {
    imageSrc: "/images/algo_viz.png",
    heading: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium, est dolor libero perspiciatis dolore accusamus impedit ea molestias blanditiis repudiandae, deleniti accusantium nostrum mollitia eius odio atque cumque. Praesentium?",
    stack: "Java, Spring Boot, MySQL",
    gitHubLink: "https://github.com/amanag0101/AlgorithmVisualizer",
  },
  {
    imageSrc: "/images/algo_viz.png",
    heading: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium, est dolor libero perspiciatis dolore accusamus impedit ea molestias blanditiis repudiandae, deleniti accusantium nostrum mollitia eius odio atque cumque. Praesentium?",
    stack: "Java, Spring Boot, MySQL",
    gitHubLink: "https://github.com/amanag0101/AlgorithmVisualizer",
  },
  {
    imageSrc: "/images/algo_viz.png",
    heading: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium, est dolor libero perspiciatis dolore accusamus impedit ea molestias blanditiis repudiandae, deleniti accusantium nostrum mollitia eius odio atque cumque. Praesentium?",
    stack: "Java, Spring Boot, MySQL",
    gitHubLink: "https://github.com/amanag0101/AlgorithmVisualizer",
  },
  {
    imageSrc: "/images/algo_viz.png",
    heading: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium, est dolor libero perspiciatis dolore accusamus impedit ea molestias blanditiis repudiandae, deleniti accusantium nostrum mollitia eius odio atque cumque. Praesentium?",
    stack: "Java, Spring Boot, MySQL",
    gitHubLink: "https://github.com/amanag0101/AlgorithmVisualizer",
  },
  {
    imageSrc: "/images/algo_viz.png",
    heading: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium, est dolor libero perspiciatis dolore accusamus impedit ea molestias blanditiis repudiandae, deleniti accusantium nostrum mollitia eius odio atque cumque. Praesentium?",
    stack: "Java, Spring Boot, MySQL",
    gitHubLink: "https://github.com/amanag0101/AlgorithmVisualizer",
  },
  {
    imageSrc: "/images/algo_viz.png",
    heading: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium, est dolor libero perspiciatis dolore accusamus impedit ea molestias blanditiis repudiandae, deleniti accusantium nostrum mollitia eius odio atque cumque. Praesentium?",
    stack: "Java, Spring Boot, MySQL",
    gitHubLink: "https://github.com/amanag0101/AlgorithmVisualizer",
  },
];

export default function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div className={styles.card}>
              <ProjectCard
                imageSrc={item.imageSrc}
                heading={item.heading}
                description={item.description}
                stack={item.stack}
                gitHubLink={item.gitHubLink}
              ></ProjectCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

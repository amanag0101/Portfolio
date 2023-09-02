import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import styles from "./css/project.module.css";

const data: ProjectCardProps[] = [
  {
    imageSrc: "/images/algo_viz.png",
    heading: "Algorithm Visualizer",
    description:
      " Built an interactive project that provides a visual demonstration of the functionality of various sorting and searching algorithms. Through this project, users can gain a deeper understanding of the inner workings of these algorithms and their applications in computer science.",
    stack: "Java, Swing",
    gitHubLink: "https://github.com/amanag0101/AlgorithmVisualizer",
  },
  {
    imageSrc: "/images/blockchain_user_review_sys.png",
    heading: "Blockchain based User Review System",
    description:
      " Built an innovative online User Review System that leverages the power of blockchain technology to securely store user-generated reviews. To ensure the authenticity and accuracy of the reviews, they are only added to the blockchain after the verification of the associated invoice, which is achieved through OCR and pattern matching techniques.",
    stack: "Solidity, Spring Boot, Truffle Suite, Next.js, MySQL, IPFS",
    gitHubLink: "https://github.com/amanag0101/Blockchain-User-Review-System",
  },
  {
    imageSrc: "/images/e_commerce.png",
    heading: "E-Commerce Web Application",
    description:
      "Created a robust E-Commerce Web Application that provides a seamless shopping experience for users. The application allows the administrators to easily manage different categories and products. Users can browse the available products and add items to their cart with ease",
    stack: "Java, Spring Boot, Thymeleaf, MySQL",
    gitHubLink: "https://github.com/amanag0101/EmpireSales",
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

import Header from "./components/Header";
import styles from "./layout.module.css";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <header>
          <Header />
        </header>
      </div>

      <div className={styles.navbar}>
        <nav>
          <Navbar />
        </nav>
      </div>

      <div className={styles.body}>
        <body>{children}</body>
      </div>
    </div>
  );
}

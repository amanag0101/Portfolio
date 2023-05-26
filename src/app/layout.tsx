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
    <html lang="en">
      <body>
        <div className={styles.layout}>
          <div className={styles.header}>
            <header>
              <Header />
            </header>
          </div>

          <div className={styles.container}>
            <nav className={styles.navbar}>
              <Navbar />
            </nav>

            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

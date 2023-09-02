import Header from "./components/Header";
import Navbar from "./components/Navbar";
import styles from "./layout.module.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>
          <header className={styles.header}>
            <Header />
          </header>

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

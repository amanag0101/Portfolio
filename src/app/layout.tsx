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

"use client";

import SpaceParticles from "./components/particles/SpaceParticles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import styles from "./layout.module.css";
import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // console.log(container);
    },
    []
  );

  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>
          <Particles
            options={SpaceParticles}
            init={particlesInit}
            loaded={particlesLoaded}
          />
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

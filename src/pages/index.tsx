import Head from "next/head";
import Calculator from "@/components/Calculator/Calculator";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub Actions Demo - CI/CD Pipeline</title>
        <meta
          name="description"
          content="Demo project for GitHub Actions presentation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            GitHub Actions Demo
            <span className={styles.emoji}>🚀</span>
          </h1>
          <p className={styles.description}>
            A sample Next.js application demonstrating CI/CD with GitHub Actions
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>✅ Automated Testing</h3>
              <p>Jest & React Testing Library run on every push</p>
            </div>
            <div className={styles.feature}>
              <h3>🔍 Code Linting</h3>
              <p>ESLint ensures code quality and consistency</p>
            </div>
            <div className={styles.feature}>
              <h3>🏗️ Build Verification</h3>
              <p>Production builds validated before deployment</p>
            </div>
            <div className={styles.feature}>
              <h3>🚀 Auto Deployment</h3>
              <p>Deploy to production on successful builds</p>
            </div>
          </div>
          <Calculator />
        </div>
      </main>
    </>
  );
}

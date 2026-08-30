import AboutPage from "./(component)/Aboutus/about";
import SlideBar from "./(component)/slidebar/slider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.snapSection}>
        <SlideBar />
      </section>

      <section className={styles.snapSection}>
        <AboutPage />
      </section>
    </main>
  );
}

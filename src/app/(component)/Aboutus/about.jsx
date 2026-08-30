"use client";

import React from "react";
import styles from "./about.module.css";

const Page = () => {
  return (
    <main className={styles.aboutPage}>
      {/* ================= HERO ================= */}
      <section className={styles.section}>
        <div className={styles.heroGlow}></div>

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>ABOUT ME</span>

          <h1>
            I Turn Ideas Into
            <span> Digital Experiences.</span>
          </h1>

          <p>
            I'm a web developer focused on building modern, fast, and
            professional websites that help businesses stand out online.
          </p>

          <div className={styles.heroButtons}>
            <a href="#story" className={styles.primaryButton}>
              My Story
            </a>

            <a href="#skills" className={styles.secondaryButton}>
              My Skills
            </a>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span></span>
          Scroll to explore
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className={`${styles.section} ${styles.skills}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>01 — WHAT I DO</div>

          <div className={styles.skillsHeader}>
            <h2>
              Built with the
              <span> right tools.</span>
            </h2>

            <p>
              I use modern technologies to create websites that are reliable,
              responsive, scalable, and easy to maintain.
            </p>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <span className={styles.number}>01</span>

              <h3>Frontend Development</h3>

              <p>
                Modern interfaces built with React, Next.js, JavaScript, HTML,
                and CSS.
              </p>
            </div>

            <div className={styles.skillCard}>
              <span className={styles.number}>02</span>

              <h3>Backend Development</h3>

              <p>
                Powerful server-side applications and APIs using Node.js and
                Express.
              </p>
            </div>

            <div className={styles.skillCard}>
              <span className={styles.number}>03</span>

              <h3>Database</h3>

              <p>
                Secure and structured data management using MongoDB and
                Mongoose.
              </p>
            </div>

            <div className={styles.skillCard}>
              <span className={styles.number}>04</span>

              <h3>Responsive Design</h3>

              <p>
                Websites designed to look great across phones, tablets, and
                desktops.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= TECHNOLOGIES ================= */}
      <section className={`${styles.section} ${styles.technologies}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02 — TECHNOLOGIES</div>

          <div className={styles.techHeader}>
            <h2>
              Tools I<span> work with.</span>
            </h2>

            <p>
              A collection of technologies I use to design, develop, and deliver
              modern web experiences.
            </p>
          </div>

          <div className={styles.techList}>
            <div>React</div>
            <div>Next.js</div>
            <div>JavaScript</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Node.js</div>
            <div>Express</div>
            <div>MongoDB</div>
            <div>Mongoose</div>
            <div>Redux</div>
            <div>REST APIs</div>
            <div>Git</div>
          </div>
        </div>
      </section>
      {/* ================= STORY ================= */}
      <section id="story" className={`${styles.section} ${styles.story}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02 — MY STORY</div>

          <div className={styles.storyGrid}>
            <div>
              <h2>
                More than just
                <span> code.</span>
              </h2>
            </div>

            <div className={styles.storyText}>
              <p>
                I believe a great website should do more than simply exist. It
                should communicate, build trust, and give visitors a reason to
                take action.
              </p>

              <p>
                That's why I focus on combining clean development, modern
                design, responsive layouts, and smooth user experiences to
                create websites that feel professional from the first click.
              </p>

              <p>
                Whether it's a business website, portfolio, landing page, or
                full-stack application, my goal is simple: turn your idea into
                something people remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={`${styles.section} ${styles.cta}`}>
        <div className={styles.ctaGlow}></div>

        <div className={styles.ctaContent}>
          <span className={styles.eyebrow}>LET'S WORK TOGETHER</span>

          <h2>
            Have an idea?
            <br />
            <span>Let's build one.</span>
          </h2>

          <p>
            Your next website could be the one that makes your business stand
            out.
          </p>

          <a href="/contact" className={styles.ctaButton}>
            Start a Project →
          </a>
        </div>
      </section>
    </main>
  );
};

export default Page;

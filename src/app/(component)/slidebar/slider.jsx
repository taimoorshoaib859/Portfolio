"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./slider.module.css";
import { useRouter } from "next/navigation";

const Slider = () => {
  const images = [
    {
      src: "/MainImage1.jpg",
      alt: "Web development service",
      label: "WEB DESIGN & DEVELOPMENT",
      title: "A website that makes your business impossible to ignore.",
      description:
        "Modern, fast and carefully designed websites built to turn visitors into customers.",
      id: 1,
    },
    {
      src: "/MainImage2.jpg",
      alt: "Professional website design",
      label: "DESIGN • EXPERIENCE • RESULTS",
      title: "Your website should work as hard as you do.",
      description:
        "Beautiful digital experiences designed around your brand, your customers and your goals.",
      id: 2,
    },
    {
      src: "/MainImage4.jpg",
      alt: "Modern web development",
      label: "IDEA → DESIGN → CODE",
      title: "You bring the idea. I'll build the experience.",
      description:
        "From the first concept to the final line of code, let's turn your vision into something real.",
      id: 3,
    },
  ];

  const router = useRouter();

  const [imageSlider, setImageSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSlider((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setImageSlider((prev) => (prev + 1) % images.length);
  };

  const previousSlide = () => {
    setImageSlider((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={styles.slider}>
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`${styles.slide} ${
            index === imageSlider ? styles.active : ""
          }`}
        >
          <Image
            src={image.src}
            fill
            priority={index === 0}
            alt={image.alt}
            className={styles.sliderImage}
          />

          <div className={styles.overlay}></div>

          <div className={styles.content}>
            <div className={styles.label}>
              <span></span>
              {image.label}
            </div>

            <h1>{image.title}</h1>

            <p>{image.description}</p>

            <button
              className={styles.cta}
              onClick={() => router.push("/contact")}
            >
              <span>Start a Project</span>
              <span className={styles.ctaIcon}>↗</span>
            </button>
          </div>
        </div>
      ))}

      {/* ARROWS */}

      <button
        className={`${styles.arrow} ${styles.prev}`}
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        className={`${styles.arrow} ${styles.next}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>

      {/* BOTTOM */}

      <div className={styles.bottom}>
        <div className={styles.counter}>
          <span className={styles.current}>0{imageSlider + 1}</span>

          <span className={styles.divider}></span>

          <span>0{images.length}</span>
        </div>

        <div className={styles.dots}>
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setImageSlider(index)}
              className={`${styles.dot} ${
                index === imageSlider ? styles.activeDot : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.scroll}>
          SCROLL
          <span>↓</span>
        </div>
      </div>
    </section>
  );
};

export default Slider;

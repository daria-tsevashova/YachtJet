import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <section className={styles.aboutSection} id="about-us">
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>YachtJet fleet is here to take you on the ultimate adventure</h2>
          <div className={styles.aboutTextBox}>
            <h3 className={styles.aboutTextTitle}>
              From spacious decks to state-of-the-art technology, our yachts are designed to provide the perfect blend of luxury and functionality.
            </h3>
            <p className={styles.aboutText}>
              Take a look at our selection below and choose the yacht that matches your needs and preferences. No matter which yacht you choose, our experienced crew will ensure that your journey is smooth and enjoyable. Book now and get ready for an unforgettable adventure on the high seas.
            </p>
          </div>
        </div>

        <picture>
          <source srcSet="/img/about-us/img-desk1440.webp 1x, /img/about-us/img-desk1440@2x.webp 2x" media="(min-width: 1440px)" />
          <source srcSet="/img/about-us/img-desk.webp 1x, /img/about-us/img-desk@2x.webp 2x" media="(min-width: 1280px)" />
          <source srcSet="/img/about-us/img-tab.webp 1x, /img/about-us/img-tab@2x.webp 2x" media="(min-width: 768px)" />
          <source srcSet="/img/about-us/img-mob.webp 1x, /img/about-us/img-mob@2x.webp 2x" media="(max-width: 767px)" />
          <img className={styles.aboutImage} src="/img/about-us/img-mob.webp" alt="yacht" />
        </picture>
      </div>
    </section>
  );
}

export default AboutUs;

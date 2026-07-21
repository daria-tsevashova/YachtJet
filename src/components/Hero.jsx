import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <h1 className={styles.heroTitle}>Explore the High Seas with Our Luxury Yacht Rentals</h1>
        <p className={styles.heroText}>
          Experience the freedom and luxury of yachting on the open seas. Choose from our top-of-the-line yachts and embark on an unforgettable journey surrounded by breathtaking views and state-of-the-art amenities.
        </p>
        <a className={styles.heroBtn} href="#rent-a-yacht">
          Yacht rental
        </a>
      </div>
    </section>
  );
}

export default Hero;

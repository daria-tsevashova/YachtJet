import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.top}>
          <div className={styles.logoNav}>
            <a href="#hero" className={styles.logo}>
              yachtjet
            </a>
            <ul className={styles.nav}>
              <li className={styles.navItem}>
                <a href="#about-us" className={styles.navLink}>ABOUT</a>
              </li>
              <li className={styles.navItem}>
                <a href="#our-yachts" className={styles.navLink}>YACHTS</a>
              </li>
              <li className={styles.navItem}>
                <a href="#reviews" className={styles.navLink}>REVIEWS</a>
              </li>
            </ul>
          </div>
          <ul className={styles.socials}>
            <li className={styles.socialItem}>
              <a href="https://www.linkedin.com/in/daria-tsevashova/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                <svg className={styles.socialIcon} width="24" height="24">
                  <use href="/img/sprite.svg#icon-linkedin"></use>
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="https://github.com/daria-tsevashova" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
                <svg className={styles.socialIcon} width="24" height="24">
                  <use href="/img/sprite.svg#icon-github"></use>
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="mailto:dariatsevashova@gmail.com" aria-label="Email us" className={styles.socialLink}>
                <svg className={styles.socialIcon} width="24" height="24">
                  <use href="/img/sprite.svg#icon-mail"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <p className={styles.slogan}>No matter which yacht you choose, our experienced crew will ensure that your journey is smooth and enjoyable.</p>

        <div className={styles.bottom}>
          <span>2023. Yacht Adventures</span>
          <a href="#" className={styles.policy}>Privacy Police</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

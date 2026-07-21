import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
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
              <a href="https://www.instagram.com/goitclub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                <svg className={styles.socialIcon} width="24" height="24">
                  <use href="/img/sprite.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="https://www.youtube.com/c/GoIT" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialLink}>
                <svg className={styles.socialIcon} width="24" height="24">
                  <use href="/img/sprite.svg#icon-youtube"></use>
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="https://www.facebook.com/goITclub/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                <svg className={styles.socialIcon} width="24" height="24">
                  <use href="/img/sprite.svg#icon-facebook"></use>
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

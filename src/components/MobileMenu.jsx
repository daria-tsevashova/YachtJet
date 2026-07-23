import styles from './MobileMenu.module.css';

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.isOpen : ''}`} data-modal>
      <div className={styles.header}>
        <a className={styles.logo} href="#hero" onClick={onClose}>
          yachtjet
        </a>
        <button className={styles.closeButton} type="button" onClick={onClose}>
          <svg className={styles.closeIcon} width="16" height="16">
            <use href="/img/sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>
      <div className={styles.navWrap}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a className={styles.navLink} href="#about-us" onClick={onClose}>ABOUT</a>
            </li>
            <li>
              <a className={styles.navLink} href="#our-yachts" onClick={onClose}>YACHTS</a>
            </li>
            <li>
              <a className={styles.navLink} href="#reviews" onClick={onClose}>REVIEWS</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.socialsWrap}>
        <ul className={styles.socials}>
          <li>
            <a href="https://www.linkedin.com/in/daria-tsevashova/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
              <svg className={styles.socialIcon} width="19" height="19">
                <use href="/img/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/daria-tsevashova" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
              <svg className={styles.socialIcon} width="20" height="20">
                <use href="/img/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:dariatsevashova@gmail.com" aria-label="Email us" className={styles.socialLink}>
              <svg className={styles.socialIcon} width="20" height="20">
                <use href="/img/sprite.svg#icon-mail"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;

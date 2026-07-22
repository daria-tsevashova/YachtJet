import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const socialLinks = [
  { label: 'Instagram link', href: 'https://www.instagram.com/goitclub/', icon: 'icon-instagram' },
  { label: 'Youtube link', href: 'https://www.youtube.com/c/GoIT', icon: 'icon-youtube' },
  { label: 'Facebook link', href: 'https://www.facebook.com/goITclub/', icon: 'icon-facebook' },
];

function Header({ navLinks, onMenuToggle, onMenuClose, isMenuOpen }) {
  const [activeLink, setActiveLink] = useState(navLinks[0]?.href || '');

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveLink(`#${visibleEntry.target.id}`);
        }
      },
      { threshold: [0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navLinks]);

  const handleNavClick = (linkHref) => {
    setActiveLink(linkHref);
    onMenuClose();
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <nav className={styles.navigation}>
          <a className={styles.headerLogo} href="#hero" onClick={onMenuClose} aria-label="Site logo">
            yachtjet
          </a>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <li className={styles.navItem} key={link.href}>
                  <a
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className={styles.headerSocialList}>
            {socialLinks.map((social) => (
              <li className={styles.headerSocialItem} key={social.label}>
                <a className={styles.headerSocialLink} target="_blank" aria-label={social.label} href={social.href}>
                  <svg className={styles.headerSocialIcon} width="24" height="24">
                    <use href={`/img/sprite.svg#${social.icon}`}></use>
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <button className={styles.burgerBtn} type="button" aria-label={isMenuOpen ? 'Close menu overlay' : 'Open menu overlay'} onClick={onMenuToggle}>
            <svg className={styles.burgerIcon} width="28" height="28">
              <use href="/img/sprite.svg#icon-menu"></use>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const socialLinks = [
  { label: 'LinkedIn link', href: 'https://www.linkedin.com/in/daria-tsevashova/', icon: 'icon-linkedin' },
  { label: 'GitHub link', href: 'https://github.com/daria-tsevashova', icon: 'icon-github' },
  { label: 'Email us', href: 'mailto:dariatsevashova@gmail.com', icon: 'icon-mail' },
];

function Header({ navLinks, onMenuToggle, onMenuClose, isMenuOpen }) {
  const [activeLink, setActiveLink] = useState(navLinks[0]?.href || '');
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    const rentSection = document.querySelector('#rent-a-yacht');

    if (!sections.length) return undefined;

    const updateActiveLink = () => {
      const headerOffset = 80;
      const currentSection = [...sections]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= headerOffset) || sections[0];

      setActiveLink(`#${currentSection.id}`);
      setIsCollapsed(Boolean(rentSection && rentSection.getBoundingClientRect().top <= headerOffset));
    };

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);
    window.addEventListener('hashchange', updateActiveLink);

    return () => {
      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('resize', updateActiveLink);
      window.removeEventListener('hashchange', updateActiveLink);
    };
  }, [navLinks]);

  const handleNavClick = (linkHref) => {
    setActiveLink(linkHref);
    onMenuClose();
  };

  return (
    <header className={`${styles.header} ${isCollapsed ? styles.headerCollapsed : ''}`}>
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

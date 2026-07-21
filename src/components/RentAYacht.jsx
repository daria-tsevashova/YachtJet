import styles from './RentAYacht.module.css';

function RentAYacht() {
  return (
    <section className={styles.section} id="rent-a-yacht">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Rent a yacht now</h2>

          <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
            <label className={styles.label}>
              <input className={styles.input} name="user-name" placeholder="Full Name" type="text" pattern="[a-zA-Zа-яА-ЯіІїЇґҐєЄʼ ]+" required />
            </label>
            <label className={styles.label}>
              <input className={styles.input} name="user-email" placeholder="Email" type="email" pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})" required />
            </label>
            <label className={styles.label}>
              <input className={styles.input} name="user-phone" placeholder="Phone number" type="tel" pattern="^\+\d{2}-\d{3}-\d{3}-\d{2}-\d{2}$" required />
            </label>
            <label className={styles.textareaLabel}>
              <textarea className={styles.textarea} name="user-comment" placeholder="Comment"></textarea>
            </label>
            <button className={styles.button} type="submit">Send</button>
          </form>
        </div>

        <div className={styles.imageWrap}>
          <picture>
            <source srcSet="/img/rent-a-yacht/img-mobile.webp 1x, /img/rent-a-yacht/img-mobile@2x.webp 2x" media="(max-width: 767px)" />
            <source srcSet="/img/rent-a-yacht/img-tablet.webp 1x, /img/rent-a-yacht/img-tablet@2x.webp 2x" media="(max-width: 1279px)" />
            <source srcSet="/img/rent-a-yacht/img-desktop-1280.webp 1x, /img/rent-a-yacht/img-desktop-1280@2x.webp 2x" media="(min-width: 1280px)" />
            <img src="/img/rent-a-yacht/img-mobile.webp" alt="Yacht" className={styles.image} />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default RentAYacht;

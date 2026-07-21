import styles from './Advantages.module.css';

const advantagesItems = [
  'Swimming and water sports: try your hand at water skiing',
  'Fishing: try to catch your own dinner',
  'Sightseeing tours: take a shore or island tour, enjoy the views and sunsets from the water',
  'Rest and relaxation: read a book or listen to music while enjoying the outdoor atmosphere',
];

function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className="visually-hidden">Advantages of Yacht Rental</h2>
        <div className={styles.textContainer}>
          <ol className={styles.list}>
            {advantagesItems.map((item, index) => (
              <li className={styles.item} key={item}>
                <span className={styles.number}>0{index + 1}</span>
                <p className={styles.text}>{item}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.imageContainer}>
          <picture>
            <source srcSet="/img/advantages/ydmob1.webp 1x, /img/advantages/ydmob2.webp 2x" media="(max-width: 767px)" />
            <source srcSet="/img/advantages/ydtab1.webp 1x, /img/advantages/ydtab2.webp 2x" media="(min-width: 768px)" />
            <source srcSet="/img/advantages/yacht-deck.webp 1x, /img/advantages/yacht-deck2.webp 2x" media="(min-width: 1200px)" />
            <img src="/img/advantages/yacht-deck.webp" alt="Luxury yacht deck" width="432" height="424" className={styles.image} />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

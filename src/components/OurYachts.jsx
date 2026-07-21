import styles from './OurYachts.module.css';

const yachtCards = [
  {
    name: 'ARROW',
    category: 'LUXURY YAHTS',
    image: '/img/our-yachts/y1.webp',
    image2x: '/img/our-yachts/y1@2x.webp',
    alt: 'Arrow',
    details: [
      ['LENGTH', '48m(155ft)'],
      ['BUILDER', 'Admiral'],
      ['BUILT', '2021'],
      ['GUESTS', '11 in 5 cabins'],
      ['PRICE', '€33,500,000'],
    ],
    hiddenClass: '',
  },
  {
    name: 'BENETTI OASIS 40M BO122',
    category: 'LUXURY YAHTS',
    image: '/img/our-yachts/y2.webp',
    image2x: '/img/our-yachts/y2@2x.webp',
    alt: 'BENETTI OASIS 40M BO122',
    details: [
      ['LENGTH', '41m (133ft)'],
      ['SHIPYARD', 'Benetti'],
      ['BUILT', '2025'],
      ['GUESTS', '10 in 5 cabins'],
      ['PRICE', '€23,210,000'],
    ],
    hiddenClass: 'visually-hidden-tablet',
  },
  {
    name: 'BELLE ANNA',
    category: 'LUXURY YAHTS',
    image: '/img/our-yachts/y3.webp',
    image2x: '/img/our-yachts/y3@2x.webp',
    alt: 'BELLE ANNA',
    details: [
      ['LENGTH', '50m(155ft)'],
      ['SHIPYARD', 'ISA'],
      ['BUILT', '2012'],
      ['GUESTS', '12 in 6 cabins'],
      ['PRICE', '€21,000,000'],
    ],
    hiddenClass: 'visually-hidden-descktop',
  },
];

function OurYachts() {
  return (
    <section className={styles.ourYachts} id="our-yachts">
      <div className={`container ${styles.ourYachtsContainer}`}>
        <h2 className={styles.sectionTitle}>Choose your dream yacht and sail away into the sunset</h2>
        <ul className={styles.list}>
          {yachtCards.map((yacht) => (
            <li className={`${styles.card} ${yacht.hiddenClass}`} key={yacht.name}>
              <img src={yacht.image} srcSet={`${yacht.image} 1x, ${yacht.image2x} 2x`} alt={yacht.alt} className={styles.image} />
              <div className={styles.cardHeader}>
                <p className={styles.cardName}>{yacht.name}</p>
                <span className={styles.cardCategory}>{yacht.category}</span>
              </div>
              <hr className={styles.divider} />
              <div className={styles.detailsBlock}>
                <ul className={styles.detailsList}>
                  {yacht.details.map(([label]) => (
                    <li className={styles.detail} key={label}>{label}</li>
                  ))}
                </ul>
                <ul className={styles.detailsValues}>
                  {yacht.details.map(([, value]) => (
                    <li className={styles.detailValue} key={value}>{value}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <a href="#rent-a-yacht" className={styles.ctaButton}>Yacht rental</a>
      </div>
    </section>
  );
}

export default OurYachts;

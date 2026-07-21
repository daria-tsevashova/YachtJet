import styles from './Reviews.module.css';

const reviewsCards = [
  {
    name: 'John Wax',
    image: '/img/reviews/john-wax.jpg',
    image2x: '/img/reviews/john-wax@2x.jpg',
    alt: 'John Wax',
    text: 'I rented the Lagoon 620 with my family for a week-long vacation and it was the best decision ever. The yacht was spacious, comfortable, and luxurious, and the crew took care of everything.',
  },
  {
    name: 'Victoria Romashenko',
    image: '/img/reviews/victoria-romashenko.jpg',
    image2x: '/img/reviews/victoria-romashenko@2x.jpg',
    alt: 'Victoria Romashenko',
    text: 'The Sunseeker Manhattan 66 was the perfect choice for our romantic getaway. The yacht was beautifully designed, with all the amenities we needed, and the crew was attentive and friendly.',
    hiddenClass: 'visually-hidden',
  },
  {
    name: 'Ihor Trachuk',
    image: '/img/reviews/ihor-trachuk.jpg',
    image2x: '/img/reviews/ihor-trachuk@2x.jpg',
    alt: 'Ihor Trachuk',
    text: 'The Azimut 80 was the most luxurious yacht I\'ve ever been on. The cabins were spacious and elegant, and the outdoor areas were perfect for relaxing and entertaining. Worth every penny!',
    hiddenClass: 'visually-hidden',
  },
];

function Reviews() {
  return (
    <section className={styles.reviews} id="reviews">
      <div className="container">
        <h2 className={styles.title}>YachtJet take pride in providing the best possible service and experience to our customers</h2>
        <p className={styles.subtitle}>Our customers have enjoyed unforgettable moments on our yachts. Don't just take our word for it – read on to find out what they have to say about their journey with us.</p>

        <ul className={styles.list}>
          {reviewsCards.map((review) => (
            <li className={`${styles.card} ${review.hiddenClass || ''}`} key={review.name}>
              <img src={review.image} srcSet={`${review.image} 1x, ${review.image2x} 2x`} alt={review.alt} width="56" height="56" className={styles.avatar} />
              <h3 className={styles.name}>{review.name}</h3>
              <p className={styles.text}>{review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Reviews;

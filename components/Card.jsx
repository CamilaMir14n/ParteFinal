// src/components/Card.jsx
import styles from './Card.module.css';

export default function Card({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Saiba mais
        </a>
      )}
    </div>
  );
}

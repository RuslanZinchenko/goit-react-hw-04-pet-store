import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pet.module.css';

const Pet = ({
  name,
  age,
  breed,
  gender,
  color,
  image,
  description,
  onGoback,
}) => (
  <article className={styles.petsArticle}>
    <div className={styles.returnArrow}>
      <button className={styles.return} type="button" onClick={onGoback}>
        <i className="material-icons">reply</i>
        Return
      </button>
    </div>
    <h2 className={styles.petsName}>All about {name}</h2>

    <img className={styles.float} src={image} alt={name} />

    <p className={styles.petInfo}>
      <b>Age:</b> {age}
    </p>
    <p className={styles.petInfo}>
      <b>Breed:</b> {breed}
    </p>
    <p className={styles.petInfo}>
      <b>Gender:</b> {gender}
    </p>
    <p className={styles.petInfo}>
      <b>Color:</b> {color}
    </p>
    <p className={styles.description}>{description}</p>
  </article>
);

Pet.defaultProps = {
  name: 'name',
  age: 'age',
  breed: 'breed',
  gender: 'gender',
  color: 'color',
  image: 'image',
  description: 'description',
};

Pet.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  breed: PropTypes.string,
  gender: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  onGoback: PropTypes.func.isRequired,
};

export default Pet;

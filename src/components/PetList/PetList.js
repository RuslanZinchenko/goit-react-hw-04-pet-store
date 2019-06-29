import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './PetList.module.css';

const PetList = ({ items = [], match, location }) => (
  <ul className={styles.petIconList}>
    {items.map(item => (
      <li key={item.id} className={styles.petIcon}>
        <img src={item.image} alt={item.name} className={styles.imgContainer} />
        <Link
          to={{
            pathname: `${match.path}/${item.id}`,
            state: { from: location },
          }}
          className={styles.link}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

PetList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  ).isRequired,
  match: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  location: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default withRouter(PetList);

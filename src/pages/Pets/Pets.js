import React, { Component } from 'react';
import PetList from '../../components/PetList/PetList';
import Pets from '../../server/db.json';
import styles from './Pets.module.css';

export default class PetsPage extends Component {
  state = { items: Pets };

  render() {
    const { items } = this.state;

    return (
      <div className={styles.petsListContainer}>
        <h1 className={styles.petsList}>Available pets</h1>
        <PetList items={items} />
      </div>
    );
  }
}

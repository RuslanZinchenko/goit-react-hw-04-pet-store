import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from '../../components/Pet/Pet';
import Pets from '../../server/db.json';

const getIdFromProps = props => props.match.params.id;

const findById = (allPets, id) => allPets.find(pet => pet.id === id);

export default class PetPage extends Component {
  static propTypes = {
    history: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
    location: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
  };

  state = { article: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const article = findById(Pets, id);
    this.setState({ article });
  }

  handleGoback = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push('/articles');
  };

  render() {
    const { article } = this.state;

    return (
      <div>{article && <Pet {...article} onGoback={this.handleGoback} />}</div>
    );
  }
}

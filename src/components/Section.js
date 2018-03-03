import React from 'react';
import PropTypes from 'prop-types';

import { mapWithIndex } from '../helpers';
import { Item, ItemShape } from './Item';

import './styles/Section.css';

const renderItem = (item, key) => <Item {...item} key={key} />;

const Section = ({ heading, items }) => (
  <div className="c-section">
    <h2 className="c-section--heading">{ heading }</h2>
    { mapWithIndex(renderItem, items) }
  </div>
);

const SectionShape = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ItemShape).isRequired
};

Section.propTypes = PropTypes.shape(SectionShape);

export { Section, SectionShape };

import React from 'react';
import PropTypes from 'prop-types';

import { mapWithIndex } from '../helpers';
import { Item, ItemShape } from './Item';

import './styles/Section.css';

const renderItem = (item, key) => <Item {...item} key={key} />;

const renderSubsection = ({ subheading, items }, key) => (
  <div className="c-subsection" key={key}>
    <h3 className="c-subsection--heading">{ subheading }</h3>
    { mapWithIndex(renderItem, items) }
  </div>
);

const Section = ({ heading, subsections, items }) => (
  <div className="c-section">
    <h2 className="c-section--heading">{ heading }</h2>
    { subsections ? mapWithIndex(renderSubsection, subsections) : mapWithIndex(renderItem, items) }
  </div>
);

const SectionShape = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ItemShape).isRequired
};

Section.propTypes = PropTypes.shape(SectionShape);

export { Section, SectionShape };

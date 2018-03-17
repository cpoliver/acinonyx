import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, length, map, pipe, prop, reduce, sum } from 'ramda';

import { mapWithIndex } from '../helpers';
import { Item, ItemShape } from './Item';

import './styles/Section.css';

const calculateSpan = ({ heading, items, subsections = [] }) => {
  let _return;
  if (isEmpty(subsections)) {
    _return = items.length + 1;
  } else {
    const countItems = pipe(prop('items'), length);
    const summer = pipe(map, sum)

    _return = subsections.length + 1 + summer(countItems, subsections)
  }

  return _return;
};

const renderItem = (item, key) => <Item {...item} key={key} />;

const renderSubsection = ({ subheading, items }, key) => (
  <div className="c-subsection" key={key}>
    <h3 className="c-subsection__heading">{ subheading }</h3>
    { mapWithIndex(renderItem, items) }
  </div>
);

const Section = ({ heading, subsections, items, span = 10 }) => (
  <div className="c-section" style={{ gridRow: `span ${calculateSpan({ heading, items, subsections })}` }}>
    <h2 className="c-section__heading">{ heading }</h2>
    { subsections ? mapWithIndex(renderSubsection, subsections) : mapWithIndex(renderItem, items) }
  </div>
);

const SectionShape = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ItemShape).isRequired
};

Section.propTypes = PropTypes.shape(SectionShape);

export { Section, SectionShape };

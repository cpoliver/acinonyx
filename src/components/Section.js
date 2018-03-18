import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, reduce } from 'ramda';

import { mapWithIndex } from '../helpers';
import { Item, ItemShape } from './Item';

import './styles/Section.css';

const calculateSpan = ({ heading, items, subsections = [] }) => {
  const countItems = (acc, cur) => acc + cur.items.length;

  return isEmpty(subsections) ?
    items.length + 1 :
    subsections.length + reduce(countItems, 0, subsections);
};

const renderItem = (item, key) => <Item {...item} key={key} />;

const renderSubsection = ({ subheading, items }, key) => (
  <div className="c-subsection" key={key}>
    <h3 className="c-subsection__heading">{ subheading }</h3>
    { mapWithIndex(renderItem, items) }
  </div>
);

const Section = ({ heading, subsections, items }) => (
  <div className="c-section" style={{ gridRow: `span ${calculateSpan({ heading, items, subsections })}` }}>
    <h2 className="c-section__heading">{ heading }</h2>
    { subsections ? mapWithIndex(renderSubsection, subsections) : mapWithIndex(renderItem, items) }
  </div>
);

const SubsectionShape = {
  subheading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(ItemShape))
};

const SectionShape = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(ItemShape)),
  subsection: PropTypes.arrayOf(SubsectionShape)
};

Section.propTypes = SectionShape;

export { Section, SectionShape };

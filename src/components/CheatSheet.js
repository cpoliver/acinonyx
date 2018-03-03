import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';

import { Section } from './';

const renderSection = (section, key) => <Section { ...section } key={key} />;

const CheatSheet = ({ title, sections }) => (
  <div className="c-cheat-sheet">
    <h1>{ title }</h1>
    { map(renderSection, sections) }
  </div>
);

CheatSheet.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string.isRequired,
    items: PropTypes.array
  }))
};

export { CheatSheet };

import React from 'react';
import PropTypes from 'prop-types';

import { mapWithIndex } from '../helpers';
import { Section, SectionShape } from './Section';

import './styles/CheatSheet.css';

const renderSection = (section, key) => <Section { ...section } key={key} />;

const CheatSheet = ({ title, sections }) => (
  <div className="c-cheat-sheet">
    <h1 className="c-cheat-sheet--title">{ title }</h1>
    <div className="c-cheat-sheet--contents">
      { mapWithIndex(renderSection, sections) }
    </div>
  </div>
);

const CheatSheetShape = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(SectionShape).isRequired
};

CheatSheet.propTypes = PropTypes.shape(CheatSheetShape);

export { CheatSheet, CheatSheetShape };

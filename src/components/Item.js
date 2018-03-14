import React from 'react';
import PropTypes from 'prop-types';
import { replace } from 'ramda';

import { mapWithIndex } from '../helpers';

import './styles/Item.css';

const formatCode = replace(/code/g, 'pre');

const renderPre = (item, key) => <pre key={key}>{ item }</pre>;

const Item = ({ modifiers = [], commands, description }) => (
  <div className="c-item">
    <div className="c-item--keys">
      <div className="c-item--modifiers">{ mapWithIndex(renderPre, modifiers) }</div>
      <div className="c-item--command">{ mapWithIndex(renderPre, commands) }</div>
    </div>
    <div className="c-item--description" dangerouslySetInnerHTML={{ __html: formatCode(description) }}></div>
  </div>
);

const ItemShape = {
  command: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

Item.propTypes = PropTypes.shape(ItemShape);

export { Item, ItemShape };

import React from 'react';
import PropTypes from 'prop-types';
import { replace } from 'ramda';

import { mapWithIndex } from '../helpers';

import './styles/Item.css';

const formatCode = replace(/code/g, 'pre');

const renderCommand = (command, key) => <pre key={key}>{ command }</pre>

const Item = ({ commands, description }) => (
  <div className="c-item">
    <div className="c-item--command">{ mapWithIndex(renderCommand, commands) }</div>
    <div className="c-item--description" dangerouslySetInnerHTML={{ __html: formatCode(description) }}></div>
  </div>
);

const ItemShape = {
  command: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

Item.propTypes = PropTypes.shape(ItemShape);

export { Item, ItemShape };

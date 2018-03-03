import React from 'react';
import PropTypes from 'prop-types';
import { replace } from 'ramda';

import './styles/Item.css';

const formatCode = replace(/kbd|code/g, 'pre');

const Item = ({ command, description }) => (
  <div className="c-item">
    <div className="c-item--command" dangerouslySetInnerHTML={{ __html: formatCode(command) }}></div>
    <div className="c-item--description" dangerouslySetInnerHTML={{ __html: formatCode(description) }}></div>
  </div>
);

const ItemShape = {
  command: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

Item.propTypes = PropTypes.shape(ItemShape);

export { Item, ItemShape };

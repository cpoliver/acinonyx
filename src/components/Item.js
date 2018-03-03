import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ command, description }) => (
  <div className="c-item">
    <pre className="c-item--command">{ command }</pre>
    <p className="c-item--description">{ description }</p>
  </div>
);

const ItemShape = {
  command: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

Item.propTypes = PropTypes.shape(ItemShape);

export { Item, ItemShape };

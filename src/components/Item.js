import React from 'react';
import PropTypes from 'prop-types';
import { pipe, replace } from 'ramda';

import { mapWithIndex } from '../helpers';

import './styles/Item.css';

const parseItalics = replace(/\{(.+?)\}/g, '<span class="u-direction">$1</span>');
const parsePre = replace(/`(.+?)`/g, '<span class="u-code">$1</span>');

const formatCode = pipe(parseItalics, parsePre);

const renderPre = className => (item, key) => (
  <div className={className}>
    <pre key={key}>{ item }</pre>
  </div>
);

const renderModifier = renderPre('c-item__modifier');
const renderCommand = renderPre('c-item__command');

const Item = ({ modifiers = [], commands, description }) => (
  <div className="c-item">
    <div className="c-item__description">
      <span dangerouslySetInnerHTML={{ __html: formatCode(description) }}></span>
    </div>
    <div className="c-item__keys">
      <div className="c-item__modifiers">{ mapWithIndex(renderModifier, modifiers) }</div>
      <div className="c-item__commands">{ mapWithIndex(renderCommand, commands) }</div>
    </div>
  </div>
);

const ItemShape = {
  commands: PropTypes.arrayOf(PropTypes.string).isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  hint: PropTypes.string,
  description: PropTypes.string.isRequired
};

Item.propTypes = ItemShape;

export { Item, ItemShape };

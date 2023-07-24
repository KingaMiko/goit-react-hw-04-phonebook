import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFilter,
  StyledLabelFilter,
  StyledFilterInput,
} from './StyledFilter';

const Filter = ({ value, onChange }) => (
  <StyledFilter>
    <StyledLabelFilter>
      Filter
      <StyledFilterInput type="name" value={value} onChange={onChange} />
    </StyledLabelFilter>
  </StyledFilter>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;

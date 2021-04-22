import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

const Select = (props) => {
  const { data, handleChange } = props
  const storeOptions = data && data.map(d => (
    {
      key: d.RestaurantId,
      text: d.RestaurantName,
      value: d.RestaurantNumber,
    }
  ))
  return (
    <Dropdown
      placeholder='Select Store'
      onChange={handleChange}
      fluid
      search
      selection
      options={storeOptions}
    />
  );
};

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleChange: PropTypes.func.isRequired,
}
export default Select;
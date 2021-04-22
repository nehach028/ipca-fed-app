import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { getProductsPerCategory } from './endPoints'
import { Table } from 'semantic-ui-react'
import TableRow from './TableRow';

const CategoryTable = (props) => {

  const { category, restaurantNum } = props
  const [isCategoryOne, setIsCategoryOne] = useState(category.value === 'Category1')
  const [productData, setProductData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    setIsCategoryOne(category.value === 'Category1')
    fetch(`${getProductsPerCategory}/${restaurantNum.value}/${category.value}`)
    .then((response) => response.json())
    .then((data) => setProductData(data))
    .catch((error) => {
      console.log("An error has occurred while fetching response", error)
      setError(error)
    })
  }, [category, restaurantNum])

  const { Headers, productViewModels } = productData
  const renderHeader = Headers && Headers.map(header => <Table.HeaderCell key={header}>{header}</Table.HeaderCell>)
  const showTableData = productData && productData.Headers && productData.productViewModels && productData.Headers.length > 0 && productData.productViewModels.length > 0
  const text = error.length > 0 ? error : 'No Data available for selected store'
  const renderTable = (
    <Table celled padded>
      <Table.Header color="black">
        <Table.Row>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          {renderHeader}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <TableRow productViewModels={productViewModels} isCategoryOne={isCategoryOne} />
      </Table.Body>
    </Table>
  )
  return showTableData ? renderTable : text
};

CategoryTable.propTypes = {
  category: PropTypes.shape({}).isRequired,
  restaurantNum: PropTypes.shape({}).isRequired
}
export default CategoryTable;
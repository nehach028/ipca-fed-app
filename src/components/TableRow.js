import React from 'react'
import PropTypes from 'prop-types'
import { Input, Table } from 'semantic-ui-react'

const TableRow = (props) => {
  const { productViewModels, isCategoryOne } = props
  const renderList = productViewModels && productViewModels.map((p) => {
    return (
      <Table.Row key={p.Name} >
        <Table.Cell>
          <strong>{p.Name}</strong>
        </Table.Cell>
        { isCategoryOne ? (
          <>
            <Table.Cell>
              <Input type="text" defaultValue={p.SixInchPrice} />
            </Table.Cell>
            <Table.Cell>
              <Input type="text" defaultValue={p.FootLongPrice} />
            </Table.Cell>
          </>
        ) :
          (
            <Table.Cell>
              <Input type="text" defaultValue={p.StandardPrice} />
            </Table.Cell>
          )
        }
      </Table.Row>
    )
  })
  return (
    renderList || ''
  )
}
TableRow.propTypes = {
  productViewModels: PropTypes.arrayOf(PropTypes.shape({})),
  isCategoryOne: PropTypes.bool.isRequired
}
TableRow.defaultProps = {
  productViewModels: []
}
export default TableRow
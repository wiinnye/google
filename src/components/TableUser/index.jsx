// import { TableCell, TableRow } from '@mui/material'

import './table.css'
import {
  Table,
  Thead,
  Tr,
  Td,
  TableContainer,Button
} from '@chakra-ui/react'

import { Outlet, Link, useNavigate } from 'react-router-dom'

export const TableUser = ({ valor, addValor }) => {
  const navigate = useNavigate()

  return (
    <div className='tabela'>
      <TableContainer 
     
        >
        <Table size='sm'>
          < Thead >
            <Tr>
              <Td>
                <Link to='invoices' ></Link>
                <Button onClick={() => navigate(`/invoices/${valor}`)} >
                  {valor}
                </Button>
              </Td>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
      <Outlet />
    </div>

  )
} 
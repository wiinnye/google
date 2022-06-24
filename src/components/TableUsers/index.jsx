import * as React from 'react';
import { TableUser } from '../TableUser';

import {
  Table,
  Tbody,
  TableContainer,
} from '@chakra-ui/react'

import './tableUsers.css'

export const TableUsers = ({ list }) => {

  return (
      <div className='tableContainer'>
        <TableContainer >
          <Table >
            <Tbody>
              {list.map((user, index) => (
                <TableUser key={index} valor={user.valor} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
  );
}

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import Paper from '@mui/material/Paper';

// export const TableUsers = ( {list}) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ width: 250 }} size="full" aria-label="a dense table">
//         <TableBody>
//           {list.map((user, index) => (
//             <TableUser key={index} valor={user.valor} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


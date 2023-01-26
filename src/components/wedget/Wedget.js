import {Fragment} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Wedget({usd,eur,currencyOne,currencyTwo}) {

  return (
       <Fragment>
      <TableContainer  sx={{minWidth: 350 ,maxWidth:400  ,margin:5}} component={Paper}>
      <Table sx={{ minWidth: 350 ,maxWidth:400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{currencyOne}</TableCell>
            <TableCell align="right">{currencyTwo} </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{usd}
              </TableCell>
              <TableCell align="right">{eur}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Fragment>
  )
}

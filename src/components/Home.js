import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'

const Home = (props) => {

  return (
    <TableContainer className = "table"component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Hours</TableCell>
            <TableCell >Address</TableCell>
            {props.loggedIn && <TableCell >Delete</TableCell> }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.business.map((business,idx) => (
            <TableRow
              key={business.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link to={`/business/${business.id}`}>{business.name}</Link>
              </TableCell>
              <TableCell >{business.description}</TableCell>
              <TableCell >{business.hours}</TableCell>
              <TableCell >{business.address}</TableCell>
              {props.loggedIn && <TableCell ><DeleteIcon sx={{color: 'red'}} onClick={(idx) => {props.deleteBusiness(idx)}}/></TableCell> }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );

 
}

export default Home
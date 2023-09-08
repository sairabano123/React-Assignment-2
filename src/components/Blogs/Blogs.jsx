import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container } from 'react-bootstrap';
import { blueGrey, pink } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ViewBlog from './CRUD/ViewBlog';
import { useState } from 'react';
import EditBlog from './CRUD/EditBlog';
import NewBlog from './CRUD/NewBlog';

function createData(
  id,
  title,
  subtitle,
  author,
) {
  return { id, title, subtitle, author };
}

const oldRows = [
  createData(1, "Crypto Exchange Kraken’s Canada Customer Deposits Rose 25% After Binance Announced Departure", "Kraken also saw a fivefold increase", "Coin Desk"),
  createData(2, "Inflation, Fed policy back in focus for crypto investors as bitcoin enters summer doldrums", "Cryptocurrencies are preparing for the lazy, hazy days.", "CNBC"),
  createData(3, "Bitcoin Miners Gain Support From Texas With Two Bills Passed, One Halted", "Two bills by governor", "Coin Desk"),
  createData(4, "‘It’s A Big Deal’—Crypto Suddenly Braced For A Huge China Earthquake After Bitcoin, Ethereum, BNB, XRP, Cardano, Dogecoin, Polygon And Solana Price Swings", "Crypto exchange Binance", "Forbes"),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: blueGrey[800],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Blogs() {
  const [rows, setRows] = useState(oldRows);

  const [blogInfo, setBlogInfo] = useState({});
  const [viewBlogShow, setViewBlogShow] = useState(false);
  const [editBlogShow, setEditBlogShow] = useState(false);
  const [newBlogShow, setNewBlogShow] = useState(false);

  const editRow = (rowInfo) => {
    setEditBlogShow(false);
    setRows(prevRows =>
      prevRows.map(row =>
        (row.id === rowInfo.id) ? rowInfo : row
      )
    )
  }

  const addRow = (rowInfo) => {
    setNewBlogShow(false);
    setRows(prevRows =>
      [...prevRows, { ...rowInfo, id: (prevRows.length + 1) }]
    )
  }


  const deleteRow = (rowInfo) => {
    setRows(prevRows =>
      prevRows.filter(row => row.id !== rowInfo.id)
    )
  }


  return (
    <Container >
      <TableContainer className='mt-4' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Blog Id</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="left">Subtitle</StyledTableCell>
              <StyledTableCell align="left">Author</StyledTableCell>
              <StyledTableCell align="center">Action
                <AddIcon className='ms-5' style={{ marginRight: "-3rem" }} onClick={() => { setNewBlogShow(true); }} />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">
                  {row.id}
                </TableCell>
                <TableCell style={{maxWidth:"450px"}} align="left">{row.title}</TableCell>
                <TableCell style={{ maxWidth: "100px" }} align="left">{row.subtitle}</TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="center">
                  <VisibilityIcon color="primary" className='mx-1'
                    onClick={() => { setBlogInfo(row); setViewBlogShow(true); }} />
                  <EditIcon className='mx-1'
                    onClick={() => { setBlogInfo(row); setEditBlogShow(true); }} />
                  <DeleteForeverIcon sx={{ color: pink[500] }} className='mx-1' onClick={() => { deleteRow(row); }} />

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ViewBlog show={viewBlogShow} hide={() => setViewBlogShow(false)} blogInfo={blogInfo} />
      <EditBlog show={editBlogShow} hide={() => setEditBlogShow(false)} blogInfo={blogInfo}
        editRow={editRow} />
      <NewBlog show={newBlogShow} hide={() => setNewBlogShow(false)} addRow={addRow} />
    </Container>
  );
}

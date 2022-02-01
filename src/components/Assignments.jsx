import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function BasicTable() {
  const assesents = [
    { id: 1, title: "React Project", status: "TO-DO" },
    { id: 2, title: "React Website", status: "PENDING" },
  ];
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Trash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assesents.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Name
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">Button</TableCell>
                <TableCell align="right">Button</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

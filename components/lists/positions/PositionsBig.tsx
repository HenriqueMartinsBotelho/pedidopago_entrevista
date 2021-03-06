import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Avatar } from "./styled_components";
import Click from "./Click";

const columns = [
  // { id: "image", label: "" },
  { id: "name", label: "Cargo", minWidth: 170 },
  { id: "departament", label: "Departamento", minWidth: 100 },
  {
    id: "agents_quantity",
    label: "Colaboradores",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString("en-US"),
  },
];

// function createData(name, department, role, branch, status) {
//   return { name, department, role, branch, status };
// }

// const rows = [ {
//     "Godzila da Silva",
//     "Administrativo",
//     "Diretor",
//     "Quartel General",
//     "Ativo"
//  }
// ];

export default function PositionsBigTable({ rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const [rows, setRows] = React.useState<any[]>([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // useEffect(() => {
  //   fetch("https://pp-api-desafio.herokuapp.com/agents")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRows(data.items);
  //     });
  // }, []);

  // {
  //   colaborators.map((colaborator) => (
  //     <div key={colaborator.agent_id}>{colaborator.name}</div>
  //   ));
  // }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440, overflow: "hidden" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    border: "1px solid #CAD6D1",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      let value = row[column.id];

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

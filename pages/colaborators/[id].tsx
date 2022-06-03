import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Card, Cards, Title, Details } from "./styled_components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ColaboratorDetails = () => {
  const router = useRouter();

  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [branch, setBranch] = useState("");
  const [colaborator, setColaborator] = useState<any[]>([]);

  const handleDepartment = (event: SelectChangeEvent) => {
    setDepartment(event.target.value as string);
  };
  const handleRole = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };
  const handleBranch = (event: SelectChangeEvent) => {
    setBranch(event.target.value as string);
  };

  const handleStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  useEffect(() => {
    fetch(`https://pp-api-desafio.herokuapp.com/agent/${router.query.id}`)
      .then((res) => res.json())
      .then((data) => {
        setColaborator(data.agent);
        setDepartment(data.agent?.department);
        setRole(data.agent?.role);
        setBranch(data.agent?.branch);
        setStatus(data.agent?.status);
        console.log("ffff", department);
      });
  }, [router.query.id]);

  return (
    <Box style={{ maxWidth: "956px", margin: "auto" }}>
      <Details>Detalhes do colaborador</Details>
      <Box
        style={{
          boxShadow: "0px 4px 8px rgba(165, 171, 179, 0.16)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          padding: "40px 24px",
          gap: "40px",
        }}
      >
        <Title>
          <Box>
            <img
              style={{ borderRadius: "50%" }}
              src="https://picsum.photos/40/40"
              alt=""
            />
          </Box>
          <Box>
            <div>{colaborator.name}</div>
            <div>{colaborator.email}</div>
          </Box>
        </Title>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Box>Informações pessoais</Box>
          <Cards>
            <Card>
              <Box>
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://picsum.photos/40/40"
                  alt=""
                />
              </Box>
              <Box>
                <div>{colaborator.document?.type}</div>
                <div>{colaborator.document?.number}</div>
              </Box>
            </Card>
            <Card>
              <Box>
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://picsum.photos/40/40"
                  alt=""
                />
              </Box>
              <Box>
                <div>Telefone</div>
                <div>
                  {colaborator.phone?.ddd}&nbsp;{colaborator?.phone?.number}
                </div>
              </Box>
            </Card>
            <Card>
              <Box>
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://picsum.photos/40/40"
                  alt=""
                />
              </Box>
              <Box>
                <div>Nascimento</div>
                <div>{colaborator?.birth_date}</div>
              </Box>
            </Card>
          </Cards>
        </Box>
        <Box
          style={{
            boxShadow: "0px 4px 8px rgba(165, 171, 179, 0.16)",
            borderRadius: "8px",
            padding: "40px 24px",
            gap: "40px",
          }}
        >
          <Box style={{ marginBottom: "10px" }}>Dados Organizacionais</Box>
          <Box
            style={{
              display: "flex",
              gap: "30px",
            }}
          >
            <Box style={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-label">
                Departamento
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={department}
                label="Departamento"
                onChange={handleDepartment}
                fullWidth
                defaultValue=""
              >
                <MenuItem value={department}>{department}</MenuItem>
                <MenuItem value={"Colaborador"}>Colaborador</MenuItem>
              </Select>
            </Box>
            <Box style={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Cargo"
                onChange={handleRole}
                defaultValue=""
                fullWidth
              >
                <MenuItem value={"Diretor"}>Diretor</MenuItem>
                <MenuItem value={"Administrativo"}>Administrativo</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "30px",
            }}
          >
            <Box style={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-label">Unidade</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={branch}
                label="Unidade"
                onChange={handleBranch}
                fullWidth
                defaultValue=""
              >
                <MenuItem value={branch}>{branch}</MenuItem>
                <MenuItem value={""}>Outra</MenuItem>
              </Select>
            </Box>
            <Box style={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleStatus}
                fullWidth
                defaultValue="active"
              >
                <MenuItem value={"active"}>Ativo</MenuItem>
                <MenuItem value={"inactive"}>Inativo</MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ColaboratorDetails;

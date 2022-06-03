import React, { useState, useEffect } from "react";
import BigScreenTable from "../../components/table/colaborators/BigScreenTable";
import { SmallScreenTable } from "../../components/table/colaborators/SmallScreenTable";
import { theme } from "./../../styles/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material/";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { RiSearch2Line } from "react-icons/ri";
import axios from "axios";
import PositionsBigTable from "../../components/table/positions/PositionsBigTable";
import PositionsSmallTable from "../../components/table/positions/PositionsSmallTable";

const Home = () => {
  const [query, setQuery] = React.useState("");

  const [colaborators, setColaborators] = useState<any[]>([]);
  const [filtered_colaborators, setFilteredColaborators] = useState<any[]>([]);

  const [positions, setPositions] = useState<any[]>([]);
  const [filtered_positions, setFilteredPositions] = useState<any[]>([]);

  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // trocar pelo getserversideprops
  useEffect(() => {
    fetch("https://pp-api-desafio.herokuapp.com/agents")
      .then((res) => res.json())
      .then((data) => {
        setColaborators(data.items);
        setFilteredColaborators(data.items);
      });
    fetch("https://pp-api-desafio.herokuapp.com/roles")
      .then((res) => res.json())
      .then((data) => {
        setPositions(data.roles);
        setFilteredPositions(data.roles);
        console.log(data.roles);
      });
  }, []);

  // fazer pesquisa por cpf também
  const searchUser = (query: string) => {
    const result = colaborators.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    setFilteredColaborators(result);
  };

  const searchPosition = (query: string) => {
    const result = positions.filter((position) =>
      position.name.toLowerCase().includes(query)
    );
    setFilteredPositions(result);
    console.log("d", result);
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <div>
          <Box style={{ fontWeight: 600, fontSize: "32px" }}>Organização</Box>
          <Box
            style={{
              boxShadow: "0px 4px 8px rgba(165, 171, 179, 0.16)",
              borderRadius: "8px",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  aria-label="Tabs example"
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab
                    label={
                      <span style={{ textTransform: "capitalize" }}>
                        Colaboradores
                      </span>
                    }
                    value="1"
                  />
                  <Tab
                    label={
                      <span style={{ textTransform: "capitalize" }}>
                        Cargos
                      </span>
                    }
                    value="2"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box
                  style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <TextField
                    label="Pesquisar por"
                    // defaultValue=""
                    placeholder="Pesquise por nome ou cpf"
                    fullWidth
                    id="outlined-start-adornment"
                    onChange={(e) => searchUser(e.target.value)}
                    // sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <RiSearch2Line />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Box
                    style={{
                      fontWeight: 600,
                      color: "#34423D",
                      fontSize: "16px",
                    }}
                  >
                    Listagem de Colaboradores
                  </Box>
                  {isSmallScreen ? (
                    <BigScreenTable rows={filtered_colaborators} />
                  ) : (
                    <SmallScreenTable rows={filtered_colaborators} />
                  )}
                </Box>
              </TabPanel>
              <TabPanel value="2">
                <Box
                  style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <TextField
                    label="Pesquisar por"
                    // defaultValue=""
                    placeholder="Pesquise por cargos"
                    fullWidth
                    id="outlined-start-adornment"
                    onChange={(e) => searchPosition(e.target.value)}
                    // sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <RiSearch2Line />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Box
                    style={{
                      fontWeight: 600,
                      color: "#34423D",
                      fontSize: "16px",
                    }}
                  >
                    Listagem de Cargos
                  </Box>
                  {isSmallScreen ? (
                    <PositionsBigTable rows={filtered_positions} />
                  ) : (
                    <PositionsSmallTable rows={filtered_positions} />
                  )}
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </div>

        {/* 
      <div>
        {colaborators.map((colaborator) => (
          <div key={colaborator.agent_id}>{colaborator.name}</div>
        ))}
      </div> */}
      </div>
    </>
  );
};

export default Home;

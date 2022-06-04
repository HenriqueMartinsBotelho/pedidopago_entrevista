import React, { useState, useEffect } from "react";
import ColaboratorsBig from "../../components/lists/colaborators/ColaboratorsBig";
import { ColaboratorsSmall } from "../../components/lists/colaborators/ColaboratorsSmall";
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
import PositionsBig from "../../components/lists/positions/PositionsBig";
import PositionsSmall from "../../components/lists/positions/PositionsSmall";

const Home = () => {
  const [query, setQuery] = React.useState("");

  const [colaborators, setColaborators] = useState<any[]>([]);
  const [filtered_colaborators, setFilteredColaborators] = useState<any[]>([]);

  const [positions, setPositions] = useState<any[]>([]);
  const [filtered_positions, setFilteredPositions] = useState<any[]>([]);

  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Box
            style={{
              fontWeight: 600,
              fontSize: "32px",
              color: "#34423D",
              lineHeight: "100%",
              marginBottom: "24px",
              marginTop: "10px",
            }}
          >
            Organização
          </Box>
          <Box
            style={{
              boxShadow: "0px 4px 8px rgba(165, 171, 179, 0.16)",
              borderRadius: "8px",
              background: "white",
              padding: "40px 24px",
              width: "60vw",
              minWidth: "300px",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  aria-label="Tabs example"
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#22E0A1",
                    },
                  }}
                >
                  <Tab
                    label={
                      <span
                        style={{
                          textTransform: "capitalize",
                          color: "#34423D",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "100%",
                        }}
                      >
                        Colaboradores
                      </span>
                    }
                    value="1"
                  />
                  <Tab
                    label={
                      <span
                        style={{
                          textTransform: "capitalize",
                          color: "#A3B8B0",
                          fontSize: "14px",
                          fontWeight: "bold",
                          lineHeight: "100%",
                        }}
                      >
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
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <TextField
                    label={
                      <span
                        style={{
                          color: "#A3B8B0",
                          fontWeight: "500",
                          background: "white",
                        }}
                      >
                        &nbsp;&nbsp;Pesquisar por&nbsp;&nbsp;
                      </span>
                    }
                    // defaultValue=""
                    placeholder="Pesquise por nome ou cpf"
                    fullWidth
                    id="outlined-start-adornment"
                    onChange={(e) => searchUser(e.target.value)}
                    // sx={{ m: 1, width: "25ch" }}
                    style={{ outline: "none" }}
                    sx={{
                      border: "2px solid #CAD6D1",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root.Mui-focused,  .MuiOutlinedInput-notchedOutline":
                        {
                          border: "none",
                          borderRadius: "8px",
                        },
                      "& .MuiOutlinedInput-root:hover,": {
                        "& > fieldset": {
                          border: "none",
                          borderRadius: "8px",
                        },
                      },
                    }}
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
                    <ColaboratorsBig rows={filtered_colaborators} />
                  ) : (
                    <ColaboratorsSmall rows={filtered_colaborators} />
                  )}
                </Box>
              </TabPanel>
              <TabPanel value="2">
                <Box
                  style={{
                    width: "100%",
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
                    <PositionsBig rows={filtered_positions} />
                  ) : (
                    <PositionsSmall rows={filtered_positions} />
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

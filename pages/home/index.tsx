import React, { useState, useEffect } from "react";
import BigScreenTable from "../../components/table/BigScreenTable";
import { SmallScreenTable } from "../../components/table/SmallScreenTable";
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
import ResponsiveDrawer from "../../components/drawer/ResponsiveDrawer";

const Home = () => {
  const [colaborators, setColaborators] = useState<any[]>([]);
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch("https://pp-api-desafio.herokuapp.com/agents")
      .then((res) => res.json())
      .then((data) => {
        setColaborators(data.items);
      });
  }, []);

  return (
    <ResponsiveDrawer>
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
                  <Tab label="Tab One" value="1" />
                  <Tab label="Tab Two" value="2" />
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
                    defaultValue="Pesquise por nome ou cpf"
                    fullWidth
                    id="outlined-start-adornment"
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
                  {isSmallScreen ? <BigScreenTable /> : <SmallScreenTable />}
                </Box>
              </TabPanel>
              <TabPanel value="2">Panel Two</TabPanel>
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
    </ResponsiveDrawer>
  );
};
export default Home;

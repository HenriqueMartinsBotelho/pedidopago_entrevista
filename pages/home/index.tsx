import React from "react";
import { GetServerSideProps } from "next";
import { theme } from "./../../styles/theme";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs from "../../components/tabs/Tabs";
import axios from "axios";

const Home = ({ colaborators, positions }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("xl"));

  const Container = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    margin: "auto",
  }));

  const Title = styled("div")(({ theme }) => ({
    color: theme.palette.primary.dark,
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "100%",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    width: "100%",
    textAlign: "left",
  }));

  const Main = styled("div")(({ theme }) => ({
    boxShadow: "0px 4px 8px rgba(165, 171, 179, 0.16)",
    borderRadius: "8px",
    padding: "40px 24px",
    width: "100%",
  }));

  return (
    <>
      <Container style={{ width: isSmallScreen ? "60vw" : "100%" }}>
        <Title>Organização</Title>
        <Main>
          <Tabs colaborators={colaborators} positions={positions} />
        </Main>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://pp-api-desafio.herokuapp.com/agents");
  const res2 = await axios.get("https://pp-api-desafio.herokuapp.com/roles");
  return {
    props: {
      colaborators: res.data.items,
      positions: res2.data.roles,
    },
  };
};

export default Home;

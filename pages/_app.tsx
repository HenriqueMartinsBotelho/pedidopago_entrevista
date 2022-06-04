import "../styles/globals.css";
// import "../styles/small.css"; // remover
// import "../styles/psmall.css"; // remover
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "./../styles/theme";
import ResponsiveDrawer from "../components/drawer/ResponsiveDrawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer>
        <Component {...pageProps} />
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default MyApp;

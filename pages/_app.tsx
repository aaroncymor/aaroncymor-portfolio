import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import ThemeProvider from "../context/theme";

// styles
import "../styles/index.css";
import "../styles/loader.css";
import "../styles/blob.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

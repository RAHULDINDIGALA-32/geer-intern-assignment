import "@/styles/globals.css";
import Head from "next/head";

import Layout from '../components/Layout'
import { SearchProvider } from "../context/SearchContext";

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <>
          <Head>
            <title>Geer - Diamond Jewellery</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component {...pageProps} />
        </>
      </Layout>
    </SearchProvider>
  )
}

export default MyApp
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  )
}

export default MyApp

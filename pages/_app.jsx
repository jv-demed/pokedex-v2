import Head from 'next/head';
import { imgs } from '../src/assets/imgs';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { Globals } from '../src/styles/Globals';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <link rel="icon" href={imgs.pokeball}  type="image/icon type" />
                <title>Pokédex</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Globals />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
import Head from "next/head";
import About from "../component/mobile/About/about";
import AboutDesktop from "../component/Desktop/about";


export default function Home() {
    return (
        <>
            <Head>
                <title>DIGITALWORKS</title>
                <meta name="description" content="Making Digital Transformation Work" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <About />
            <AboutDesktop />

        </>
    );
}

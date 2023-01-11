import Head from "next/head";
import MAGRABi from "../component/mobile/CaseStudy/magrabi";
import MAGRABiDesktop from "../component/Desktop/magrabi";


export default function Home() {
    return (
        <>
            <Head>
                <title>DIGITALWORKS</title>
                <meta name="description" content="Making Digital Transformation Work" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MAGRABi />
            <MAGRABiDesktop />

        </>
    );
}

import Head from "next/head";
import FenixOutDoor from "../component/mobile/CaseStudy/fenix-outdoor";
import FenixOutDoorDesk from "../component/Desktop/FenixOutDoor";


export default function Home() {
    return (
        <>
            <Head>
                <title>DIGITALWORKS</title>
                <meta name="description" content="Making Digital Transformation Work" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <FenixOutDoor />
            <FenixOutDoorDesk />

        </>
    );
}

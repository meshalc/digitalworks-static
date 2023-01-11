import Head from "next/head";
import MobileHome from "../component/mobile/Home/mobileHome";
import HomeMain from "../component/Desktop/Home";


export default function Home() {
  return (
    <>
      <Head>
        <title>DIGITALWORKS</title>
        <meta name="description" content="Making Digital Transformation Work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileHome />
      <HomeMain />

    </>
  );
}

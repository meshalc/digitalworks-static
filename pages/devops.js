import Head from "next/head";
import MobileCaseStudy from "../component/mobile/CaseStudy/devops";
import DevOps from "../component/Desktop/devops";


export default function Home() {
  return (
    <>
      <Head>
        <title>DIGITALWORKS</title>
        <meta name="description" content="Making Digital Transformation Work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileCaseStudy />
      <DevOps />

    </>
  );
}

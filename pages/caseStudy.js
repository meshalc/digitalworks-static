import Head from "next/head";
import MobileCaseStudy from "../component/mobile/CaseStudy/mobileCaseStudy";
import CaseStudy from "../component/Desktop/CaseStudy";
export default function Home() {
  return (
    <>
      <Head>
        <title>DIGITALWORKS</title>
        <meta name="description" content="Making Digital Transformation Work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileCaseStudy />
      <CaseStudy />
    </>
  );
}

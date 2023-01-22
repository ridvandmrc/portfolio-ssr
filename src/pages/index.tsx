import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "@/components";
import { ContentLayout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ridvan Demirci - Special Web Site</title>
        <meta name="description" content="Special Web Side of Ridvan Demirci" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <ContentLayout />
      </main>
    </>
  );
}

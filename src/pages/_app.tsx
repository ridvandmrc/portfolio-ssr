import { MainLayout } from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: any) {
  const getLayout = Component.pageLayout || ((page: any) => page);
  return getLayout(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

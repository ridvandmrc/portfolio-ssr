import { MainLayout } from "@/layout";
import "@/styles/globals.css";
import "@/styles/about.css";
import "@/styles/header.css";
import "@/styles/infoIndicator.css";
import "@/styles/contentLayout.css";
import "@/styles/mainLayout.css";

export default function App({ Component, pageProps }: any) {
  const getLayout = Component.pageLayout || ((page: any) => page);
  return getLayout(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

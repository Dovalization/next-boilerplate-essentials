import SEOConfig from "@/../next-seo.config";
import "@/styles/global.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        {...SEOConfig}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicon.ico",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

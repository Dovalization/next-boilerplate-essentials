import SEOConfig from "@/../next-seo.config";
import { GlobalStyle } from "@styles/global";
import theme from "@styles/theme";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        {...SEOConfig}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicon.ico",
          },
        ]}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

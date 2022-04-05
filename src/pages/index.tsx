import { HomeLayout } from "@/layout/Home";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
// Naming convention:
// - PageName: "MyPage"
// - PageNameProps: "MyPageProps"

// When declaring prop types, prefer to use `interface` over `type`

export interface HomeProps {
  title: string;
}

// As a rule of thumb, I recommend not exporting any layout/component as default,
// except for pages since Next.js requires it.
// For pages, use the NextPage type along with props types as a generic

const Home: NextPage<HomeProps> = ({ title }) => {
  return (
    <>
      <NextSeo title="Home" />
      <HomeLayout title={title} />;
    </>
  );
};

export default Home;

// For getStaticProps, use the GetStaticProps type along with prop types as a generic

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // This is a sample API call that is used for demonstration purposes
  // If you know the types of your API response, you can use that type here as a generic

  // const res = await api.get<HomeProps>("/hello");

  // Always try to return the default props name, even if you have changed it
  // This will result in cleaner code in your app

  // const title = res.data.title;

  return {
    props: {
      title: "Hello Next.js",
    },
  };
};

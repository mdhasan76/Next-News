import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";

const HomePage = (props) => {
  console.log(props.data);
  const { data, isLoading } = useGetNewsQuery("");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner></DynamicBanner>
      <AllNews allNews={data?.data} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  return { props: { data: data }, revalidate: 10 };
};

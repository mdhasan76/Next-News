import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";

const NewsDetailsPage = (props) => {
  const route = useRouter();
  console.log(route.pathname);
  console.log(props.data);
  return <div>This is news id</div>;
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();

  const paths = data.map((news) => ({
    params: { newsId: String(news.id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();
  return { props: { data } };
};

import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const NewsDetailsPage = ({ data }) => {
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <Image
              src={data?.image_url}
              width={500}
              height={400}
              responsive
              alt="News Image"
            ></Image>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1 style={{ fontSize: "30px" }}>{data?.title}</h1>
            <div
              className="line"
              style={{
                height: "5px",
                margin: "20px 0",
                background: "#000",
                width: "95%",
              }}
            ></div>

            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                color: "gray",
                margin: "10px 0px",
              }}
            >
              <span>
                <CalendarOutlined /> FEBRUARY 28, 2023
              </span>
              <span>
                <CommentOutlined /> NO COMMENTS
              </span>
              <span>
                <ProfileOutlined /> HOBBY
              </span>
            </p>

            <p style={{ fontSize: "20px" }}>
              Beauteous before up across felt sheepishly and more mournfully the
              wow so more flustered and one up pushed salamander collective
              blinked that iguanodon bid much some since hey far goodness jaguar
              whil...
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const data = await res.json();

//   const paths = data.map((news) => ({
//     params: { newsId: String(news.id) },
//   }));

//   return { paths, fallback: false };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();
  return { props: { data } };
};

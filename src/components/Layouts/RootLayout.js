import { Layout } from "antd";
const { Content } = Layout;
import HeaderSec from "../UI/HeaderSec";
import FooterSec from "../UI/FooterSec";

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <HeaderSec />

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <FooterSec />
    </Layout>
  );
};
export default RootLayout;

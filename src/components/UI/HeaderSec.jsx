import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const HeaderSec = () => {
  const { Header } = Layout;

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="brand-logo">
        <h1>
          <Link
            href="/"
            style={{
              color: "white",
              backgroundColor: "#404040",
              padding: "5px 10px",
              borderRadius: "3px",
            }}
          >
            PH_NEWS PORTAL
          </Link>
        </h1>
      </div>
      <Menu theme="dark" mode="vertical" className={styles.menu_items}>
        <Link href="/add-news">
          <items
            style={{
              margin: "0px 25px",
            }}
          >
            <AimOutlined />
            Add News
          </items>
        </Link>
        <Link href="/allNews">
          <items>
            <ProfileOutlined />
            All News
          </items>
        </Link>
        <Link href="/about">
          <items
            style={{
              margin: "0px 25px",
            }}
          >
            <UserOutlined />
            About Us
          </items>
        </Link>
        <Link href="/contact">
          <items>
            <MobileOutlined />
            Contact Us
          </items>
        </Link>
      </Menu>
    </Header>
  );
};

export default HeaderSec;

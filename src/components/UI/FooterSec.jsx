import {
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const FooterSec = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <div className={styles.line}></div>
      <h2
        style={{
          fontSize: "28px",
        }}
      >
        PH-NEWS PORTAL
      </h2>
      <p className={styles.social_icons}>
        <Link href="https://web.facebook.com/groups/programmingherocommunity">
          <FacebookFilled />
        </Link>
        <Link href="www.twitter.com">
          <TwitterSquareFilled />
        </Link>
        <Link href="https://web.programming-hero.com/home/">
          <GoogleSquareFilled />
        </Link>
        <Link href="www.linkedin.com">
          <LinkedinFilled />
        </Link>
      </p>
      News Portal ©2023 Created by Programming Hero
    </Footer>
  );
};

export default FooterSec;

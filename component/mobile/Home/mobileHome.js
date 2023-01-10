import styles from "../../../styles/Home.module.css";
import MobileAnim from "../Animation/mobileAnim";
import { useState } from "react";

export default function MobileHome() {
  const [toggle, setToggle] = useState(false);
  const openNav = () => {
    setToggle(true);
  };

  const close = () => {
    setToggle(false);
  };
  return (
    <>
      {toggle && (
        <div className={styles.mobMenu}>
          <div className={styles.CloseMobNavItem}>
            {" "}
            <button onClick={close}>
              <img src="close.svg"></img>
            </button>
          </div>
          <div className={styles.MobNavItem}>
            <a href="/" className={styles.mobActiveNav}>
              Home
            </a>
          </div>
          <div className={styles.MobNavItem}>
            <a href="/">About</a>
          </div>
          <div className={styles.MobNavItem}>
            <a href="/">Our Team</a>
          </div>
          <div className={styles.MobNavItem}>
            <a href="/caseStudy">Case Study</a>
          </div>
        </div>
      )}
      <div className={styles.Mobcontainer}>
        <div className={styles.Mobheader}>
          <div className={styles.mobLogo}>
            <a href="/">
              <img src="Logo.svg"></img>
            </a>
          </div>
          <div className={styles.mobHamburger}>
            <button onClick={openNav}>
              <img src="hamburger.svg"></img>
            </button>
          </div>
        </div>
        <div className={styles.mobAnim}>
          <MobileAnim />
        </div>
        <div className={styles.mobCaption}>
          <h1>
            Making Digital
            <br />
            Transformation Work
          </h1>
          <a href="tel:6031112298">GET IN TOUCH</a>
        </div>
        <div className={styles.mobSocial}>
          <div className={styles.mobSocialIcon}>
            <a href="https://twitter.com/ansar_abd">
              <img src="twitter.svg"></img>
            </a>
          </div>
          <div className={styles.mobSocialIcon}>
            <a href="https://www.linkedin.com/company/digitalworks-group/">
              <img src="linkedin.svg"></img>
            </a>
          </div>
        </div>
        <div className={styles.mobFooter}>
          <span>All rights reserved © Digitalworks.co</span>
        </div>
      </div>
    </>
  );
}

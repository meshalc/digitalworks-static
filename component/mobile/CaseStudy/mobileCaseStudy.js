import styles from "../../../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function MobileCaseStudy() {
  const [toggle, setToggle] = useState(false);
  const openNav = () => {
    setToggle(true);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"
  }, []);

  const close = () => {
    setToggle(false);
  };
  return (
    <>
      {toggle ? (
        <div className={styles.mobMenu}>
          <div className={styles.CloseMobNavItem}>
            {" "}
            <button onClick={close}>
              <img src="close.svg"></img>
            </button>
          </div>
          <div className={styles.MobNavItem}>
            <a href="/">Home</a>
          </div>
          <div className={styles.MobNavItem}>
            <a href="/about">About</a>
          </div>
          <div className={styles.MobNavItem}>
            <a href="/">Our Team</a>
          </div>
          <div className={styles.MobNavItem}>
            <a href="/caseStudy" className={styles.mobActiveNav}>
              Case Study
            </a>
          </div>
        </div>
      ) : (
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
          <div className={styles.mobCaseStudy}>
            <div className={styles.mobBanner}>
              <a href="/">
                <span>
                  Home / <span className={styles.mobHighLight}>Case Study</span>
                </span>
              </a>
              <h1>Case Study</h1>
            </div>
            <div className={styles.mobcaseStudyItemsContainer}>
              <div className={styles.mobcaseStudyItems}>
                <a href="devops">
                  <div className={styles.mobcaseStudyItem}>
                    {" "}
                    <div className={styles.caseStudyVector}>
                      <img src="Vector.svg"></img>
                    </div>
                    <div>DevOps</div>
                  </div>
                </a>
                <div className={styles.underline}></div>
                <a href="magrabi">
                  <div className={styles.mobcaseStudyItem}>
                    <div className={styles.caseStudyVector}>
                      <img src="Vector.svg"></img>
                    </div>
                    <div>MAGRABi</div>
                  </div>
                </a>
                <div className={styles.underline}></div>
                <a href="fenix-outdoor">
                  <div className={styles.mobcaseStudyItem}>
                    <div className={styles.caseStudyVector}>
                      <img src="Vector.svg"></img>
                    </div>
                    <div>Fenix Outdoor</div>
                  </div>
                </a>
              </div>
            </div>
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
      )}

    </>
  );
}

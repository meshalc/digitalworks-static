import styles from "../../../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

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
            <Link href="/">Home</Link>
          </div>
          <div className={styles.MobNavItem}>
            <Link href="/about">About us</Link>
          </div>
          <div className={styles.MobNavItem}>
            <Link href="/">Our Team</Link>
          </div>
          <div className={styles.MobNavItem}>
            <Link href="/caseStudy" className={styles.mobActiveNav}>
              Case Study
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.Mobcontainer}>
          <div className={styles.Mobheader}>
            <div className={styles.mobLogo}>
              <Link href="/">
                <img src="Logo.svg"></img>
              </Link>
            </div>
            <div className={styles.mobHamburger}>
              <button onClick={openNav}>
                <img src="hamburger.svg"></img>
              </button>
            </div>
          </div>
          <div className={styles.mobCaseStudy}>
            <div className={styles.mobBanner}>
              <Link href="/">
                <span>
                  Home / <span className={styles.mobHighLight}>Case Study</span>
                </span>
              </Link>
              <h1>Case Study</h1>
            </div>
            <div className={styles.mobcaseStudyItemsContainer}>
              <div className={styles.mobcaseStudyItems}>
                <Link href="devops">
                  <div className={styles.mobcaseStudyItem}>
                    {" "}
                    <div className={styles.caseStudyVector}>
                      <img src="Vector.svg"></img>
                    </div>
                    <div>DevOps</div>
                  </div>
                </Link>
                <div className={styles.underline}></div>
                <Link href="magrabi">
                  <div className={styles.mobcaseStudyItem}>
                    <div className={styles.caseStudyVector}>
                      <img src="Vector.svg"></img>
                    </div>
                    <div>MAGRABi</div>
                  </div>
                </Link>
                <div className={styles.underline}></div>
                <Link href="fenix-outdoor">
                  <div className={styles.mobcaseStudyItem}>
                    <div className={styles.caseStudyVector}>
                      <img src="Vector.svg"></img>
                    </div>
                    <div>Fenix Outdoor</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.mobSocialCaseStudy}>
            <div className={styles.mobSocialIcon}>
              <Link href="https://twitter.com/ansar_abd">
                <img src="twitter.svg"></img>
              </Link>
            </div>
            <div className={styles.mobSocialIcon}>
              <Link href="https://www.linkedin.com/company/digitalworks-group/">
                <img src="linkedin.svg"></img>
              </Link>
            </div>
          </div>
          <div className={styles.mobFooterHome}>
            <span>All rights reserved © Digitalworks.co</span>
          </div>
        </div>
      )}

    </>
  );
}

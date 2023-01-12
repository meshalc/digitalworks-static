import styles from "../../styles/Home.module.css";
import Anim from "../mobile/Home/Anim";
import Link from 'next/link'
import { useEffect } from "react";

export default function CaseStudy() {
  useEffect(() => {
    document.body.style.overflow = "scroll"
    // alert("in")
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="Logo.svg"></img>
            </Link>
          </div>
          <div className={styles.caseStudyMain}>
            <div className={styles.StudyItemsContainer}>
              <h1>Case Study</h1>
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
          <div className={styles.social}>
            {" "}
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
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.nav}>
            <div className={styles.navItems}>
              <div className={styles.navItems}>
                {" "}
                <div>
                  <Link href="/">Home</Link>
                </div>
                <div>
                  <Link href="/about">About us</Link>
                  {/* <Link href="/about">About us</Link> */}
                </div>
                <div>
                  <Link href="/">Our Team</Link>
                  {/* <Link href="/">Our Team</Link> */}
                </div>
                <div className={styles.active}>
                  <Link href="/caseStudy">Case Study</Link>
                  {/* <Link href="/caseStudy">Case Study</Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.animation}>
            <Anim />
          </div>
          <div className={styles.mobFooter}>
            <span>All rights reserved © Digitalworks.co</span>
          </div>
        </div>
      </div>
    </>
  );
}

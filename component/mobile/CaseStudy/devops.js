import styles from "../../../styles/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export default function MobileCaseStudy() {
  const [toggle, setToggle] = useState(false);
  const openNav = () => {
    setToggle(true);
  };

  const close = () => {
    setToggle(false);
  };

  useEffect(() => {
    document.body.style.overflow = "scroll";
    // alert("in")
  }, []);
  
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
        <div className={styles.mobMobileContainer}>
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
            <div className={styles.mobBannerBlog}>
              <Link href="/caseStudy">
                <span>
                  Case study / <span className={styles.mobHighLight}>DevOps</span>
                </span>
              </Link>
              <h1>DevOps</h1>
            </div>
            <div className={styles.mobBlogP}>
              <p>
                Digital works team helped to setup Devops operation model. Client
                did not had expertise on Devops process and all the systems were
                on Premise when we started. We came up with overall strategy to
                move systems from on Premise to cloud and also helped in
                automating the over all CI/CD process. All the changes that are
                needed from down stream systems perspective is done on the cloud
                and data was pushed afterwards. Client team was also challenged in
                the Scrum process, Scrum delivery methodology. Digital works team
                helped in setting up whole scrum process. We helped in coming up
                with over all release process and Branching strategy.
              </p>
              <h2>Digital Transformation</h2>
              <h3>The 4E Strategy</h3>
              <img src="Group 18.svg"></img>
              <img src="Group 19.svg"></img>
              <img src="Group 20.svg"></img>
              <img src="Group 21.svg"></img>
            </div>
          </div>
          <div className={styles.mobSocial}>
            <div className={styles.mobSocialIcon}>
              <Link target="_blank" href="https://twitter.com/ansar_abd">
                <img src="twitter.svg"></img>
              </Link>
            </div>
            <div className={styles.mobSocialIcon}>
              <Link target="_blank" href="https://www.linkedin.com/company/digitalworks-group/">
                <img src="linkedin.svg"></img>
              </Link>
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

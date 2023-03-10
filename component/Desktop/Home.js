import styles from "../../styles/Home.module.css";
import Anim from "../mobile/Home/Anim";
import Link from 'next/link'

export default function HomeMain() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.logo}>
            <a href="/">
              <img src="Logo.svg"></img>
            </a>
          </div>
          <div className={styles.caption}>
            <h1>
              Making Digital
              <br />
              Transformation Work
            </h1>
            <a href="tel:6031112298">GET IN TOUCH</a>
          </div>
          <div className={styles.social}>
            {" "}
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
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.nav}>
            <div className={styles.navItems}>
              {" "}
              <div className={styles.active}>
                <Link href="/">Home</Link>
              </div>
              <div>
              <Link href="/about">About us</Link>
                {/* <a href="/about">About us</a> */}
              </div>
              <div>
              <Link href="/">Our Team</Link>
                {/* <a href="/">Our Team</a> */}
              </div>
              <div>
                <Link href="/caseStudy">Case Study</Link>
                {/* <a href="/caseStudy">Case Study</a> */}
              </div>
            </div>
          </div>
          <div className={styles.animation}><Anim /></div>
          <div className={styles.footer}>
            <span>All rights reserved ?? Digitalworks.co</span>
          </div>
        </div>
      </div>
    </>
  );
}

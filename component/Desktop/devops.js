import styles from "../../styles/Home.module.css";
import BlogAnim from "../mobile/Animation/blogAnim";
import Link from 'next/link'
import { useEffect } from "react";

export default function DevOps() {
    useEffect(() => {
        document.body.style.overflow = "scroll"
        // alert("in")
      }, []);
    return (
        <>
            <div className={styles.blogBody}>
                <div className={styles.blogContainer}>
                    <div className={styles.blogHeader}>
                        <div className={styles.blogLogo}>
                            <Link href="/">
                                <img src="Logo.svg"></img>
                            </Link>
                        </div>
                        <div className={styles.blogNav}>
                            <div className={styles.blogNavItems}>
                                <div className={styles.blogNavItem}>
                                    <Link href="/">Home</Link>
                                </div>
                                <div className={styles.blogNavItem}>
                                    <Link href="/about">About us</Link></div>
                                <div className={styles.blogNavItem}>
                                    <Link href="/">Our Team</Link></div>
                                <div className={styles.blogNavItem}>
                                    <Link className={styles.blogNavH} href="/caseStudy">Case Study</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogBanner}>
                        <div className={styles.blogBreadCrum}>
                            <Link href="/caseStudy">
                                <span>
                                    Case Study / <span className={styles.mobHighLight}>DevOps</span>
                                </span>
                                <div className={styles.blogCaption}>
                                    <h1>DevOps</h1>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.blogAnim}>
                            <BlogAnim />
                        </div>
                    </div>
                    <div className={styles.BlogP}>
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
                        <h2>Digital Transformation <span>The 4E Strategy</span></h2>
                        <div className={styles.blogImage}><img src="Group 18.svg"></img>
                            <img src="Group 19.svg"></img>
                            <img src="Group 20.svg"></img>
                            <img src="Group 21.svg"></img></div>
                    </div>

                    <div className={styles.blogFooter}>
                        <div className={styles.blogCopyR}>
                            {/* <div className={styles.mobFooter}> */}
                            <span>All rights reserved © Digitalworks.co</span>
                            {/* </div> */}
                        </div>
                        <div className={styles.blogSocila}>
                            {/* <div className={styles.social}> */}
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
                            {/* </div> */}
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

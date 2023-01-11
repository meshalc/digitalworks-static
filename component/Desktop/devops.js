import styles from "../../styles/Home.module.css";
import BlogAnim from "../mobile/Animation/blogAnim";

export default function DevOps() {
    return (
        <>
            <div className={styles.blogBody}>
                <div className={styles.blogContainer}>
                    <div className={styles.blogHeader}>
                        <div className={styles.blogLogo}>
                            <a href="/">
                                <img src="Logo.svg"></img>
                            </a>
                        </div>
                        <div className={styles.blogNav}>
                            <div className={styles.blogNavItems}>
                                <div className={styles.blogNavItem}>
                                    <a href="/">Home</a>
                                </div>
                                <div className={styles.blogNavItem}>
                                    <a href="/about">About Us</a></div>
                                <div className={styles.blogNavItem}>
                                    <a href="/">Our Team</a></div>
                                <div className={styles.blogNavItem}>
                                    <a className={styles.blogNavH} href="/caseStudy">Case Study</a></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogBanner}>
                        <div className={styles.blogBreadCrum}>
                            <a href="/caseStudy">
                                <span>
                                    Case Study / <span className={styles.mobHighLight}>DevOps</span>
                                </span>
                                <div className={styles.blogCaption}>
                                    <h1>DevOps</h1>
                                </div>
                            </a>
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
                                <a href="https://twitter.com/ansar_abd">
                                    <img src="twitter.svg"></img>
                                </a>
                            </div>
                            <div className={styles.mobSocialIcon}>
                                <a href="https://www.linkedin.com/company/digitalworks-group/">
                                    <img src="linkedin.svg"></img>
                                </a>
                            </div>
                            {/* </div> */}
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

import styles from "../../styles/Home.module.css";
import BlogAnim from "../mobile/Animation/blogAnim";
import { useEffect } from "react";
import Link from "next/link";

export default function MAGRABi() {
    useEffect(() => {
        document.body.style.overflow = "scroll";
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
                                    Case Study / <span className={styles.mobHighLight}>MAGRABi</span>
                                </span>
                                <div className={styles.blogCaption}>
                                    <h1>MAGRABi</h1>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.blogAnim}>
                            <BlogAnim />
                        </div>
                    </div>
                    <div className={styles.BlogP}>
                        <p>
                            MAGRABi is the Middle East's leading fashion eyewear and medical eye care specialist, with more than 150 stores across 5 countries in the region, as well as 20 pioneering MAGRABi hospitals focused on vision and eye health research. Digital works has conducted strategy workshops with the management of the MAGRABi to arrive at a high level requirements. We designed the end-to-end Customer value chainto identify the overall Customer-Experience journey. Blue printed the strategy to identify the tangible product roadmap in phases, scoping of features. We helped in defining the foundational aspects for Data, CRM Setup and payments. Digital works team has done overall coordination with various teams to deliver the digital objectives of the Customer working closely with their Chief Digital Officer. We defined the delivery process, team’s structure by working closely with the system integrators / partners. We drove the overall Agile coaching and planned multiple sprint ceremonies like Sprint review, Sprint Demo, Backlog Grooming, Story points etc
                        </p>
                        <br/>
                        <h2 className={styles.classH2}>Agile Delivery Model</h2>
                        <h3>Value Driven <span>Pragmatic Framework</span></h3>
                        <img src="aa.png"></img>
                        <p>
                            Digital works has driven the Product Management, Product Design, Architecture and Operations. Owned and lead the discovery process with the internal/external teams for arriving at a mutually agreed sprint plan. Reviewed digital architecture and advised changes appropriately to ensure efficiency and business value. Provided Product leadership, Product design (UX) recommendations to customers digital team.
                        </p>
                        <p>
                            Digital works team has designed and reviewed the digital Architecture scalable for the Customers digital Ambition. Provided technical oversight to the technology vendors on maximizing the business value for the customer. Provided oversight of major customization & integrations in line with Phase-1 launch with Vendors/Partners.
                        </p>
                        <p>
                            Digital works team has reviewed and validated the operations operating model – L1/L2/L3 support. Provided fulfilment model, consent strategy & operating model, customer service model, 3rd party vendor contracts and Launch support.
                        </p>
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

import styles from "../../styles/Home.module.css";
import BlogAnim from "../mobile/Animation/blogAnim";
import Link from 'next/link'
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        document.body.style.overflow = "scroll"
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
                                    <Link className={styles.blogNavH} href="/about">About us</Link></div>
                                <div className={styles.blogNavItem}>
                                    <Link href="/">Our Team</Link></div>
                                <div className={styles.blogNavItem}>
                                    <Link href="/caseStudy">Case Study</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogBanner}>
                        <div className={styles.blogBreadCrum}>
                            <Link href="/caseStudy">
                                <span>
                                    Home / <span className={styles.mobHighLight}>About us</span>
                                </span>
                                <div className={styles.blogCaption}>
                                    <h1>About us</h1>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.blogAnim}>
                            <BlogAnim />
                        </div>
                    </div>
                    <div className={styles.brand}>
                        <div className={styles.brandLeft}>
                            <h3>Trusted by brands all over
                                the world</h3>
                            <p>We are proud to have worked with top brands all across the world in a very short span of time.</p>

                        </div>
                        <div className={styles.brandRight}>
                            <div className={styles.brandRow}>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 2.svg"></img>
                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 3.svg"></img>
                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 4.svg"></img>
                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 5.svg"></img>
                                </div>
                            </div>

                            <div className={styles.brandRow}>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 6.svg"></img>
                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 7.svg"></img>
                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 8.svg"></img>
                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 9.svg"></img>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className={styles.consultingAre}>
                        <h2>360º Digital Commerce
                            Consulting</h2>
                        <div className={styles.areasRow}>
                            <div className={styles.areaBlock}>
                                <img src="image 10.svg"></img>
                                <h3>Product Management</h3>
                                <p>We combine business, tech, and design in order to discover products that are valuable, feasible, and usable.</p>

                            </div>
                            <div className={styles.areaBlock}>
                                <img src="image 101.svg"></img>
                                <h3>Product Design</h3>
                                <p>We help you in mapping your target customers with delightful and functional designs.</p>

                            </div>
                            <div className={styles.areaBlock}>
                                <img src="image 11.svg"></img>
                                <h3>Digital Strategy</h3>
                                <p>We help organizations define, visualize & communicate the digital strategy, convert it into tangible roadmaps.</p>

                            </div>
                            <div className={styles.areaBlock}>
                                <img src="image 12.svg"></img>
                                <h3>MVPs</h3>
                                <p>We create lean, highly effective MVP experiments. Testing with real people against actual problems to ensure your core assumptions are validated.</p>

                            </div>
                        </div>
                        <div className={styles.areasRow}>
                            <div className={styles.areaBlock}>
                                <img src="image 10 (1).svg"></img>
                                <h3>DevSecOps</h3>
                                <p>Transformation plan for delivering DevOps culture and building a sustainable delivery organization through continuous integration and deployment.</p>

                            </div>
                            <div className={styles.areaBlock}>
                                <img src="image 10 (2).svg"></img>
                                <h3>Technology</h3>
                                <p>We provide technology strategy fitting your digital transformation strategy supporting cloud strategy, application modernization, scalable digital architecture and solution designs.</p>

                            </div>

                        </div>

                    </div>

                    <div className={styles.global}>
                        <div className={styles.globalLeft}>
                            <img src="Mask group (1).svg"></img>

                        </div>
                        <div className={styles.globalRight}>
                            <h2>Global Presence</h2>
                            <p><b>-{'  '}</b> Experienced Partners who have designed, architected & delivered top-notch digital experiences globally.</p>
                            <p><b>-{'  '} </b>Strategize, Define and Operate your digital transformation roadmap</p>
                            <p><b>-{'  '}</b>Focus on delivering tangible value over advisory.</p>
                            <p><b>-{'  '}</b> Presence in the UAE, EU, INDIA & US.</p>
                        </div>

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
                                <Link href="https://twitter.com/ansar_abd">
                                    <img src="twitter.svg"></img>
                                </Link>
                            </div>
                            <div className={styles.mobSocialIcon}>
                                <Link href="https://www.linkedin.com/company/digitalworks-group/">
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

import styles from "../../../styles/Home.module.css";
import { useState } from "react";

export default function About() {
    const [toggle, setToggle] = useState(false);
    const openNav = () => {
        setToggle(true);
    };

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
                <div className={styles.mobMobileContainer}>
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
                        <div className={styles.mobBannerBlog}>
                            <a href="/caseStudy">
                                <span>
                                    Home / <span className={styles.mobHighLight}>About us</span>
                                </span>
                            </a>
                            <h1>About Us</h1>
                        </div>
                    </div>
                    <div className={styles.mobBrands}>
                        <h2>Trusted by brands all over
                            the world</h2>
                        <p>We are proud to have worked with top brands all across the world in a very short span of time.</p>
                        <div className={styles.mobBrandImageContainer}>
                            <div className={styles.mobBrandImageRow}>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 2.svg"></img>
                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 3.svg"></img>

                                </div>
                            </div>
                            <div className={styles.mobBrandImageRow}>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 4.svg"></img>

                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 5.svg"></img>
                                </div>

                            </div>
                            <div className={styles.mobBrandImageRow}>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 6.svg"></img>

                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 7.svg"></img>
                                </div>

                            </div>
                            <div className={styles.mobBrandImageRow}>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 8.svg"></img>

                                </div>
                                <div className={styles.mobBrandImage}>
                                    <img src="image 9.svg"></img>

                                </div>

                            </div>
                        </div>
                        <h2>360º Digital Commerce
                            Consulting</h2>
                        <img src="image 10.svg"></img>
                        <h3>Product Management</h3>
                        <p>We combine business, tech, and design in order to discover products that are valuable, feasible, and usable.</p>
                        <img src="image 101.svg"></img>
                        <h3>Product Design</h3>
                        <p>We help you in mapping your target customers with delightful and functional designs.</p>
                        <img src="image 11.svg"></img>
                        <h3>Digital Strategy</h3>
                        <p>We help organizations define, visualize & communicate the digital strategy, convert it into tangible roadmaps.</p>

                        <img src="image 12.svg"></img>
                        <h3>MVPs</h3>
                        <p>We create lean, highly effective MVP experiments. Testing with real people against actual problems to ensure your core assumptions are validated.</p>
                        <img src="image 10 (1).svg"></img>
                        <h3>DevSecOps</h3>
                        <p>Transformation plan for delivering DevOps culture and building a sustainable delivery organization through continuous integration and deployment.</p>
                        <img src="image 10 (2).svg"></img>
                        <h3>Technology</h3>
                        <p>We provide technology strategy fitting your digital transformation strategy supporting cloud strategy, application modernization, scalable digital architecture and solution designs.</p>
                        <h2>Global Presence</h2>
                        <img src="image 1.svg"></img>
                        <p>Experienced Partners who have designed,
                            architected & delivered top-notch digital
                            experiences globally.</p>
                        <p>Strategize, Define and Operate your
                            digital transformation roadmap</p>
                        <p>Focus on delivering tangible value over
                            advisory.</p>
                        <p>Presence in the UAE, EU, INDIA & US.</p>
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

import styles from "../../../styles/Home.module.css";
import { useState } from "react";

export default function FenixOutDoor() {
    const [toggle, setToggle] = useState(false);
    const openNav = () => {
        setToggle(true);
    };

    const close = () => {
        setToggle(false);
    };
    return (
        <>
            {toggle && (
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
                        <a href="/">About</a>
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
            )}
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
                                Case study / <span className={styles.mobHighLight}>Fenix Outdoor</span>
                            </span>
                        </a>
                        <h1>Fenix Outdoor</h1>
                    </div>
                    <div className={styles.mobBlogP}>
                        <p>
                            Fenix Outdoor is an international group of premium outdoor brands that develops and sells outdoor clothing and equipment; their mission is to enable all people to spend unforgettable and inspiring moments in nature. We worked with Fenix outdoor on B2C(Business 2 Customer), B2B (Business to Business) and Sales Management platforms through the Agile delivery methodology.
                        </p>
                        <p>
                            Digital works Team helped Fenix Outdoor to build their B2C and B2B platforms. Analysed, identified the challenges with the current systems; came up with the solution that fits best to ensure Shorten time to Market, Data driven Sales approach and Digitally transform the way how they do business with the customers. We helped them to identify the technologies to be used, build architecture and created the path for the overall product delivery.
                        </p>
                        <b>Problem Statement:</b>
                        <p>
                            As a global business, Fenix Outdoor have multiple brand-reseller relationships to nurture and administrate, and they wanted to make the process smoother and more efficient for both themselves and the resellers.
                        </p>
                        <p>
                            The solution was to build a B2B customer portal where both internal and external resellers could easily reorder and preorder from their assortment. Since the current solution was outdated, it had to be replaced rapidly. They had an aggressive time plan to launch this new application, but were hindered by data being scattered in many different systems, which would be a major hurdle in the time plan.
                        </p>
                        <b>Solution:</b>
                        <p>B2B customer portal for resellers to access products from the different brands in Fenix Outdoor's portfolio</p>
                        <p>Resellers have instant access to in-depth product information and can easily browse through the items they want, both for preorder and reorder and add them to the cart</p>
                        <p>Resellers can place the order through cart for different brands they are eligible to sell and place order in smooth way after checking the inventory</p>
                        <p>Resellers can view the orders placed and receive confirmation for the orders placed along with the details in each order</p>
                        <p>Sales Representatives can also place orders on behalf of resellers.</p>
                        <p>Digital works Team helped Fenix outdoor to Digitalize the sales processes with the new Sales Management Platform that allows them to local sales management, customer centricity, Usablity and to over come the dependency on legacy systems. We have Build Sales Management platform out of microservices managed on our own platform, integrated through API’s with existing systems. We have built different modules like Sales rules, Discount rules, Affiliation, Segmentation, Exclusions, Exclusivity and customer Enritchment.</p>
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
        </>
    );
}

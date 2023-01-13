import styles from "../../styles/Home.module.css";
import BlogAnim from "../mobile/Animation/blogAnim";
import { useEffect } from "react";
import Link from "next/link";

export default function FenixOutDoor() {
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
                  <Link href="/about">About us</Link>
                </div>
                <div className={styles.blogNavItem}>
                  <Link href="/">Our Team</Link>
                </div>
                <div className={styles.blogNavItem}>
                  <Link className={styles.blogNavH} href="/caseStudy">
                    Case Study
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blogBanner}>
            <div className={styles.blogBreadCrum}>
              <Link href="/caseStudy">
                <span>
                  Case Study /{" "}
                  <span className={styles.mobHighLight}>Fenix Outdoor</span>
                </span>
                <div className={styles.blogCaption}>
                  <h1>Fenix Outdoor</h1>
                </div>
              </Link>
            </div>
            <div className={styles.blogAnim}>
              <BlogAnim />
            </div>
          </div>
          <div className={styles.BlogPfenix}>
            <p>
              Fenix Outdoor is an international group of premium outdoor brands
              that develops and sells outdoor clothing and equipment; their
              mission is to enable all people to spend unforgettable and
              inspiring moments in nature. We worked with Fenix outdoor on
              B2C(Business 2 Customer), B2B (Business to Business) and Sales
              Management platforms through the Agile delivery methodology.
            </p>
            <p>
              Digital works Team helped Fenix Outdoor to build their B2C and B2B
              platforms. Analysed, identified the challenges with the current
              systems; came up with the solution that fits best to ensure
              Shorten time to Market, Data driven Sales approach and Digitally
              transform the way how they do business with the customers. We
              helped them to identify the technologies to be used, build
              architecture and created the path for the overall product
              delivery.
            </p>
            <b>Problem Statement:</b>
            <p>
              As a global business, Fenix Outdoor have multiple brand-reseller
              relationships to nurture and administrate, and they wanted to make
              the process smoother and more efficient for both themselves and
              the resellers.
            </p>
            <p>
              The solution was to build a B2B customer portal where both
              internal and external resellers could easily reorder and preorder
              from their assortment. Since the current solution was outdated, it
              had to be replaced rapidly. They had an aggressive time plan to
              launch this new application, but were hindered by data being
              scattered in many different systems, which would be a major hurdle
              in the time plan.
            </p>
            <b>Solution:</b>
            <p align="left">
              B2B customer portal for resellers to access products from the
              different brands in Fenix Outdoor's portfolio
            </p>
            <p align="left">
              Resellers have instant access to in-depth product information and
              can easily browse through the items they want, both for preorder
              and reorder and add them to the cart
            </p>
            <p>
              Resellers can place the order through cart for different brands
              they are eligible to sell and place order in smooth way after
              checking the inventory
            </p>
            <p>
              Resellers can view the orders placed and receive confirmation for
              the orders placed along with the details in each order
            </p>
            <p>
              Sales Representatives can also place orders on behalf of
              resellers.
            </p>
            <br/>
            <img src="/Screenshot 2022-11-24 at 5.47.10 PM.png" />
            <br/>
            <img src="/Screenshot 2022-11-24 at 5.47.20 PM.png" />
            <br/>
            <img src="Screenshot 2022-11-24 at 5.47.28 PM.png" />
            <br/>
            <img src="/Screenshot 2022-11-24 at 5.47.35 PM.png" />
            <br/>
            <img src="Screenshot 2022-11-24 at 5.47.42 PM.png" />
            <br/>
            <p>
              <b>Digital works Team</b> helped Fenix outdoor to{" "}
              <b>
                Digitalize the sales processes with the new Sales Management
                Platform
              </b>{" "}
              that allows them to local sales management, customer centricity,
              Usablity and to over come the dependency on legacy systems. We
              have Build Sales Management platform out of microservices managed
              on our own platform, integrated through API’s with existing
              systems. We have built different modules like Sales rules,
              Discount rules, Affiliation, Segmentation, Exclusions, Exclusivity
              and customer Enritchment.
            </p>
            <img src="/Screenshot 2022-11-24 at 5.47.49 PM.png" />
            <br/>
            <img src="/Screenshot 2022-11-24 at 5.47.55 PM.png" />
            <br/>
            <img src="/Screenshot 2022-11-24 at 5.48.02 PM.png" />
          </div>

          <div className={styles.blogFooter}>
            <div className={styles.blogCopyR}>
              {/* <div className={styles.mobFooter}> */}
              <span>All rights reserved © Digitalworks.co</span>
              {/* </div> */}
            </div>
            <div className={styles.blogSocila}>
              {/* <div className={styles.social}> */}{" "}
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

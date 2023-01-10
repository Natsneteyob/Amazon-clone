import React from "react";
import "./Home.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt=""
        /> */}
        <Carousel
          className="home__image"
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <Link to="/">
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
                alt=""
              />
            </div>
          </Link>
          <Link to="/">
            <div>
              <img src="http://links.papareact.com/6ff" alt="" />
            </div>
          </Link>
          <Link to="/">
            <div>
              <img src="https://m.media-amazon.com/images/I/71wob537DmL._SX3000_.jpg" />
            </div>
          </Link>
               
        </Carousel>
        <div className="home__row">
          <Product
            id="12321341"
            Product="essence | Lash PRINCESS"
            title="essence | Lash Princess False Lash Effect Mascara | Gluten"
            price={1.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_UL480_QL65_.jpg"
          />

          <Product
            id="12321341"
            Product="Brand:BR Gold Jewerly"
            title="Habesha Big
          Coin Cross Pendant Necklace Women Gold Plated Jewelry"
            price={130.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71dJZ-By5UL._AC_UL1200_.jpg"
          />

          <Product
            id="12321332"
            Product="Makeup Kit"
            title="SHANY Glamour Girl Makeup Kit Eye shadow/Blush/Powder - Vintage"
            price={63.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            // title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            Product="Get Fit At Home"
            title="Sports and Outdoors"
            price={130.99}
            rating={3}
            // image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />
          <Product
            id="23445930"
            Product="WAX STICK"
            title="Hair Wax Stick, Wax Hair Finishing Stick, Professional Broken Hair Shaping Gel Hairstyling Moisturizing Wax 75g"
            price={8.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51FDQ4URb8L._AC_UL480_QL65_.jpg"
          />

          <Product
            id="23445930"
            Product="Dresses"
            title="Womens fashion Clothing"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
          />
          <Product
            id="3254354345"
            Product="TruSkin"
            title="TruSkin Vitamin C Serum for Face & Eye Area, Anti Aging Serum with  Vitamin E , Organic Aloe Vera and Jojoba Oil"
            price={28.99}
            rating={4}
            // image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            image="https://m.media-amazon.com/images/I/61luC9qN9qL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            Product="CeraVe"
            title="CeraVe Skin Renewing Night Cream Complex, and Hyaluronic Acid Moisturizer for Face"
            price={15.87}
            rating={4}
            image="https://m.media-amazon.com/images/I/71L2i2B4DIL._AC_UL480_FMwebp_QL65_.jpg"
          />

          <Product
            id="90829332"
            Product="BURT'S BEES"
            title="Burt's Bees Lip Balm Stocking Stuffers, Moisturizing Lip Care Original Beeswax with Vitamin E & Peppermint Oil (4 Pack)"
            price={7.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81gl-3aulYL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/jan/Blockbuster_entertainment/EN/1500x600_Hero-Tall_01_FT._CB662389308_.jpg"
                alt="slide1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Desktop_Tallhero_1500-X-600-BB-jan-rvised-NO-Cashback._CB411961897_.jpg"
                alt="slide2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Boat/Boat_Gw_1500x600._CB660810557_.jpg"
                alt="slide3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/CAT_ATF/2._CB411390334_.jpg"
                alt="slide4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/catlevel/D20458164_IN_HETV_Category_level_GW_PC_Tollhero_1500x600_en_1._CB660812078_.jpg"
                alt="slide5"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="HP 14 8th Gen Intel Core i5 Processor 14-inch Thin and Light Laptop , 14q cs0017TU"
            price={759.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Qz7rl%2B5RL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="12321351"
            title="OPPO A12 (Blue, 3GB RAM, 32GB Storage) With No Cost EMI/Additional"
            price={34.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71bp9IpcK-L._SX522_.jpg"
            rating={5}
          />
          <Product
            id="12321361"
            title="TCL 108 cm (43 inches) 4K Ultra HD Certified Android Smart LED TV 43P615 "
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vw4dDvP4L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321381"
            title="Casio Edifice Analog Blue Dial Men's Watch - EFR-552GL-2AVUDF (EX358)"
            price={40.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71girhyQcJL._UL1100_.jpg"
          />
          <Product
            id="12321371"
            title="XBOOM Go PL5 Portable Bluetooth Speaker with Meridian Audio Technology"
            price={25.99}
            image="https://www.lg.com/us/images/home-audio/md07500093/gallery/desktop-01.jpg"
            rating={5}
          />
          <Product
            id="12321391"
            title="Sketchfab Extra bass Headphones Over The Ear Headset with Deep bass (Red)"
            price={58.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41rBUEf16jL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321441"
            title="Running Rider Fashionable Stylish Casual Shoes for Men Sneakers | Lace up Sneakers for Men Stylish"
            price={94.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61Uh7P5bIUL._UL1100_.jpg"
          />
          <Product
            id="12321541"
            title="American Tourister Jamaica Polyester 58 cms Grey Softsided Carry-On (27O (0) 08 001)"
            price={64.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61crntR2IPL._SL1200_.jpg"
          />
          <Product
            id="12321641"
            title="MAXPRO Folding Treadmill IM5001 (1.5HP) Electric Motorized Exercise Machine for Running & Walking"
            price={104.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61eVQDxGpgL._SL1080_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

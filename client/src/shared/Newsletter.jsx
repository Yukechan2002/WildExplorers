import React from "react";
import "./newsletter.css";
import maleTourist from "../assets/images/male-tourist.png";
import { Container, Row, Col } from "react-bootstrap";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="newsletter__content">
              <h2 className="Newsletter">
                Subscribe Now for Essential Travel Tips! ✈️🌟
              </h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p className="Newsparagraph">
                Unlock Exclusive Travel Insights! 🌍✨ Subscribe now to access a
                treasure trove of travel tips, detailed destination guides, and
                special offers. Our curated content ensures you stay ahead of
                the latest trends, discover hidden gems, and plan unforgettable
                trips with ease and excitement. 🚀📚🌟
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;

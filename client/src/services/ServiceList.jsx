import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "react-bootstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "🌤️ Plan with confidence! No matter the weather, our tours adapt to ensure your adventure never skips a beat.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guides",
    desc: "🗺️ Discover the heart of each destination with our top-tier guides who turn every journey into an unforgettable story.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "🎯 Make your trip truly yours! Customize your tour with personalized routes and activities for an adventure like no other",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg={3} md={6} sm={12} className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;

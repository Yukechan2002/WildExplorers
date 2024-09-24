import firstImg from "../assets/images/first.jpg";
import secondImg from "../assets/images/secondImg.jpg";
import thirdImg from "../assets/images/ThirdImg.jpg";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import imgWidget1 from "../assets/images/imgWidget1.jpg"; // New Image Widget
import imgWidget2 from "../assets/images/imgWidget2.jpg"; // New Image Widget
import imgWidget3 from "../assets/images/imgWidget3.jpg"; // New Image Widget
import imgWidget4 from "../assets/images/imgWidget4.jpg"; // New Image Widget
import imgWidget5 from "../assets/images/imgWidget5.jpg"; // New Image Widget
import imgWidget6 from "../assets/images/imgWidget6.jpg"; // New Image Widget
import imgWidget7 from "../assets/images/imgWidget7.jpg"; // New Image Widget
import imgWidget8 from "../assets/images/imgWidget8.jpg"; // New Image Widget
import additionalImg1 from "../assets/images/additionalImg1.jpg"; // New Image Widget
import additionalImg3 from "../assets/images/additionalImg2.jpg"; // New Image Widget
import additionalImg2 from "../assets/images/additionalImg3.jpg"; // New Image Widget
import "../styles/home.css";
import Subtitle from "../shared/subtitle";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../wrappers/Featured tours/FeaturedTourList";
import MasonryImagesGallery from "../wrappers/image-gallery/MasonryImagesGallery";
import Newsletter from "../shared/Newsletter";
import HomeFooter from "../wrappers/HomeFooter";

const Home = () => {
  return (
    <>
      <section>
        <Container lg={12}>
          <Row>
            <Col lg={6}>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Get Ready for Your Adventure"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  <span className="highlight">
                    🌍 Travel nature's beauty 🌿 and resilience 🌟 shine
                    brightly.
                  </span>{" "}
                </h1>

                <p className="home-paragraph">
                  🌍 Embarking on a wildlife tour immerses you in the raw beauty
                  of nature. 🦁 Guided by experts, witness rare species in their
                  habitats, from majestic lions on African plains 🦓 to vibrant
                  marine life in coral reefs 🐠. These tours foster conservation
                  awareness 🌿 while providing unforgettable encounters with the
                  world's most extraordinary creatures 🐘.
                </p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="hero__img-box ">
                <img src={firstImg} alt="" />
              </div>
            </Col>
            <Col lg={2}>
              <div className="hero__img-box mt-4">
                <img src={secondImg} alt="" />
              </div>
            </Col>
            <Col lg={2}>
              <div className="hero__img-box mt-5">
                <img src={thirdImg} alt="" />
              </div>
            </Col>

            <section>
              <Container>
                <div className="image-widget-scroll-container">
                  <div className="image-widget-row">
                    {/* <!-- First set of images --> */}
                    <div className="image-widget">
                      <img src={imgWidget1} alt="Widget 1" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget2} alt="Widget 2" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget3} alt="Widget 3" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget4} alt="Widget 4" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget5} alt="Widget 5" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget6} alt="Widget 6" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget7} alt="Widget 7" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget8} alt="Widget 8" />
                    </div>
                    {/* <!-- Duplicate images for seamless scrolling --> */}
                    <div className="image-widget">
                      <img src={imgWidget1} alt="Widget 1" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget2} alt="Widget 2" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget3} alt="Widget 3" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget4} alt="Widget 4" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget5} alt="Widget 5" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget6} alt="Widget 6" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget7} alt="Widget 7" />
                    </div>
                    <div className="image-widget">
                      <img src={imgWidget8} alt="Widget 8" />
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg={3}>
              <h5 className="services__subtitle">Our Elite Services</h5>
              <h2 className="services__title"> Premier Service Solutions</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg={12} className="mb-5">
              <Subtitle subtitle={"Discover"} />
              <h2 className="featured__tour-title">
                ✈️ Discover Our Top Tours
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2 className="experience">
                  With our vast experience, <br /> we ensure your journey is
                  unforgettable.
                </h2>
                <p className="home-paragraph">
                  ✈️ Experience extraordinary adventures with tailor-made
                  itineraries 🗺️, knowledgeable local guides 👨‍🏫, and seamless
                  planning 📅. We aim to make every moment of your trip
                  engaging, hassle-free, and uniquely yours 🌍.
                </p>
                <div className="counter__wrapper d-flex align-item-center gap-5">
                  <div className="counter__box">
                    <span>10k+</span>
                    <h6>Successful Trips</h6>
                  </div>
                  <div className="counter__box">
                    <span>3k+</span>
                    <h6>Regular Clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>5</span>
                    <h6>Years of Experience</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="slideshow-container">
                <div className="slideshow">
                  <div className="slide">
                    <img src={experienceImg} alt="Experience" />
                  </div>
                  <div className="slide">
                    <img src={additionalImg1} alt="Additional 1" />
                  </div>
                  <div className="slide">
                    <img src={additionalImg2} alt="Additional 2" />
                  </div>
                  <div className="slide">
                    <img src={additionalImg3} alt="Additional 3" />
                  </div>
                  {/* Add more slides as needed */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                📸 Explore Our Travelers' Gallery
              </h2>
            </Col>
            <Col lg={12}>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
      <HomeFooter />
    </>
  );
};

export default Home;

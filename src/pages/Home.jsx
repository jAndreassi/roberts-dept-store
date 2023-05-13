import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import hero from "../assets/images/roberts.hero.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Wolbanner from "../assets/images/WOLVERINE.BANNER.png";
import boot1 from "../assets/images/W03226.jpg";
import boot2 from "../assets/images/W10315.jpg";
import boot3 from "../assets/images/W10317.jpg";
import boot4 from "../assets/images/W10788.jpg";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../assets/images/brandslide1.png";
import Slide2 from "../assets/images/brandslide2.png";
import Slide3 from "../assets/images/brandslide3.png";
import keenbanner from "../assets/images/keen.banner.png";
import Keenboot from "../assets/images/keenutilityboot.jpeg";

const boots = [boot1, Keenboot, boot3, boot4];

function BasicExample() {
  return (
    <div style={{ paddingBottom: "10em" }}>
      <Card className="border-0" style={{ paddingBottom: "5em" }}>
        <Card.Img
          variant="top"
          src={hero}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            objectPosition: "center 60%",
          }}
        />
      </Card>

      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="custom-card">
              <Card.Img className="mainPics" variant="top" src={boots[idx]} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Carousel
        style={{
          border: "5px solid black",
          borderRadius: "50px",
          marginRight: "3em",
          marginLeft: "3em",
          marginBottom: "10em",
        }}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
            style={{ height: "350px" }}
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Slide2}
            alt="Second slide"
            style={{ height: "350px" }}
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Slide3}
            alt="Third slide"
            style={{ height: "350px" }}
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card style={{ marginBottom: "5em" }}>
        <Card.Body style={{ backgroundColor: "#367588" }}>
          <Card.Text
            style={{
              color: "white",
              backgroundColor: "#367588",
              fontFamily: "Inter",
              fontSize: "1.2em",
            }}>
            Get ready for summer with Keen. Men's, womens, or kids, Roberts has
            you covered for you outdoor adventures!
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={keenbanner} />
      </Card>

      <Card style={{ marginBottom: "5em" }}>
        <Card.Body style={{ backgroundColor: "#367588" }}>
          <Card.Text
            style={{
              color: "white",
              backgroundColor: "#367588",
              fontFamily: "Inter",
              fontSize: "1.2em",
            }}>
            Working outside all summer long, come to Roberts and grab some
            waterproof Non insulated Wolverine workboots to beat the heat!
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={Wolbanner} />
      </Card>
      <div className="row justify-content-center">
        <Card style={{ width: "20rem", height: "25rem" }}>
          <Card.Img variant="top" src={Keenboot} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "25rem" }}>
          <Card.Img variant="top" src={Keenboot} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "25rem" }}>
          <Card.Img variant="top" src={Keenboot} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "25rem" }}>
          <Card.Img variant="top" src={Keenboot} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;

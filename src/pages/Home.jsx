import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import hero from "../assets/images/roberts.hero.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import Wolbanner from "../assets/images/banners/WOLVERINE.BANNER.png";
import boot1 from "../assets/images/wolverines/W03226.jpg";
import boot2 from "../assets/images/wolverines/W10315.jpg";
import boot3 from "../assets/images/wolverines/W10317.jpg";
import boot4 from "../assets/images/wolverines/W10788.jpg";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../assets/images/carosuel/brandslide1.png";
import Slide2 from "../assets/images/carosuel/brandslide2.png";
import Slide3 from "../assets/images/carosuel/brandslide3.png";
import keenbanner from "../assets/images/banners/keen.banner.png";
import Keenboot from "../assets/images/keenutilityboot.jpeg";
import sperry from "../assets/images/sperry.jpg";
import Image from "react-bootstrap/Image";
import asics from "../assets/images/asics.jpg";
import sperry1 from "../assets/images/sperry.jpg";
import keen from "../assets/images/keen.jpg";
import keen1 from "../assets/images/keen1.png";
import keen2 from "../assets/images/keen2.jpeg";
import keen3 from "../assets/images/keen3.jpeg";
import keen4 from "../assets/images/keen4.jpeg";
const boots = [keen1, keen2, keen3, boot4];

function BasicExample() {
  const images = [
    { src: asics, alt: "Image 1", text: "Asics Gel Cumulus" },
    { src: keen, alt: "Image 2", text: "Keen Newport H2" },
    { src: sperry1, alt: "Image 3", text: "Sperry A/O Boat Shoe" },
  ];
  return (
    <div style={{ paddingBottom: "1em" }}>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-sm-4" key={index}>
            <div style={{ position: "relative", height: "100%" }}>
              <Image
                src={image.src}
                alt={image.alt}
                fluid
                style={{ height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  backgroundColor: "white",
                  padding: "0.5em",
                }}>
                {image.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Carousel
        style={{
          border: "5px solid #884936",
          borderRadius: "10px",
          marginRight: "1em",
          marginLeft: "1em",
          marginBottom: "2em",
        }}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
            style={{ height: "350px" }}
          />
          <Carousel.Caption
            style={{ color: "black", backgroundColor: "#D8DBDE" }}>
            <h3>Footwear</h3>
            <p>All the top footwear brands for work, play or travel.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Slide2}
            alt="Second slide"
            style={{ height: "350px" }}
          />
          <Carousel.Caption
            style={{ color: "black", backgroundColor: "#D8DBDE" }}>
            <h3>Clothing</h3>
            <p>
              The best clothing brands for dress, sports or just hanging out.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Slide3}
            alt="Third slide"
            style={{ height: "350px" }}
          />
          <Carousel.Caption
            style={{ color: "black", backgroundColor: "#D8DBDE" }}>
            <h3>Workwear</h3>
            <p>Hard at work, we have all the toughest workgear.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card style={{ marginBottom: "2em" }}>
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

      <div className="row justify-content-around">
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <Card.Img variant="top" src={keen1} />
          <Card.Body>
            <Card.Title>Newport H2</Card.Title>
            <Card.Text>Water friendly.</Card.Text>
            <Button variant="primary">Add to cart!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <Card.Img variant="top" src={keen2} />
          <Card.Body>
            <Card.Title>Newport H2</Card.Title>
            <Card.Text>Water friendly.</Card.Text>
            <Button variant="primary">Add to cart!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <Card.Img variant="top" src={keen3} />
          <Card.Body>
            <Card.Title>Newport H2</Card.Title>
            <Card.Text>Water friendly.</Card.Text>
            <Button variant="primary">Add to cart!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <Card.Img variant="top" src={keen4} />
          <Card.Body>
            <Card.Title>Newport H2</Card.Title>
            <Card.Text>Water friendly.</Card.Text>
            <Button variant="primary">Add to cart!</Button>
          </Card.Body>
        </Card>
      </div>

      <Card style={{ marginBottom: ".5em" }}>
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

      <div className="row justify-content-around">
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <Card.Img variant="top" src={boot1} />
          <Card.Body>
            <Card.Title>Wovlerive 3226</Card.Title>
            <Card.Text>Waterproof, 200 grams insulated, soft toe.</Card.Text>
            <Button variant="primary">Add to cart!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <Card.Img variant="top" src={boot2} />
          <Card.Body>
            <Card.Title>Wolverine 10315</Card.Title>
            <Card.Text>Waterproof, non-insulated, soft-toe.</Card.Text>
            <Button variant="primary">Add to cart!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <Card.Img variant="top" src={boot3} />
          <Card.Body>
            <Card.Title>Wolverine 10317</Card.Title>
            <Card.Text>Waterproof, non-insulated, soft-toe.</Card.Text>
            <Button variant="primary">Add to cart!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <Card.Img variant="top" src={boot4} />
          <Card.Body>
            <Card.Title>Wolverine 10788</Card.Title>
            <Card.Text>Waterproof, non-insulated, safety-toe.</Card.Text>
            <Button variant="primary">Add to cart!</Button>
          </Card.Body>
        </Card>
      </div>

      <Card style={{ border: "none", marginTop: "2em" }}>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Figure className="m-0">
            <Figure.Image width={1500} height={500} alt="Shirt 1" src={hero} />
            <Figure.Caption className="text-center">
              Robert's Dept Store
            </Figure.Caption>
          </Figure>
          <span
            className="mx-auto"
            style={{ fontSize: "1em", paddingLeft: "2em" }}>
            Roberts is a local business with a rich history, having been
            established in 1931 and remaining under the ownership of only two
            families since then. As a leading retailer of men's clothing and
            footwear in the area, Roberts offers a wide range of products to its
            loyal customer base. With an extensive selection of work boots, snow
            boots, sneakers, shoes, sandals, and outdoor hiking boots for men,
            Roberts is a one-stop-shop for all your footwear needs. The store
            also carries a variety of sneakers and hiking boots for women and
            kids, ensuring that the whole family can find the perfect pair of
            shoes. Additionally, Roberts has a large selection of workwear for
            men, including well-known brands such as Carhartt and a variety of
            hi-vis work gear. With its commitment to quality and customer
            service, Roberts has become a cornerstone of the local community,
            serving generations of families with their clothing and footwear
            needs.
          </span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;

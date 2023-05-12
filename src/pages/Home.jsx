import React from "react";
import Card from "react-bootstrap/Card";
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

const boots = [boot1, boot2, boot3, boot4];

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
        {/* <Card.Body>
          <Card.Text style={{ fontFamily: "Inter" }}>
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
          </Card.Text>
        </Card.Body> */}
      </Card>

      <Carousel
        style={{
          border: "5px solid black",
          borderRadius: "50px",
          marginRight: "3em",
          marginLeft: "3em",
        }}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
            style={{ height: "400px" }}
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
            style={{ height: "400px" }}
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
            style={{ height: "400px" }}
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="bg-dark text-white">
        <Card.Img src={Wolbanner} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card className="bg-dark text-white">
        <Card.Img src={Wolbanner} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <div style={{ paddingTop: "2em" }}>
        <Card className="border-0">
          <Card.Body style={{ fontFamily: "Inter" }}>
            At Roberts, we take great pride in offering our customers only the
            best quality brands. Our selection includes some of the most
            reputable names in the industry such as Levis, Khul, Carhartt,
            Penguin, Saltlife, Dickies, Riggs, New Balance, Redwings, Merrell,
            Keen, Timberland, Florsheim, Danner, Olukai, Wolverine, Dockers, and
            many more. From durable workwear to stylish casual wear, we have it
            all. Our staff is knowledgeable and passionate about the products we
            carry, and we are committed to providing our customers with the
            highest level of customer service possible. So, whether you're in
            need of a new pair of boots for work or some stylish sneakers for a
            night out, come visit us at Roberts and let us help you find exactly
            what you need.
          </Card.Body>
        </Card>
      </div>

      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={boots[idx]} />
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
    </div>
  );
}

export default BasicExample;

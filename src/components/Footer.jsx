import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function DefaultExample() {
  const [showAboutText, setShowAboutText] = React.useState(false);

  const handleAboutClick = () => {
    setShowAboutText(!showAboutText);
  };
  return (
    <>
      <div id="footer" style={{ backgroundColor: "#292827", color: "white" }}>
        <hr></hr>
        <div style={{ paddingBottom: "2em" }}>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link
                href="/home"
                style={{ color: "inherit", textDecoration: "none" }}>
                <FaInstagram size={30} />{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                style={{ color: "inherit", textDecoration: "none" }}>
                {" "}
                <FaFacebook size={30} />{" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <ListGroup className="text-center">
          <ListGroup.Item
            className="border-0"
            style={{ backgroundColor: "#292827", color: "white" }}>
            <a
              href="tel:9146980969"
              style={{ color: "inherit", textDecoration: "none" }}>
              <i className="bi bi-phone"></i> (914) 698-0969
            </a>
          </ListGroup.Item>
          <ListGroup.Item
            className="border-0"
            style={{ backgroundColor: "#292827", color: "white" }}>
            <Link
              to={{
                pathname: "https://www.google.com/maps/dir/",
                search:
                  "?api=1&destination=342+Mamaroneck+Ave%2C+Mamaroneck+NY+10543&destination_place_id=ChIJ5-h-AIaRwokRJzZpLsgZPIw",
              }}
              target="_blank"
              style={{ color: "inherit", textDecoration: "none" }}>
              <FaMapMarkerAlt /> 342 Mamaroneck Ave, Mamaroneck NY 10543
            </Link>
          </ListGroup.Item>

          <ListGroup.Item
            className="border-0"
            style={{ backgroundColor: "#292827", color: "white" }}>
            {" "}
            <FaEnvelope />{" "}
            <a
              href="mailto:info@robertsdeptstore.com"
              style={{ color: "inherit", textDecoration: "none" }}>
              info@robertsdeptstore.com
            </a>
          </ListGroup.Item>
          <ListGroup.Item
            className="border-0"
            style={{
              backgroundColor: "#292827",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setShowAboutText(!showAboutText)}>
            About Us
          </ListGroup.Item>
          {showAboutText && (
            <ListGroup.Item
              className="border-0"
              style={{ backgroundColor: "#292827", color: "white" }}>
              {" "}
              Roberts is a local business with a rich history, having been
              established in 1931 and remaining under the ownership of only two
              families since then. As a leading retailer of men's clothing and
              footwear in the area, Roberts offers a wide range of products to
              its loyal customer base. With an extensive selection of work
              boots, snow boots, sneakers, shoes, sandals, and outdoor hiking
              boots for men, Roberts is a one-stop-shop for all your footwear
              needs. The store also carries a variety of sneakers and hiking
              boots for women and kids, ensuring that the whole family can find
              the perfect pair of shoes. Additionally, Roberts has a large
              selection of workwear for men, including well-known brands such as
              Carhartt and a variety of hi-vis work gear. With its commitment to
              quality and customer service, Roberts has become a cornerstone of
              the local community, serving generations of families with their
              clothing and footwear needs.<br></br>
              <br></br>
              At Roberts, we take great pride in offering our customers only the
              best quality brands. Our selection includes some of the most
              reputable names in the industry such as Levis, Khul, Carhartt,
              Penguin, Saltlife, Dickies, Riggs, New Balance, Redwings, Merrell,
              Keen, Timberland, Florsheim, Danner, Olukai, Wolverine, Dockers,
              and many more. From durable workwear to stylish casual wear, we
              have it all. Our staff is knowledgeable and passionate about the
              products we carry, and we are committed to providing our customers
              with the highest level of customer service possible. So, whether
              you're in need of a new pair of boots for work or some stylish
              sneakers for a night out, come visit us at Roberts and let us help
              you find exactly what you need.
            </ListGroup.Item>
          )}
          <ListGroup.Item
            className="border-0"
            style={{ backgroundColor: "#292827", color: "white" }}>
            Hours:<br></br> Monday through Friday 9 am to 6:30 pm<br></br>{" "}
            Saturday 9 am to 6 pm<br></br>
            Sunday 11 am to 4 pm
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div
        style={{
          backgroundColor: "#292827",
          color: "white",
          paddingBottom: "5em",
        }}></div>
    </>
  );
}

export default DefaultExample;

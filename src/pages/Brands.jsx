import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Merrell from "../assets/images/merrell.logo.jpg";
import Timberland from "../assets/images/timberland-logo.png";
import NewBalance from "../assets/images/nb.logo.png";
import Bates from "../assets/images/bates.logo.png";
import Carolina from "../assets/images/carolina.logo.jpg";
import Danner from "../assets/images/danner-logo.png";
import Redwing from "../assets/images/red-wing-shoes-logo.png";
import Keen from "../assets/images/keen.logo.png";
import Keenutility from "../assets/images/keen.utility.logo.png";
import Olukai from "../assets/images/olukai.logo.jpeg";
import Timberlandpro from "../assets/images/timb.pro.logo.jpg";
import Muck from "../assets/images/muck.logo.png";

import "../assets/css/brands.css";
function BasicExample() {
  return (
    <div className="row justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Merrell} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Merrell</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Merrell's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Timberland} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Timberland</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Timberland's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={NewBalance} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Timberland</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all New Balance's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Carolina} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Merrell</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Carolina's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Danner} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Timberland</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Danners's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Bates} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Timberland</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Bates
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Keen} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Merrell</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Keen's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Keenutility} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Timberland</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Keen Utility's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Olukai} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Timberland</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Olukai's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Redwing} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Merrell</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Redwing's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Timberlandpro} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Timberland</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Timberland Pro's
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Muck} className="card-img-top" />
        <Card.Body>
          {/* <Card.Title>Timberland</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="dark" className="mx-auto d-block">
            See all Muck's
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;

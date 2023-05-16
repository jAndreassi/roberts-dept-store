import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Merrell from "../assets/images/logos/merrell.logo.jpg";
import Timberland from "../assets/images/logos/timberland-logo.png";
import NewBalance from "../assets/images/logos/nb.logo.png";
import Bates from "../assets/images/logos/bates.logo.png";
import Carolina from "../assets/images/logos/carolina.logo.jpg";
import Danner from "../assets/images/logos/danner-logo.png";
import Redwing from "../assets/images/logos/red-wing-shoes-logo.png";
import Keen from "../assets/images/logos/keen.logo.png";
import Keenutility from "../assets/images/logos/keen.utility.logo.png";
import Olukai from "../assets/images/logos/olukai.logo.jpeg";
import Timberlandpro from "../assets/images/logos/timb.pro.logo.jpg";
import Muck from "../assets/images/logos/muck.logo.png";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <div className="row justify-content-center">
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Merrell}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Timberland}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={NewBalance}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Carolina}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Danner}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Bates}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>

      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Keen}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Keenutility}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Olukai}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Redwing}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Timberlandpro}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to="/Footwear">
          <Card.Img
            variant="top"
            src={Muck}
            className="card-img-top"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
      </Card>
    </div>
  );
}

export default BasicExample;

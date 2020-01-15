import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details{" "}
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <Media.Body>
                <img
                  width={80}
                  height={100}
                  src="https://images-na.ssl-images-amazon.com/images/I/51l-8PVVQlL._SL1280_.jpg"
                  alt="thumbnail"
                />
              </Media.Body>
              <Media.Body>
                <p>
                  Adcom Mutant Super Gaming Chair with Scratch Proof PVC and
                  180° Tilt Back Recline (Red/Black)
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`₹${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`₹${this.props.total}`}</strong>
                  </Col>
                  <Col md={6}>Qty: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}

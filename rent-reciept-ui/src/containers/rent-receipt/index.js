import React from "react";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
setConfiguration({ maxScreenClass: "md", gutterWidth: 20 });

const PlaceHolder = ({ children = "PlaceHolder" }) => {
  return (
    <div style={{ borderBottom: "solid 1px" }}>
      <p style={{ fontSize: `110%` }}>{children}</p>
    </div>
  );
};

const FormattedLabel = ({ children }) => {
  return (
    <p style={{ fontSize: `90%` }}>
      <b>{children.toUpperCase()}</b>
    </p>
  );
};

const RentReceiptComponent = ({
  index,
  nameOfTenant,
  nameOfOwner,
  paymentDate,
  paymentMode,
  propertyAddress,
  currencySymbol = "Rs. ",
  currency = "Rupees",
  amount,
  amountInWords,
  monthStartDate,
  monthEndDate,
  ownerAddress,
}) => {
  return (
    <Container
      style={{
        border: "solid grey 1px",
        marginTop: `10px`,
        marginBottom: `20px`,
        pageBreakInside: `avoid`,
      }}
    >
      <Row>
        <Col>
          <h1>RENT RECEIPT</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <FormattedLabel>Date:</FormattedLabel>
        </Col>
        <Col sm={2}>
          <PlaceHolder>{paymentDate}</PlaceHolder>
        </Col>
        <Col />
        <Col />
        <Col />
        <Col />
        <Col sm={2}>
          <FormattedLabel>Receipt No:</FormattedLabel>
        </Col>
        <Col sm={2}>
          <PlaceHolder>{index + 1001}</PlaceHolder>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <FormattedLabel>Received From:</FormattedLabel>
        </Col>
        <Col>
          <PlaceHolder>{nameOfTenant}</PlaceHolder>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <FormattedLabel>The Sum of</FormattedLabel>{" "}
        </Col>
        <Col sm={2}>
          <PlaceHolder>
            {currencySymbol}
            {amount}
          </PlaceHolder>
        </Col>
        <Col sm={2}>
          <FormattedLabel>In Words:</FormattedLabel>
        </Col>
        <Col>
          <PlaceHolder>
            <i>{currency}</i> {amountInWords}
          </PlaceHolder>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <FormattedLabel>For Rent of:</FormattedLabel>
        </Col>
        <Col sm={5}>
          <PlaceHolder>{propertyAddress}</PlaceHolder>
        </Col>
        <Col>
          <FormattedLabel>Paid Through:</FormattedLabel>
        </Col>
        <Col sm={3}>
          <PlaceHolder>{paymentMode}</PlaceHolder>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormattedLabel>For the period from </FormattedLabel>
        </Col>
        <Col>
          <PlaceHolder>{monthStartDate}</PlaceHolder>
        </Col>
        <Col>
          <FormattedLabel>To:</FormattedLabel>
        </Col>
        <Col>
          <PlaceHolder>{monthEndDate}</PlaceHolder>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={2}>
          <FormattedLabel>Received by:</FormattedLabel>
        </Col>
        <Col sm={4}>
          <PlaceHolder>{nameOfOwner}</PlaceHolder>
          {ownerAddress && <PlaceHolder>{ownerAddress}</PlaceHolder>}
        </Col>
        <Col sm={2}>
          <FormattedLabel>Owner's Signature:</FormattedLabel>
        </Col>
        <Col style={{ border: "solid 1px", marginRight: "10px" }}></Col>
      </Row>
      <Row>
        <Col sm={11} />
        <Col>
          <p style={{ fontSize: "0.6rem" }}>
            <i>Thank You</i>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RentReceiptComponent;

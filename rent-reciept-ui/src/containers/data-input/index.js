import React, { useState, useEffect } from "react";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import { useNavigate } from "react-router-dom";

import { InputComponent, withLabels } from "../../components/form-input";

setConfiguration({
  maxScreenClass: "md",
  gutterWidth: 20,
  defaultScreenClass: "sm",
});

const FormInput = withLabels(InputComponent);

const DataInputComponent = ({ dispatch }) => {
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");

  useEffect(() => {
    if (house && street && area && city && state && pin) {
      const address = [house, street, area, city, state, pin].join(", ");
      dispatch({ type: "set_property_address", data: address });
    }
  }, [house, street, area, city, state, pin, dispatch]);

  const monthSelectorOptions = {
    type: "select",
    id: "month",
    options: [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 1 },
      { label: "Mar", value: 2 },
      { label: "Apr", value: 3 },
      { label: "May", value: 4 },
      { label: "Jun", value: 5 },
      { label: "Jul", value: 6 },
      { label: "Aug", value: 7 },
      { label: "Sep", value: 8 },
      { label: "Oct", value: 9 },
      { label: "Nov", value: 10 },
      { label: "Dec", value: 11 },
    ],
  };

  const onMonthFromChange = (e) => {
    dispatch({ type: "set_from_month", data: e.target.value });
  };
  const onMonthToChange = (e) => {
    dispatch({ type: "set_to_month", data: e.target.value });
  };
  const yearSelectorOptions = {
    type: "select",
    id: "year",
    options: [
      { label: "2019" },
      { label: "2020" },
      { label: "2021" },
      { label: "2022" },
    ],
  };

  const onYearToChange = (e) => {
    dispatch({ type: "set_to_year", data: e.target.value });
  };

  const onYearFromChange = (e) => {
    dispatch({ type: "set_from_year", data: e.target.value });
  };

  const paymentSelectorOptions = {
    type: "select",
    id: "payment",
    options: [
      { label: "Cash" },
      { label: "Cheque" },
      { label: "UPI/Bank Transfer" },
      { label: "Wallet" },
    ],
    onChange: (e) => {
      dispatch({ type: "set_payment_mode", data: e.target.value });
    },
  };

  const tenantChanged = (e) => {
    dispatch({ type: "set_tenant_name", data: e.target.value });
  };
  const ownerAddressChanged = (e) => {
    dispatch({ type: "set_owner_address", data: e.target.value });
  };

  const ownerChanged = (e) => {
    dispatch({ type: "set_owner_name", data: e.target.value });
  };

  const amountChanged = (e) => {
    dispatch({ type: "set_rent_amount", data: e.target.value });
  };

  const navigate = useNavigate();
  const onSubmit = (e) => {
    navigate("/receipt");
  };

  return (
    <Container style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
      <Row>
        <Col>
          <FormInput
            maxLength="100"
            minLength="5"
            size={45}
            label="Enter Tenants Name"
            id="tenantName"
            type="text"
            onChange={tenantChanged}
          />
        </Col>
        <Col>
          <FormInput
            maxLength="100"
            minLength="5"
            size={45}
            label="Enter Owner's Name"
            id="ownerName"
            type="text"
            onChange={ownerChanged}
          />
        </Col>
        <Col>
          <FormInput
            label="Amount(in INR)"
            type="number"
            onChange={amountChanged}
          />
        </Col>
        <Col>
          <FormInput label="Payment Mode" {...paymentSelectorOptions} />
        </Col>

        <Col>
          <FormInput
            label="Address of the owner"
            id="ownerAddress"
            type="text"
            size={50}
            maxLength={100}
            onChange={ownerAddressChanged}
          />
        </Col>
      </Row>
      <Row
        style={{
          border: `grey solid 1px`,
          marginTop: `10px`,
          marginBottom: `10px`,
        }}
      >
        <Col>
          <FormInput
            label="From Month"
            {...monthSelectorOptions}
            onChange={onMonthFromChange}
          />
        </Col>
        <Col>
          <FormInput
            label="From Year"
            {...yearSelectorOptions}
            onChange={onYearFromChange}
          />
        </Col>
      </Row>
      <Row
        style={{
          border: `grey solid 1px`,
          marginTop: `10px`,
          marginBottom: `10px`,
        }}
      >
        <Col>
          <FormInput
            label="To Month"
            {...monthSelectorOptions}
            onChange={onMonthToChange}
          />
        </Col>
        <Col>
          <FormInput
            label="To Year"
            {...yearSelectorOptions}
            onChange={onYearToChange}
          />
        </Col>
      </Row>
      <Row
        style={{
          border: `grey solid 1px`,
          marginTop: `10px`,
          marginBottom: `10px`,
        }}
      >
        <Col>
          <FormInput
            label="House/Building/Apartment"
            id="address_line_1"
            type="text"
            onChange={(e) => {
              setHouse(e.target.value);
            }}
          />
        </Col>
        <Col>
          <FormInput
            label="Street/Road/Lane"
            id="address_line_2"
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
              setStreet(e.target.value);
            }}
          />
        </Col>
        <Col>
          <FormInput
            label="Area/Locality/Sector"
            id="address_line_1"
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
              setArea(e.target.value);
            }}
          />
        </Col>
        <Col>
          <FormInput
            label="Village/Town/City"
            id="address_line_1"
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
              setCity(e.target.value);
            }}
          />
        </Col>
        <Col>
          <FormInput
            label="State"
            id="address_line_1"
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
              setState(e.target.value);
            }}
          />
        </Col>
        <Col>
          <FormInput
            label="PIN"
            id="address_line_1"
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
              setPin(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type={"submit"} onClick={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default DataInputComponent;

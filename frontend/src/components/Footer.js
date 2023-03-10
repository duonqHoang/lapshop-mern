import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            ©️ 2022 LAPSHOP All RIGHTS RESERVED.
          </Col>
          <Col className="text-center py-3">
            <a href="/policy">Chính sách</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

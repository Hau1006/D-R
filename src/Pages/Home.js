import React from "react";
import { Col, Row } from "react-bootstrap";
import Products from "../components/Products";
import products from "../products";

function Home() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, i) => {
          return (
            <Col
              className="my-2"
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Products product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Home;

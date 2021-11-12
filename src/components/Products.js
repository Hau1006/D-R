import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

function Products({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div"></Card.Text>
        <div className="my-3">
          <Rating
            value={product.rating}
            text={`${product.numReviews} Review `}
            color={"#f8e825"}
          />
        </div>
        <Card.Text as="div">
          <div style={{ color: "green" }}>${product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Products;

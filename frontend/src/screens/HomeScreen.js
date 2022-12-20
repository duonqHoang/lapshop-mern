import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listLatestProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();

  const producLatest = useSelector((state) => state.productLatest);
  const { loading, error, products } = producLatest;

  useEffect(() => {
    dispatch(listLatestProducts());
  }, [dispatch]);

  return (
    <>
      <Meta />

      <ProductCarousel />

      <h1 className="mt-4">Sản phẩm mới nhất</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
      <div className="row justify-content-center">
        <Link to="/products" className="btn btn-dark">
          Tất cả sản phẩm
        </Link>
      </div>
    </>
  );
};

export default HomeScreen;

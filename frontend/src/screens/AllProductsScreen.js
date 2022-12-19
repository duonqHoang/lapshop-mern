import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Dropdown } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const AllProductsScreen = ({ match, location }) => {
  const query = new URLSearchParams(location.search);

  const path = location.pathname;
  const keyword = query.get("keyword") || "";
  const pageNumber = query.get("page") || 1;
  const brand = query.get("brand") || "";
  const category = query.get("category") || "";

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, brand, category));
  }, [dispatch, keyword, pageNumber, brand, category]);

  return (
    <>
      <Link to="/" className="btn btn-light">
        Quay lại
      </Link>
      <Row className="justify-content-around">
        {keyword ? <h1>Kết quả tìm kiếm</h1> : <h1>Tất cả sản phẩm</h1>}
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">Thương hiệu</Dropdown.Toggle>
          <DropdownMenu>
            <DropdownItem as={Link} to="/products">
              Không chọn
            </DropdownItem>
            <DropdownItem as={Link} to="/products?brand=Acer">
              Acer
            </DropdownItem>
            <DropdownItem as={Link} to="/products?brand=Asus">
              Asus
            </DropdownItem>
            <DropdownItem as={Link} to="/products?brand=Apple">
              Apple
            </DropdownItem>
            <DropdownItem as={Link} to="/products?brand=Dell">
              Dell
            </DropdownItem>
            <DropdownItem as={Link} to="/products?brand=Lenovo">
              Lenovo
            </DropdownItem>
            <DropdownItem as={Link} to="/products?brand=HP">
              HP
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Row>

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
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
            brand={brand ? brand : ""}
            category={category ? category : ""}
          />
        </>
      )}
    </>
  );
};

export default AllProductsScreen;

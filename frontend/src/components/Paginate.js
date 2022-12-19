import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({
  pages,
  page,
  isAdmin = false,
  keyword = "",
  brand = "",
  category = "",
}) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword && brand && category
                  ? `/products?keyword=${keyword}&page=${
                      x + 1
                    }&brand=${brand}&category=${category}`
                  : keyword && brand
                  ? `/products?keyword=${keyword}&page=${x + 1}&brand=${brand}`
                  : keyword && category
                  ? `/products?keyword=${keyword}&page=${
                      x + 1
                    }&category=${category}`
                  : keyword
                  ? `/products?keyword=${keyword}&page=${x + 1}`
                  : brand
                  ? `/products?brand=${brand}&page=${x + 1}`
                  : `/products?page=${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;

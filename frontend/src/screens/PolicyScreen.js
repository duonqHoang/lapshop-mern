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

const AllProductsScreen = ({ match }) => {
  return (
    <>
      <Link to="/" className="btn btn-light">
        Quay lại
      </Link>
      <h5>Chính sách đổi trả</h5>
      <p>
        - Quý khách được quyền đổi máy mới nếu máy của Quý khách mắc lỗi kỹ
        thuật trong vòng 10 ngày kể từ thời điểm mua máy mới chính hãng và 15
        ngày đối với máy mới khác. Lỗi kỹ thuật này được xác định do nhà sản
        xuất.
      </p>
      <p>
        - Đổi sản phẩm giống hệt tại cửa hàng mua trước đó (Cùng model, màu sắc,
        cấu hình), với điều kiện ngoại hình máy như mới, không bị xước, không
        mất tem và kèm theo đầy đủ hộp, các phụ kiện đi kèm.
      </p>
      <p>
        - Nếu không có sản phẩm giống hệt, quý khách đợi điều chuyển hàng về tối
        đa 7 ngày. Trong thời gian chờ điều chuyển, Laptop88 sẽ cho quý khách
        mượn máy cũ có giá trị không quá 70% giá trị sản phẩm của khách hàng
        hoặc đổi sang sản phẩm khác có giá trị lớn hơn hoặc bằng 80% giá trị sản
        phẩm đã mua. Sản phẩm được đổi sang là sản phẩm mới 100% hoặc đổi sang
        dòng laptop cũ tại cửa hàng và áp dụng chính sách bảo hành đối với máy
        cũ.
      </p>
      <p>
        - Chính sách đổi máy laptop mới chính hãng trong 10 ngày không áp dụng
        với sản phẩm của Apple.
      </p>

      <h5>Chính sách bảo hành</h5>
      <p>- Bảo hành 12 tháng kể từ thời điểm mua</p>
      <p>
        - Những trường hợp không nằm trong chính sách bảo hành:Sản phẩm hết hạn
        bảo hành, Sản phẩm đã bị thay đổi, sửa chữa không thuộc các Trung Tâm
        Bảo Hành Ủy Quyền của Hãng, ản phẩm bị biến dạng, nứt vỡ, cấn móp, trầy
        xước nặng do tác động nhiệt, tác động bên ngoài, Khách hàng sử dụng phần
        mềm, ứng dụng không chính Hãng, không bản quyền
      </p>
    </>
  );
};

export default AllProductsScreen;

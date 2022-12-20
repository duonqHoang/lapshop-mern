## LapShop

### Biến môi trường

Tạo file .env ở thư mục gốc theo mẫu sau

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abcde123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Khởi tạo dữ liệu

Bạn có thể sử dụng các lệnh sau để khởi tạo cơ sở dữ liệu với một số người dùng và sản phẩm mẫu cũng như hủy tất cả dữ liệu

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Một số tài khoản mẫu

admin@gmail.com (Admin)
123456

khoa@gmail.com (User)
123456

hoang@gmail.com (User)
123456
```




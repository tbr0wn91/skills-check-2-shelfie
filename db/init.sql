DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  price INTEGER,
  img TEXT
);


INSERT INTO products(name, price, img)

VALUES
('dress shoes', 25, 'https://s7d4.scene7.com/is/image/JCPenney/DP0511201717035641M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2')
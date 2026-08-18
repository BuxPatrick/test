import Head from "next/head";
import Nav from "../components/Nav";

const PRODUCTS = [
  { name: "Product A", price: "$9.99", stock: "In stock" },
  { name: "Product B", price: "$19.99", stock: "Out of stock" },
  { name: "Product C", price: "$4.50", stock: "In stock" },
  { name: "Product D", price: "$100.00", stock: "In stock" },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <h1>PRODUCTS</h1>
      <Nav />
      <hr />
      <table border="1" cellPadding="4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {PRODUCTS.map((p) => (
            <tr key={p.name}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

import Link from "next/link";

export default function Nav() {
  return (
    <table border="1" cellPadding="4">
      <tbody>
        <tr>
          <td><Link href="/">Home</Link></td>
          <td><Link href="/about">About</Link></td>
          <td><Link href="/products">Products</Link></td>
          <td><Link href="/contact">Contact</Link></td>
        </tr>
      </tbody>
    </table>
  );
}

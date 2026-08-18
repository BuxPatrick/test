import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>WELCOME TO THE WEBSITE</h1>
      <Nav />
      <hr />
      <p>This is the home page. It was made with a framework. It is not nice to look at.</p>
      <p>Here is a list of things:</p>
      <ul>
        <li>Thing one</li>
        <li>Thing two</li>
        <li>Thing three</li>
      </ul>
      <hr />
      <p>Copyright nobody. All rights whatever.</p>
    </>
  );
}

import Head from "next/head";
import Nav from "../components/Nav";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1>ABOUT PAGE</h1>
      <Nav />
      <hr />
      <p>
        This website exists because someone asked for a website that uses a
        framework but is not nice. This is that website. It uses Next.js,
        which is a framework, and it has no CSS on purpose.
      </p>
      <p>Font: whatever the browser feels like today.</p>
    </>
  );
}

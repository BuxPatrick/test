import Head from "next/head";
import { useState } from "react";
import Nav from "../components/Nav";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>CONTACT US</h1>
      <Nav />
      <hr />
      {submitted ? (
        <p>Thanks. Someone will maybe get back to you.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>
            Name:<br />
            <input type="text" name="name" />
          </p>
          <p>
            Email:<br />
            <input type="email" name="email" />
          </p>
          <p>
            Message:<br />
            <textarea name="message" rows={5} cols={40}></textarea>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      )}
    </>
  );
}

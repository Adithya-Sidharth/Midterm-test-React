import React from 'react'

function Home() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <title>Document</title>
  <header>
    <a href="#" className="logo">
      Medium
    </a>
    <nav>
      <a href="#Home" className="active">
        Our Story
      </a>
      <a href="#About">Membership</a>
      <a href="#Skills">Write</a>
      <a href="#Contact">Sign in</a>
    </nav>
  </header>
  <section id="Home">
    <div className="home-content">
      <h1>Human</h1>
      <h2>stories &amp; ideas</h2>
      <p>A place to read, write, and deepen your understanding</p>
      <p className="start">Start Reading</p>
    </div>
  </section>
  <footer>
    <div className="footer-content">
      <a href="#Help">Help</a>
      <a href="#Status">Status</a>
      <a href="#About">About</a>
      <a href="#Careers">Careers</a>
    </div>
  </footer>
</>
  )
}

export default Home
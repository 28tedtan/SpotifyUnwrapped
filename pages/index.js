import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify Unwrapped</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/homestyles.css" />
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/theme.js"></script>
      </Head>
      <body className="theme-dark">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-container">
            <a href="/" className="navbar-logo">
              <div className="spotify-logo">
                {/* SVG omitted for brevity */}
                <div className="Unwrapped">Unwrapped</div>
              </div>
            </a>
            <ul className="nav-menu">
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/friends" className="nav-link">Friends</a></li>
              <li className="nav-item"><a href="/trending" className="nav-link">Trending</a></li>
              <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="/settings" className="nav-link">Settings</a></li>
            </ul>
          </div>
        </nav>
        {/* Main content and sidebar omitted for brevity, to be filled in next */}
        <footer>
          <p>Made with love by Ted & Kmy. Inspired by Spotify&copy;</p>
        </footer>
      </body>
    </>
  );
} 
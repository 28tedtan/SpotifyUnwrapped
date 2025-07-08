import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Trending() {
  useEffect(() => {
    // Add any theme or script logic here if needed
  }, []);

  return (
    <>
      <Head>
        <title>Trending - Spotify Unwrapped</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/homestyles.css" />
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/theme.js"></script>
      </Head>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/">
            <a className="navbar-logo">
              <div className="spotify-logo">{/* SVG omitted for brevity */}<div className="Unwrapped">Unwrapped</div></div>
            </a>
          </Link>
          <ul className="nav-menu">
            <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
            <li className="nav-item"><Link href="/friends"><a className="nav-link">Friends</a></Link></li>
            <li className="nav-item"><Link href="/trending"><a className="nav-link active">Trending</a></Link></li>
            <li className="nav-item"><Link href="/about"><a className="nav-link">About</a></Link></li>
            <li className="nav-item"><Link href="/settings"><a className="nav-link">Settings</a></Link></li>
          </ul>
        </div>
      </nav>
      <div className="main-container">
        <div className="sidebar">
          <div className="sidebar-section">
            <h2>Trending Categories</h2>
            <ul className="sidebar-links">
              <li><a href="#global-trends">Global Trends</a></li>
              <li><a href="#rising-artists">Rising Artists</a></li>
              <li><a href="#viral-tracks">Viral Tracks</a></li>
              <li><a href="#genre-trends">Genre Trends</a></li>
            </ul>
          </div>
        </div>
        <div className="content-area">
          {/* Insert all trending.html sections and markup here, including iframes and track/artist cards */}
        </div>
      </div>
      <footer>
        <p>Made with love by Ted & Kmy. Inspired by Spotify&copy;</p>
      </footer>
    </>
  );
} 
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Friends() {
  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' && (localStorage.getItem('theme') || 'dark');
    document.body.className = `theme-${savedTheme}`;
  }, []);

  return (
    <>
      <Head>
        <title>Friends - Spotify Unwrapped</title>
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
            <li className="nav-item"><Link href="/friends"><a className="nav-link active">Friends</a></Link></li>
            <li className="nav-item"><Link href="/trending"><a className="nav-link">Trending</a></Link></li>
            <li className="nav-item"><Link href="/about"><a className="nav-link">About</a></Link></li>
            <li className="nav-item"><Link href="/settings"><a className="nav-link">Settings</a></Link></li>
          </ul>
        </div>
      </nav>
      <div className="main-container">
        <div className="sidebar">
          <div className="sidebar-section">
            <h2>Friends</h2>
            <ul className="sidebar-links">
              <li><a href="#online-friends">Online Friends</a></li>
              <li><a href="#friend-activity">Friend Activity</a></li>
              <li><a href="#friend-stats">Friend Stats</a></li>
            </ul>
          </div>
        </div>
        <div className="content-area">
          {/* ...rest of friends.html content, sections, and markup... */}
        </div>
      </div>
      <footer>
        <p>Made with love by Ted & Kmy. Inspired by Spotify&copy;</p>
      </footer>
      {/* Modal and other dynamic elements can be migrated to React state as needed */}
    </>
  );
} 
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Badges() {
  const confettiRef = useRef(null);
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    // Scroll to top button logic
    const scrollBtn = scrollBtnRef.current;
    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    };
    window.addEventListener('scroll', handleScroll);
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    // Confetti logic (simplified)
    const canvas = confettiRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // ...confetti drawing logic can be added here if needed...
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Achievements - Spotify Unwrapped</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/aboutstyles.css" />
      </Head>
      <canvas className="confetti" ref={confettiRef}></canvas>
      <div className="navbar">
        <Link href="/">
          <a className="navbar-logo">
            <div className="spotify-logo">{/* SVG omitted for brevity */}<div className="Unwrapped">Unwrapped</div></div>
          </a>
        </Link>
        <ul className="nav-menu">
          <li><Link href="/"><a className="nav-link">Home</a></Link></li>
          <li><Link href="/friends"><a className="nav-link">Friends</a></Link></li>
          <li><Link href="/trending"><a className="nav-link">Trending</a></Link></li>
          <li><Link href="/about"><a className="nav-link">About</a></Link></li>
          <li><Link href="/settings"><a className="nav-link">Settings</a></Link></li>
        </ul>
      </div>
      <div className="achievements-container">
        <h1 className="achievements-title">Your Achievements</h1>
        <div className="badge-list">
          <div className="badge unlocked">
            <div className="badge-title">🎵 1000+ Songs Played</div>
            <div className="badge-desc">You've listened to over 1000 songs this year!</div>
            <div className="badge-footer">Unlocked</div>
          </div>
          <div className="badge locked" id="genreBadge">
            <div className="badge-title">🌍 Genre Explorer</div>
            <div className="badge-desc">Listened to 20+ genres in a week.</div>
            <div className="badge-progress"><div className="badge-progress-bar" style={{width: '60%'}}></div></div>
            <button onClick={() => {}}>Claim</button>
          </div>
        </div>
      </div>
      <button id="scrollToTopBtn" ref={scrollBtnRef} title="Back to top">⬆</button>
      <footer>
        <p>Made with love by Ted & Kmy. Inspired by Spotify&copy;</p>
      </footer>
    </>
  );
} 
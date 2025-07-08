import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  useEffect(() => {
    // Theme toggle logic
    const savedTheme = typeof window !== 'undefined' && localStorage.getItem('theme');
    if (savedTheme) {
      document.body.className = `theme-${savedTheme}`;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.className = prefersDark ? 'theme-dark' : 'theme-light';
    }
    // FAQ toggle logic
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
      q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>About - Spotify Unwrapped</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/aboutstyles.css" />
        <script src="/theme.js"></script>
      </Head>
      <div className="layout">
        <aside className="sidebar">
          <div className="logo">
            <Link href="/">
              <a className="navbar-logo">
                <div className="spotify-logo">{/* SVG omitted for brevity */}<div className="Unwrapped">Unwrapped</div></div>
              </a>
            </Link>
          </div>
          <ul className="nav-menu">
            <li><a href="#mission" className="nav-link">Mission</a></li>
            <li><a href="#how-it-works" className="nav-link">How it works</a></li>
            <li><a href="#privacy" className="nav-link">Privacy</a></li>
            <li><a href="#team" className="nav-link">Team</a></li>
          </ul>
        </aside>
        <main className="content">
          <div className="navbar">
            <div className="navbar-container">
              <Link href="/">
                <a className="navbar-logo">
                  <div className="spotify-logo">{/* SVG omitted for brevity */}<div className="Unwrapped">Unwrapped</div></div>
                </a>
              </Link>
              <ul className="nav-menu">
                <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
                <li className="nav-item"><Link href="/friends"><a className="nav-link">Friends</a></Link></li>
                <li className="nav-item"><Link href="/trending"><a className="nav-link">Trending</a></Link></li>
                <li className="nav-item"><Link href="/about"><a className="nav-link active">About</a></Link></li>
                <li className="nav-item"><Link href="/settings"><a className="nav-link">Settings</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="about-container">
            {/* ...rest of about.html content, sections, and markup... */}
          </div>
          <footer>
            <p>Made with ❤️ by Ted & Kmy. Inspired by Spotify©</p>
          </footer>
        </main>
      </div>
    </>
  );
} 
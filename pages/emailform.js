import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function EmailForm() {
  const formContainerRef = useRef(null);
  const alreadySubmittedRef = useRef(null);

  useEffect(() => {
    // Check if user has already submitted the form
    const userEmail = localStorage.getItem('user_email');
    if (userEmail && formContainerRef.current && alreadySubmittedRef.current) {
      formContainerRef.current.style.display = 'none';
      alreadySubmittedRef.current.style.display = 'block';
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
    // Listen for messages from the Airtable iframe
    window.addEventListener('message', function(event) {
      if (event.origin === 'https://airtable.com') {
        if (event.data && event.data.type === 'form-submit') {
          handleRedirect();
        }
      }
    });
    function handleRedirect() {
      if (!localStorage.getItem('user_email')) {
        localStorage.setItem('user_email', 'submitted@example.com');
      }
      window.location.href = '/?trigger_oauth=true';
    }
  }, []);

  return (
    <>
      <Head>
        <title>Email Collection - Spotify Unwrapped</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/homestyles.css" />
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
            <li className="nav-item"><Link href="/"><a className="nav-link active">Home</a></Link></li>
            <li className="nav-item"><Link href="/friends"><a className="nav-link">Friends</a></Link></li>
            <li className="nav-item"><Link href="/trending"><a className="nav-link">Trending</a></Link></li>
            <li className="nav-item"><Link href="/about"><a className="nav-link">About</a></Link></li>
            <li className="nav-item"><Link href="/settings"><a className="nav-link">Settings</a></Link></li>
          </ul>
        </div>
      </nav>
      <div className="main-container">
        <div id="form-container" ref={formContainerRef} style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <iframe className="airtable-embed"
            src="https://airtable.com/embed/appj5cdSU2WwMs7jw/paggft6nXNmA0tF6P/form"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{background: '#191414', border: '1px solid #191414', maxWidth: '800px', minHeight: '600px'}}>
          </iframe>
        </div>
        <div id="already-submitted" ref={alreadySubmittedRef} style={{display: 'none', textAlign: 'center', padding: '2rem'}}>
          <h2>You've already submitted your email!</h2>
          <p>Redirecting you to Spotify login...</p>
        </div>
      </div>
      <footer>
        <p>Made with love by Ted & Kmy. Inspired by Spotify&copy;</p>
      </footer>
    </>
  );
} 
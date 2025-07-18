import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Custom404() {
  const groovesRef = useRef(null);
  const visualizerRef = useRef(null);

  useEffect(() => {
    // Create vinyl grooves
    if (groovesRef.current) {
      groovesRef.current.innerHTML = Array.from({ length: 20 }, (_, i) =>
        `<div class='vinyl-groove' style='transform:scale(${0.2 + i * 0.04})'></div>`
      ).join('');
    }
    // Create visualizer bars
    if (visualizerRef.current) {
      visualizerRef.current.innerHTML = '';
      for (let i = 0; i < 100; i++) {
        const bar = document.createElement('div');
        bar.className = 'visualizer-bar';
        bar.style.animationDelay = `${i * 0.01}s`;
        visualizerRef.current.appendChild(bar);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #000000 0%, #2f2f2f 100%); min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem; color: white; }
          .error-container { max-width: 800px; width: 100%; background: #1a1a1a; border-radius: 1rem; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); padding: 2rem; margin-bottom: 2rem; }
          .error-message { text-align: center; margin-bottom: 2rem; padding: 1rem; background: rgba(255, 255, 255, 0.1); border-radius: 0.5rem; }
          .error-message h1 { font-size: 2.5rem; color: #1DB954; margin-bottom: 1rem; }
          .error-message p { color: #b3b3b3; line-height: 1.6; }
          .now-playing { background: #2a2a2a; border-radius: 0.5rem; padding: 1rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: center; }
          .vinyl-player { width: 200px; height: 200px; position: relative; transition: transform 0.3s ease; }
          .vinyl-disc { width: 100%; height: 100%; background: #1a1a1a; border-radius: 50%; position: relative; animation: spin 4s linear infinite; box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); }
          .vinyl-grooves { position: absolute; inset: 0; opacity: 0.2; }
          .vinyl-groove { position: absolute; inset: 0; border: 1px solid #ffffff; border-radius: 50%; }
          .vinyl-label { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 33.333%; height: 33.333%; border-radius: 50%; background: #1DB954; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem; }
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .now-playing-info { margin-left: 2rem; text-align: left; }
          .now-playing-info h3 { color: #1DB954; margin-bottom: 0.5rem; }
          .now-playing-info p { color: white; }
          .audio-visualizer { width: 100%; height: 200px; background: #2a2a2a; border-radius: 0.5rem; margin-bottom: 2rem; overflow: hidden; display: flex; align-items: flex-end; justify-content: center; gap: 2px; }
          .visualizer-bar { flex: 1; background: #1DB954; display: inline-block; animation: equalize 1s ease infinite alternate; opacity: 0.7; }
          @keyframes equalize { 0% { height: 20%; } 100% { height: 100%; } }
          .home-button { display: inline-block; padding: 0.75rem 2rem; background: #1DB954; color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 500; transition: background-color 0.2s; }
          .home-button:hover { background: #1ed760; }
        `}</style>
      </Head>
      <div className="error-container">
        <div className="error-message">
          <h1>404 - Page Not Found</h1>
          <p>Oops! Looks like this track is skipping. The page you're looking for doesn't exist or has been moved.</p>
        </div>
        <div className="now-playing" id="nowPlaying">
          <div className="vinyl-player">
            <div className="vinyl-disc">
              <div className="vinyl-grooves" ref={groovesRef}></div>
              <div className="vinyl-label">404</div>
            </div>
          </div>
          <div className="now-playing-info">
            <h3>Now Playing:</h3>
            <p>404 Page not found sorry :(</p>
          </div>
        </div>
        <div className="audio-visualizer" id="visualizer" ref={visualizerRef}></div>
      </div>
      <Link href="/">
        <a className="home-button">Return to Home</a>
      </Link>
    </>
  );
} 
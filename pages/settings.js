import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Settings() {
  useEffect(() => {
    // Theme and accent color logic from settings.html
    const themeCheckbox = document.getElementById('checkbox');
    if (!themeCheckbox) return;
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
      document.body.classList.remove('theme-dark');
      themeCheckbox.checked = true;
    } else {
      document.body.classList.add('theme-dark');
      themeCheckbox.checked = false;
    }
    themeCheckbox.addEventListener('change', () => {
      if (themeCheckbox.checked) {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
      }
      showToast('Theme changed!');
    });
    // Accent color picker logic
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const root = document.documentElement;
    const savedAccentColor = localStorage.getItem('accentColor');
    if (savedAccentColor) {
      root.style.setProperty('--accent-color', savedAccentColor);
      colorSwatches.forEach(swatch => {
        swatch.classList.remove('active');
        if (swatch.dataset.color === savedAccentColor) {
          swatch.classList.add('active');
        }
      });
    } else {
      const defaultSwatch = document.querySelector('.color-swatch[data-color="#1DB954"]');
      if (defaultSwatch) defaultSwatch.classList.add('active');
    }
    colorSwatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        const color = swatch.dataset.color;
        root.style.setProperty('--accent-color', color);
        localStorage.setItem('accentColor', color);
        colorSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        showToast('Accent color updated!');
      });
    });
    // Toast logic
    window.showToast = (message) => {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Settings - Spotify Unwrapped</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/settingsstyles.css" />
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
            <li className="nav-item"><Link href="/trending"><a className="nav-link">Trending</a></Link></li>
            <li className="nav-item"><Link href="/about"><a className="nav-link">About</a></Link></li>
            <li className="nav-item"><Link href="/settings"><a className="nav-link active">Settings</a></Link></li>
          </ul>
        </div>
      </nav>
      <div className="settings-container">
        <h1 className="settings-title">Settings</h1>
        <div className="settings-section">
          <h2>Appearance</h2>
          <div className="settings-item">
            <span>Theme</span>
            <div className="theme-switch-wrapper">
              <span className="theme-label">Dark</span>
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round"></div>
              </label>
              <span className="theme-label">Light</span>
            </div>
          </div>
          <div className="settings-item">
            <span>Accent Color</span>
            <div className="color-picker">
              <div className="color-swatch" style={{background: '#1DB954'}} data-color="#1DB954"></div>
              <div className="color-swatch" style={{background: '#4285F4'}} data-color="#4285F4"></div>
              <div className="color-swatch" style={{background: '#DB4437'}} data-color="#DB4437"></div>
              <div className="color-swatch" style={{background: '#F4B400'}} data-color="#F4B400"></div>
            </div>
          </div>
        </div>
        <div className="settings-section">
          <h2>Account</h2>
          <div className="settings-item">
            <span>Connected to Spotify</span>
            <div className="connection-status">
              <div className="status-indicator connected"></div>
              <span id="connection-text">Connected</span>
            </div>
          </div>
          <div className="settings-item">
            <span>Update Email</span>
            <Link href="/emailform"><button className="action-button">Edit Email</button></Link>
          </div>
          <div className="settings-item">
            <span>Sign Out from Spotify</span>
            <button id="signout-btn" className="action-button">Sign Out</button>
          </div>
        </div>
        <div className="settings-section">
          <h2>Privacy</h2>
          <div className="settings-item">
            <span>Share listening activity with friends</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="settings-item">
            <span>Show recently played in profile</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="settings-section">
          <h2>Data</h2>
          <div className="settings-item">
            <span>Download your data</span>
            <button className="action-button secondary">Download</button>
          </div>
          <div className="settings-item">
            <span>Clear local data</span>
            <button id="clear-data-btn" className="action-button warning">Clear Data</button>
          </div>
        </div>
      </div>
      <div id="toast" className="toast">Changes saved</div>
      <footer>
        <p>Made with love by Ted & Kmy. Inspired by Spotify&copy;</p>
      </footer>
      {/* Custom cursor, toast, and other dynamic elements can be migrated to React state as needed */}
    </>
  );
} 
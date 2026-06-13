import React, { useState } from 'react'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [crates, setCrates] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎵 CrateDigger</h1>
        <p>Discover deep electronic music crates</p>
      </header>

      <main className="main">
        <section className="search-section">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search vinyl crates, artists, or genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">Search</button>
          </form>
        </section>

        <section className="crates-section">
          <div className="crates-grid">
            {crates.length === 0 ? (
              <div className="empty-state">
                <p>Start exploring vinyl crates by searching above or browsing featured collections.</p>
              </div>
            ) : (
              crates.map((crate) => (
                <div key={crate.id} className="crate-card">
                  <h3>{crate.title}</h3>
                  <p>{crate.description}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built for vinyl collectors and electronic music enthusiasts</p>
        <p>
          <a href="https://github.com/raihanamran00-prog/CrateDigger" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' | '}
          <a href="https://discogs.com" target="_blank" rel="noopener noreferrer">
            Discogs
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App

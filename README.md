# CrateDigger 🎵

A website for electronic music lovers to discover and explore deep crates of vinyl records online and on Discogs.

## Features

- Browse vinyl crates from online sources
- Search and filter by genre, artist, and era
- Link to Discogs for detailed information
- Create and share your own crate collections
- Community recommendations and reviews

## Tech Stack

- **Frontend**: Built with Lovable
- **Hosting**: GitHub Pages / Vercel / Netlify
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites
- Node.js 18+ (if running locally)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/raihanamran00-prog/CrateDigger.git
cd CrateDigger

# Install dependencies
npm install

# Run the development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## Deployment

This project is automatically deployed on every push to `main` via GitHub Actions.

### Manual Deployment

To manually trigger a deployment:
1. Go to Actions tab in GitHub
2. Select the deployment workflow
3. Click "Run workflow"

## Project Structure

```
CrateDigger/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── styles/         # CSS/styling
│   ├── utils/          # Helper functions
│   └── App.jsx         # Main app component
├── public/             # Static assets
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── package.json
├── vite.config.js      # Vite configuration
└── README.md
```

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Make your changes
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source. Feel free to use it for your own crate digging adventures!

## Contact

Have questions? Open an issue or reach out to [@raihanamran00-prog](https://github.com/raihanamran00-prog)

---

Built with ❤️ for vinyl collectors and electronic music enthusiasts.

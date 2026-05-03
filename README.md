# Cloud Native Tools Collection

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20.19-brightgreen)](https://nodejs.org/)
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-646cff.svg)](https://vitejs.dev/)
[![Deploy](https://github.com/sangam14/cloudnativetools/actions/workflows/nodes.yml/badge.svg)](https://github.com/sangam14/cloudnativetools/actions/workflows/nodes.yml)
[![GitHub stars](https://img.shields.io/github/stars/sangam14/cloudnativetools?style=social)](https://github.com/sangam14/cloudnativetools/stargazers)

A curated collection of tools for Kubernetes and the cloud native ecosystem, presented in an easy-to-browse web interface.

![Cloud Native Tools Collection Preview](./src/assets/Tools.png)

## 📑 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Available Scripts](#-available-scripts)
- [Categories](#-categories)
- [Contributing](#-contributing)
- [Tool Entry Schema](#-tool-entry-schema)
- [Deployment](#-deployment)
- [Technologies Used](#-technologies-used)
- [License](#-license)
- [Maintainers](#-maintainers)

## 🌟 Features

- **Comprehensive Tool Directory**: Browse hundreds of tools for Kubernetes and cloud native development
- **Categorized Browsing**: Filter tools by categories like Cluster Management, Security, Monitoring, and more
- **Search Functionality**: Quickly find tools based on name or description
- **GitHub Integration**: View GitHub stars for each project
- **Modern UI**: Clean and responsive interface for desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js (version 20.19 or higher — required by Vite 8)
- npm (or yarn / pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sangam14/cloudnativetools.git
   cd cloudnativetools
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Build the project for production into `dist/`
- `npm run preview` — Serve the production build locally
- `npm run lint` — Run ESLint over the project
- `npm run dedup` — Remove duplicate entries from `src/data/entries.js`
- `npm run deploy` — Build and publish `dist/` to the `gh-pages` branch

## 📚 Categories

The collection includes tools for:

- Cluster Management
- Pods Management
- Debugging & Troubleshooting
- Security Tools
- Monitoring & Observability
- Service Mesh
- Auto Scaling
- Development Tools
- Artificial Intelligence
- Continuous Integration & Delivery
- Platform Engineering
- Networking
- And more...

## 🤝 Contributing

We welcome contributions from the community! Here's how you can contribute:

### Adding a New Tool

1. Fork the repository
2. Edit `src/data/entries.js` and add your tool in the appropriate category (see [Tool Entry Schema](#-tool-entry-schema))
3. Run `npm run dedup` to make sure no duplicates were introduced
4. Run `npm run lint` and `npm run build` locally
5. Create a pull request with your changes

### Improving the Application

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make your changes
4. Submit a pull request

### Guidelines

- Make sure the tool is relevant to the Kubernetes/cloud native ecosystem
- Provide a concise and accurate description
- Include the appropriate category/tag
- Ensure there are no duplicates

## 🧩 Tool Entry Schema

Each entry in `src/data/entries.js` follows this shape:

```javascript
{
  title: "Your Tool Name",            // required — display name
  link: "https://link-to-tool",       // required — homepage / docs URL
  description: "Brief description",   // required — one short sentence
  github: "github-username/repo",     // optional — used to render the star count
  tag: "Category Name"                // required — must match an existing category
}
```

The repository ships with `dedup-entries.js`, a small Node script that
rewrites `src/data/entries.js` with duplicates removed (matched by `title`
+ `link`). Run it via `npm run dedup`.

## 🚢 Deployment

The site is deployed to GitHub Pages in two ways:

1. **Automated (recommended)** — every push to `main` triggers
   `.github/workflows/nodes.yml`, which builds the project and publishes
   `dist/` via the `actions/deploy-pages` action.
2. **Manual** — run `npm run deploy`, which builds the project and
   pushes the contents of `dist/` to the `gh-pages` branch using the
   [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.

## 🔧 Technologies Used

- [React 19](https://react.dev/)
- [Vite 8](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

## 👨‍💻 Maintainers

- [Sangam Biradar](https://twitter.com/sangamtwts)

---

**Star the repo if you find it useful!** ⭐
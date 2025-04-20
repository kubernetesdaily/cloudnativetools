# Cloud Native Tools Collection

A curated collection of tools for Kubernetes and the cloud native ecosystem, presented in an easy-to-browse web interface.

![Cloud Native Tools Collection Preview](./src/assets/Tools.png)

## 🌟 Features

- **Comprehensive Tool Directory**: Browse hundreds of tools for Kubernetes and cloud native development
- **Categorized Browsing**: Filter tools by categories like Cluster Management, Security, Monitoring, and more
- **Search Functionality**: Quickly find tools based on name or description
- **GitHub Integration**: View GitHub stars for each project
- **Modern UI**: Clean and responsive interface for desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/sangam14/cloudnativetools.git
   cd cloudnativetools
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run serve` - Serve the production build locally

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
2. Edit `src/data/entries.js` and add your tool in the appropriate category:
   ```javascript
   {
     title: "Your Tool Name",
     link: "https://link-to-tool",
     description: "Brief description of the tool",
     github: "github-username/repo", // Optional
     tag: "Category Name"
   }
   ```
3. Create a pull request with your changes

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

## 🔧 Technologies Used

- React
- Tailwind CSS
- Vite

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Maintainers

- [Sangam Biradar](https://twitter.com/sangamtwts)

---

**Star the repo if you find it useful!** ⭐
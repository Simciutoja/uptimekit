# UptimeKit Documentation

This repository contains the official documentation for [UptimeKit](https://github.com/uptimekit/uptimekit), an open-source, modern, and powerful status page and monitoring solution.

The documentation is built using [Mintlify](https://mintlify.com) and is hosted at [docs.uptimekit.io](https://docs.uptimekit.io).

## 🚀 Development

To preview the documentation locally, you need to install the [Mintlify CLI](https://www.npmjs.com/package/mint).

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

```bash
npm i -g mint
```

### Local Preview

Run the following command at the root of this repository:

```bash
mint dev
```

The documentation will be available at `http://localhost:3000`.

## � Structure

- `docs.json`: Configuration for the documentation (navigation, theme, etc.).
- `index.mdx`: The homepage of the documentation.
- `installation/`: Guides for setting up the dashboard and workers.
- `configuration/`: Detailed configuration options.
- `integrations/`: Documentation for third-party integrations (Discord, Telegram, etc.).
- `logo/`: Brand assets.
- `snippets/`: Reusable MDX components.

## 🤝 Contributing

We welcome contributions to the documentation! If you find a typo, outdated information, or want to add a new guide:

1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a Pull Request with a clear description of your improvements.

## 📄 License

The documentation is licensed under the MIT License. See `LICENSE` for more information.

<div align="center">
  <a href="https://uptimekit.dev">
    <img src="https://r2.uptimekit.dev/logos/uptimekit.svg" alt="UptimeKit Logo" width="120" height="120">
  </a>

  <h1 align="center">UptimeKit</h1>

  <p align="center">
    <strong>The modern open-source status page and monitoring solution.</strong>
  </p>
  
  <p align="center">
    <img src="https://shieldcn.dev/group/github/stars/uptimekit/uptimekit+github/forks/uptimekit/uptimekit+github/license/uptimekit/uptimekit.svg?variant=outline" alt="badges">
  </p>

  <br/>
</div>
<!--![GitHub Stars](https://www.shieldcn.dev/github/stars/uptimekit/uptimekit.svg?variant=secondary) ![Last commit](https://www.shieldcn.dev/github/last-commit/uptimekit/uptimekit.svg?variant=secondary) ![Release](https://www.shieldcn.dev/github/release/uptimekit/uptimekit.svg) ![CI](https://www.shieldcn.dev/github/ci/uptimekit/uptimekit.svg?variant=secondary) ![License](https://www.shieldcn.dev/github/license/uptimekit/uptimekit.svg?variant=branded)-->
<br/>

## ✨ Features

UptimeKit is designed to be the all-in-one solution for tracking your services' uptime and communicating with your users.

- 📊 **Monitoring** - Real-time uptime monitoring for your HTTP/TCP services.
- 🚦 **Status Pages** - Beautiful, customizable status pages for your users.
- 🔔 **Incidents** - Create and manage incident reports to keep users informed.
- 🏢 **Organizations** - Multi-tenant support with team management.
- 📈 **Analytics** - Detailed uptime and response time metrics.
- 🛠️ **Self-Hostable** - Full control over your data and infrastructure.
- 🔗 **Instatus Integration** - Display monitors from external instatus pages on your status page,

## How it works

Uptimekit is a distributed monitoring solution. You can have as many workers as you want and as many replicas of the app as you want.
The workers check with the app every 15 seconds to get their assigned monitors and run the checks whenever they have to.

## 🛠️ Getting Started

Follow these steps to get UptimeKit running locally on your machine.

### Prerequisites

- Redis
- PostgreSQL
- Clickhouse (optional)

### Install

1. **Download the docker-compose.yml and .env.example**

    ```bash
    curl -o docker-compose.yml https://raw.githubusercontent.com/uptimekit/uptimekit/main/docker-compose.yml && curl -L https://raw.githubusercontent.com/uptimekit/uptimekit/refs/heads/main/.env.example -o .env
    ```

2. **Edit these variables in the .env**

```bash
APP_SECRET=change_me_to_a_secure_secret
APP_URL=http://localhost:3000

# Status Page Configuration (Optional)
APP_STATUS_PAGE_DOMAIN=status.example.com
```

3. **Start the docker compose**

    ```bash
    docker compose up -d
    ```

4. Now follow the steps on the app. Enjoy :D

## 🎫 Support

Need help with UptimeKit? Join our community support room on Matrix:

**[Join the UptimeKit Matrix room](https://matrix.to/#/#uptimekit:irazz.lol)**

Room address: `#uptimekit:irazz.lol`

Use the room to ask questions, report problems, and connect with other UptimeKit users and contributors.

## 📂 Project Structure

```bash
uptimekit/
├── apps/
│   ├── dash/          # Main Dashboard application
│   ├── worker/        # Probe who actually pings the monitors
│   └── status-page/   # Public Status Page application
├── packages/
│   ├── api/           # Shared API definition & logic
│   ├── auth/          # Authentication configuration
│   ├── db/            # Database schema & Drizzle config
│   ├── scheduler/     # Scheduler application
│   └── config/        # Shared configuration (TS, ESLint, etc.)
└── ....
```

## 💝 Sponsors

Thank you to all our amazing sponsors who make this project possible!

**[Become a sponsor](https://github.com/sponsors/irazvan2745)** and get your logo here!

## 👀 Previews

### Default theme with length bars

![image](https://r2.uptimekit.dev/previews/default-lenght.png)

### Flat theme with length bars

![image](https://r2.uptimekit.dev/previews/flat-lenght.png)

### Signal theme with signal bars

![image](https://r2.uptimekit.dev/previews/signal-signal.png)

## 🤝 Contributing

We welcome contributions! Please check out our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and request features.

## 📄 License

This project is licensed under a [MIT License](LICENSE)

---

<div align="center">
  <sub>Built with ❤️ by the UptimeKit Team</sub>
</div>

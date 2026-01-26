# PiepsServer 🐤

A lightweight, TypeScript-based wrapper for the native Node.js HTTP server. **PiepsServer** is designed to simplify serving static files, managing CORS settings, and adding custom request handlers without the overhead of heavy frameworks.

## ✨ Features

* 🚀 **Seamless Setup:** Get your server up and running with just a few lines of code.
* 📂 **Static Middleware:** Automatically serve HTML, CSS, JS, images, and more from any directory.
* 🔍 **MIME-Type Support:** Built-in detection for over 15 common file formats.
* 🌐 **CORS Support:** Effortless configuration for Cross-Origin Resource Sharing.
* 🧩 **Flexible:** Supports both automated static routing and manual, low-level request handlers.

---

## 🛠 Installation

Since PiepsServer is currently a local module, copy the source files into your project directory.

**Prerequisites:** Ensure you have Node.js and TypeScript installed.

```bash
# Initialize your project (if not already done)
npm init -y

# Install required TypeScript dependencies
npm install --save-dev typescript @types/node

```

---

## 🚀 Quick Start (Usage)

There are two primary ways to use PiepsServer:

### 1. As a Static Web Server

Perfect for serving front-end applications (e.g., from a `src` or `dist` folder).

```typescript
import PiepsHttpServer from "./PiepsServer.ts";

const App = new PiepsHttpServer();

// Start server on port 3030
App.CreateServer(3030, "localhost");

// Configure CORS (Default: allow all)
App.SetCORS({ origin: "*" });

// Serve static files from the "src" directory
App.StaticMiddleWare("src");

```

### 2. With a Custom Request Handler

Ideal for building APIs or handling specific endpoints manually.

```typescript
import * as http from "node:http";
import PiepsHttpServer from "./PiepsServer.ts";

const server = new PiepsHttpServer();
server.CreateServer(4040, "localhost");

const myHandler: http.RequestListener = (req, res) => {
    if (req.url === "/api/data") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Hello from PiepsServer!" }));
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
};

server.AddHttpHandler(myHandler);

```

---

## 📖 API Documentation

### PiepsHttpServer

| Method | Description |
| --- | --- |
| `CreateServer(port, hostname)` | Initializes and starts the HTTP server. |
| `SetCORS(settings)` | Sets the allowed origins and CORS rules. |
| `AddHttpHandler(handler)` | Attaches a standard Node.js `RequestListener`. |
| `StaticMiddleWare(folder)` | Enables automatic file serving from the specified directory. |

### Supported File Types (MIME Types)

The middleware automatically detects and serves the following extensions:
`html`, `css`, `js`, `ico`, `png`, `jpg`, `jpeg`, `svg`, `json`, `txt`, `bin`, `webp`, `ttf`, `pdf`.

---

## 📂 Project Structure

* `PiepsServer.ts`: The core class for server control.
* `PiepsServerMiddelWare.ts`: Logic for file streaming and routing.
* `PiepsServerData.ts`: Configuration for MIME-types and content lists.

---

## ⚠️ Production Note

By default, CORS is set to `*`. For **production environments**, it is highly recommended to restrict access to your specific domain:

```typescript
App.SetCORS({ origin: "https://your-domain.com" });

```

---

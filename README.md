# PiepsServer 🐤

Ein leichtgewichtiger, TypeScript-basierter Wrapper für den nativen Node.js HTTP-Server. **PiepsServer** wurde entwickelt, um das Ausliefern von statischen Dateien, die Verwaltung von CORS-Einstellungen und das Hinzufügen von benutzerdefinierten Request-Handlern so einfach wie möglich zu gestalten.

## ✨ Features

* 🚀 **Einfaches Setup:** Erstelle einen funktionsfähigen Server mit nur wenigen Zeilen Code.
* 📂 **Static Middleware:** Automatisches Serving von statischen Dateien (HTML, CSS, JS, Bilder, etc.).
* 🔍 **MIME-Type Support:** Integrierte Erkennung für über 15 gängige Dateitypen.
* 🌐 **CORS Support:** Flexible Konfiguration der Cross-Origin Resource Sharing Regeln.
* 🧩 **Flexibilität:** Nutze automatisierte statische Routen oder definiere eigene, manuelle Request-Handler.

---

## 🛠 Installation

Da PiepsServer aktuell als lokales Modul konzipiert ist, kopiere die Quelldateien direkt in dein Projektverzeichnis.

**Voraussetzungen:** Node.js und TypeScript müssen installiert sein.

```bash
# Projekt initialisieren (falls noch nicht geschehen)
npm init -y

# Notwendige Abhängigkeiten für TypeScript installieren
npm install --save-dev typescript @types/node

```

---

## 🚀 Schnellstart (Usage)

Du kannst PiepsServer auf zwei Arten nutzen:

### 1. Als statischer Webserver

Ideal für das Deployment von Frontends (z. B. aus einem `src`- oder `dist`-Ordner).

```typescript
import PiepsHttpServer from "./PiepsServer.ts";

const App = new PiepsHttpServer();

// Server auf Port 3030 starten
App.CreateServer(3030, "localhost");

// CORS konfigurieren (Standard: alle erlauben)
App.SetCORS({ origin: "*" });

// Statische Dateien aus dem Ordner "src" bedienen
App.StaticMiddleWare("src");

```

### 2. Mit manuellem Request-Handler

Perfekt für kleine APIs oder spezifische Endpunkte.

```typescript
import * as http from "node:http";
import PiepsHttpServer from "./PiepsServer.ts";

const server = new PiepsHttpServer();
server.CreateServer(4040, "localhost");

const myHandler: http.RequestListener = (req, res) => {
    if (req.url === "/api/data") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Hallo von PiepsServer!" }));
    } else {
        res.writeHead(404);
        res.end("Nicht gefunden");
    }
};

server.AddHttpHandler(myHandler);

```

---

## 📖 API Dokumentation

### PiepsHttpServer

| Methode | Beschreibung |
| --- | --- |
| `CreateServer(port, hostname)` | Initialisiert und startet den HTTP-Server auf dem angegebenen Port. |
| `SetCORS(settings)` | Konfiguriert die erlaubten Origins (`CorsSettings`). |
| `AddHttpHandler(handler)` | Registriert einen klassischen Node.js `RequestListener`. |
| `StaticMiddleWare(folder)` | Aktiviert das automatische Servieren von Dateien aus dem Zielordner. |

### Unterstützte Dateitypen

Die Middleware erkennt automatisch folgende Endungen und setzt den korrekten `Content-Type`:
`html`, `css`, `js`, `ico`, `png`, `jpg`, `jpeg`, `svg`, `json`, `txt`, `bin`, `webp`, `ttf`, `pdf`.

---

## 📂 Projektstruktur

* `PiepsServer.ts`: Die Kernklasse zur Serversteuerung.
* `PiepsServerMiddelWare.ts`: Die Logik für das Datei-Streaming und Routing.
* `PiepsServerData.ts`: Konfigurationen für MIME-Types und Content-Listen.

---

## ⚠️ Sicherheitshinweis

Im Standard-Setup ist CORS auf `*` gesetzt. Für **Produktionsumgebungen** solltest du den Zugriff explizit einschränken:

```typescript
App.SetCORS({ origin: "https://deine-domain.de" });

```

---

Soll ich dir zusätzlich dabei helfen, eine passende `tsconfig.json` oder ein `package.json`-Skript zum Starten des Servers zu erstellen?

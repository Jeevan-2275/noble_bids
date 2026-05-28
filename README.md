<div align="center">

<!-- Waving Royal Gradient Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=7C3AED,db2777,d97706&height=180&section=header&text=NOBLEBID&fontSize=42&fontAlignY=45&animation=twinkling&desc=Dynamic%20Real-Time%20MERN%20Online%20Bidding%20and%20Auction%20Platform&descSize=15&descAlignY=65" width="100%" alt="NobleBid Banner" />

<br/>

<!-- Interactive Typing Header -->
<h1>
  <img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=600&size=28&duration=2500&pause=1000&color=db2777&center=true&vCenter=true&width=800&lines=Real-Time+Online+Bidding+Dashboard;Role-Based+JWT+Access+Controls;Integrated+Cloudinary+Media+Galleries;Automated+Email.js+Win+Alerts;SuperAdmin+Analytics+%26+Dispute+Log" alt="Typing SVG" />
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript-7C3AED?logo=javascript&logoColor=white&style=for-the-badge" alt="Top Language" />
  <img src="https://img.shields.io/badge/Stack-MERN_Stack-db2777?style=for-the-badge" alt="MERN Stack" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" alt="Database" />
  <img src="https://img.shields.io/badge/Postman-API_Docs-orange?logo=postman&logoColor=white&style=for-the-badge" alt="Postman" />
  <img src="https://img.shields.io/badge/License-MIT-d97706?style=for-the-badge" alt="License" />
</p>

</div>

---

## 🔨 The Secure & Scalable Bidding Universe

**NobleBid** is a highly dynamic, transparent online bidding system engineered using the **MERN Stack** (MongoDB, Express.js, React, Node.js). Designed to establish a safe, real-time environment for virtual commerce, this platform segments users into precise roles (Auctioneers, Bidders, and Super Admins) with customized dashboards, automated transaction checks, Cloudinary media pipelines, and dynamic notifications.

---

## 🚀 Key Modules & System Matrix

<div align="center">

| Role / Feature | Capabilities | Technologies / Tools |
| :--- | :--- | :--- |
| **👨💼 Auctioneer** | Create/Edit/Delete auctions, set initial bid, select end times, track live bidders. | Cloudinary SDK, MongoDB Mongoose |
| **🙋 Bidder** | Search ongoing auctions, place bids in real-time, monitor history, win item notifications. | Redux Toolkit, React Context, Axios |
| **👑 Super Admin** | Enforce fair-play, manage active users, resolve transaction disputes, view finance graphs. | Chart.js, JWT Role guards |
| **📩 Notifications** | Direct transaction, bid over, and winner alerts. | Email.js Service API, custom templates |
| **⏰ Automation** | Automatic auction end determinations and commission check schedules. | node-cron backend runners |

</div>

---

## 🏗️ Interactive System Architecture

Explore the operational lifecycles and background loops that govern NobleBid:

<details>
<summary>🔄 <b>1. The Bidding & Commission verification Pipeline</b></summary>
<br/>

From placing an initial bid to validating final commissions, trace how data changes state in MongoDB:

```mermaid
stateDiagram-v2
    [*] --> AuctionCreated : Auctioneer posts Item
    AuctionCreated --> LiveBiddingActive : Auction Start Date Reached
    LiveBiddingActive --> LiveBiddingActive : Bidders post values (Increments check)
    LiveBiddingActive --> AuctionEnded : End Date Reached (node-cron trigger)
    AuctionEnded --> NoBidsPlaced : Unsold (Return to inventory)
    AuctionEnded --> BidWinnerDeclared : Winner computed (Highest active bid)
    BidWinnerDeclared --> SendWinEmail : Trigger Email.js alert
    SendWinEmail --> CommissionPending : Awaiting 20% platform cut verification
    CommissionPending --> SubmitProof : Bidder uploads transaction receipt
    SubmitProof --> SuperAdminVerify : Admin audits invoice dashboard
    SuperAdminVerify --> CompleteSuccess : Commission cleared & item shipped
    SuperAdminVerify --> DisputeDisqualified : Fraud proof (Re-auction / Penalize)
    CompleteSuccess --> [*]
    DisputeDisqualified --> [*]
```
</details>

<details>
<summary>📡 <b>2. Full-Stack Data & Authentication Flow</b></summary>
<br/>

NobleBid runs on decoupled server-client models secured using state-of-the-art JWT authentication:

```mermaid
graph TD
    Client[React SPA Frontend Dashboard] -->|User action request| Express[Express.js API Server]
    Express -->|Token validation| JWT[jsonwebtoken / bcrypt]
    Express -->|Cron runners| Cron[node-cron scheduling]
    Express -->|Image upload streams| Cloudinary[Cloudinary Media API]
    Express -->|Alert triggers| Email[Email.js API]
    Express -->|Data models state| DB[(MongoDB Atlas Database)]
    
    Cron -->|Daily ended auction sweep| DB
    JWT -->|Verify Auctioneer/Admin status| Express
```
</details>

---

## 💻 Tech Stack & Operations

```
🧬 BACKEND CORE  :: Node.js • Express.js • MongoDB • Mongoose
🖼️ MEDIA STORE  :: Cloudinary API CDN
🔐 AUTHENTICATION :: Role-based JWT (jsonwebtoken) • bcrypt
📩 EMAIL ENGINE  :: Email.js templates Integration
⏰ CRON AGENTS   :: node-cron schedules
💻 FRONTEND WEB  :: React.js • Redux Toolkit (Slices) • Tailwind CSS
📊 VISUALIZATION :: Chart.js / react-chartjs-2
```

---

## 📂 Project Directory Structure

```
noble_bids/
├── BACKEND/                      # Node/Express Server
│   ├── automation/               # Background cron workers
│   │   ├── endedAuctionCron.js   # Automated winner declarations
│   │   └── verifyCommissionCron.js # Platform payment checks
│   ├── controllers/              # Request controllers
│   ├── database/                 # Mongoose connections
│   ├── middlewares/              # Role guards & global error handlers
│   ├── models/                   # Schema blueprints (users, bids, commissions)
│   ├── router/                   # API endpoint directories
│   ├── utils/                    # JWT tokens & mail utilities
│   ├── app.js                    # Core configurations
│   └── server.js                 # HTTP listener startup
└── Frontend/                     # React/Redux Client Dashboard
    ├── src/                      # Source core
    │   ├── custom-components/    # Shareable modular widgets
    │   ├── layout/               # Drawers & navbar headers
    │   ├── pages/                # Screens (Leaderboard, User Profiles, Bids)
    │   ├── store/                # Redux store structure
    │   │   ├── slices/           # State slices (auctionSlice, bidSlice, userSlice)
    │   │   └── store.js          # Main store root configuration
    │   └── App.jsx               # Navigation route hubs
```

---

## ⚙️ Interactive Customization Terminal

Explore how easy it is to customize and scale **NobleBid** parameters:

<details>
<summary>⏰ <b>1. Customizing the Cron Schedules</b></summary>

You can alter how frequently the system sweeps for ended auctions. Open [BACKEND/automation/endedAuctionCron.js](file:///c:/Users/admin/Desktop/noble_bids/BACKEND/automation/endedAuctionCron.js):
```javascript
import cron from "node-cron";

// Runs every minute to calculate dynamic endings seamlessly:
export const endedAuctionCron = () => {
  cron.schedule("*/1 * * * *", async () => {
    // Evaluation logic...
  });
};
```
</details>

<details>
<summary>💸 <b>2. Adjusting Platform Commission Cut</b></summary>

Change the platform service percentage details. Open [BACKEND/controllers/commissionController.js](file:///c:/Users/admin/Desktop/noble_bids/BACKEND/controllers/commissionController.js):
```javascript
const COMMISSION_PERCENTAGE = 0.20; // 20% flat commission rate
```
</details>

<details>
<summary>🔐 <b>3. Tweaking User JWT Token Expiry</b></summary>

Adjust active session expiration configurations. Open [BACKEND/utils/jwtToken.js](file:///c:/Users/admin/Desktop/noble_bids/BACKEND/utils/jwtToken.js):
```javascript
export const sendToken = (user, statusCode, message, res) => {
  const token = user.generateJsonWebToken();
  const cookieOptions = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 Days
    httpOnly: true,
  };
  // send response...
};
```
</details>

---

## 🚀 Setup & Launch Protocol

### 1. Configure Local Environments

Create a `.env` file inside the `BACKEND` directory:
```env
PORT=5000
MONGO_URI="mongodb+srv://<user>:<password>@cluster.mongodb.net/noblebids"
JWT_SECRET_KEY="ChooseAComplexCryptographicKeyHere"
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
CLOUDINARY_CLIENT_NAME="YourCloudinaryName"
CLOUDINARY_CLIENT_API_KEY="YourAPIKey"
CLOUDINARY_CLIENT_API_SECRET="YourSecret"
SMTP_SERVICE="gmail"
SMTP_MAIL="yourmail@gmail.com"
SMTP_PASSWORD="your-app-specific-password"
```

### 2. Launch Backend Server
```bash
cd BACKEND
npm install
npm run dev
```

### 3. Launch Frontend Client
```bash
cd ../Frontend
npm install
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser and start bidding!

---

## 📚 Postman Documentation  
All API endpoints, request bodies, and token payloads are meticulously cataloged in the live Postman suite:

[![Postman Docs Badge](https://img.shields.io/badge/Postman-Interactive_Docs-orange?style=for-the-badge&logo=postman)](https://documenter.getpostman.com/view/39190423/2sAYdeKrLc)

---

## 📄 License
This project is licensed under the terms of the **MIT License**.

---

<div align="center">

### 🌟 Go Win Your Next Bid!
*Empower your auction experience with seamless, secure real-time bidding.*

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=7C3AED,db2777,d97706&height=100&section=footer&animation=twinkling" width="100%" alt="Capsule Waving Footer"/>

</div>

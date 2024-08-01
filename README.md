


# IC-Market
IC-Market is a decentralized prediction market platform that leverages the ICP Chain Fusion. The platform enables users to create, participate in, and manage prediction markets with ease.

Table of Contents
Introduction
Features
Project Structure
Installation
Usage
Configuration
Contracts
Testing
Contributing
License
Introduction
IC-Market is designed to provide a decentralized platform where users can create and participate in prediction markets. The platform uses ICP Chain Fusion for deploying smart contracts and integrates various functionalities to ensure a seamless user experience.

Features
Decentralized Prediction Markets: Users can create and participate in prediction markets.
Smart Contract Integration: Multiple contracts for various functionalities.
User-friendly Interface: Easy-to-use frontend for interacting with the platform.
Project Structure

ic-market/
├── .devcontainer/
│   ├── Dockerfile
│   └── devcontainer.json
├── canisters/
├── contracts/
│   ├── Coprocessor.sol
│   ├── Icmarket.sol
│   ├── Migrations.sol
│   └── MyToken.sol
├── frontend/
│   ├── abis/
│   │   ├── Context.json
│   │   ├── ERC20.json
│   │   ├── IERC20.json
│   │   ├── IERC20Metadata.json
│   │   ├── Icmarket.json
│   │   ├── Migrations.json
│   │   ├── MyToken.json
│   │   └── PredictionMarketContract.json
│   ├── components/
│   │   ├── Chart/
│   │   ├── ChartContainer.tsx
│   │   ├── AdminMarketCard.tsx
│   │   ├── Filter.tsx
│   │   ├── MarketCard.tsx
│   │   ├── Navbar.tsx
│   │   └── PortfolioMarketCard.tsx
│   ├── contexts/
│   ├── pages/
│   │   ├── admin/
│   │   │   └── index.tsx
│   │   ├── market/
│   │   │   └── [id].tsx
│   │   ├── api/
│   │   │   └── hello.ts
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── portfolio.tsx
│   ├── public/
│   │   ├── favicon.ico
│   │   └── vercel.svg
│   ├── styles/
│   │   ├── Home.module.css
│   │   └── globals.css
│   ├── lib/
│   ├── migrations/
│   │   ├── 1_initial_migration.js
│   │   ├── 2_Mytoken_migration.js
│   │   └── 3_Icmarket_migration.js
│   ├── packages/
│   ├── script/
│   │   └── Coprocessor.s.sol
├── .gitignore
├── Caddyfile
├── Cargo.lock
├── Cargo.toml
├── README.md
├── deploy.sh
├── dfx.json
├── foundry.toml
Installation
To get started with IC-Market, follow these steps:

Clone the repository:

git clone https://github.com/your-repo/ic-market.git
cd ic-market
Install dependencies for the frontend:
bash
Kodu kopyala
cd frontend
npm install
Usage
Running the Frontend
To run the frontend application:


cd frontend
npm start
Configuration
The configuration for various components and hooks is stored in the frontend/contexts directory. Adjust the configurations as needed to match your setup.

Contracts
The smart contracts are located in the contracts directory. The main contracts include:

Coprocessor.sol: Auxiliary contract for additional functionalities.
Icmarket.sol: Core prediction market contract.
Migrations.sol: Migration contract for deploying and updating contracts.
MyToken.sol: Custom token contract for the market.
Testing
To run tests for the contracts:


cd contracts
npm test
Contributing
We welcome contributions to IC-Market! Please open an issue or submit a pull request on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for details.










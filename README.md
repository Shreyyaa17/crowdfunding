# Crowdfunding DApp
A decentralized crowdfunding platform built on Ethereum using Solidity, Hardhat, Web3.js, and Next.js. This project allows users to create campaigns, contribute funds, and withdraw contributions securely via smart contracts.

📌 Features
✅ Create and manage crowdfunding campaigns

✅ Contribute to campaigns with ETH

✅ Track campaign progress and contributors

✅ Blockchain-powered transparency and security

✅ Responsive UI using Tailwind CSS

🛠️ Tech Stack
Frontend: Next.js, React, Tailwind CSS

Blockchain: Solidity, Hardhat, Web3.js

Other: Node.js, MetaMask, Ganache (for local testing)

📂 Project Structure

crowdfunding-master/
 ├── Components/        # Reusable React components (Card, NavBar, etc.)
 ├── Context/           # Blockchain context and config (CrowdFunding.js)
 ├── contracts/         # Solidity smart contracts
 ├── pages/             # Next.js pages
 ├── public/            # Static assets
 ├── scripts/           # Deployment scripts
 ├── styles/            # Global CSS
 ├── test/              # Contract tests
 ├── hardhat.config.js  # Hardhat configuration
 └── package.json       # Project dependencies
 
⚡ Getting Started
1️⃣ Clone the repository
git clone https://github.com/Shreyyaa17/crowdfunding-dapp.git
cd crowdfunding-dapp

2️⃣ Install dependencies
npm install

3️⃣ Compile smart contracts
npx hardhat compile

4️⃣ Deploy contracts (local network)
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost

5️⃣ Run the frontend
npm run dev
Visit: http://localhost:3000

🔗 Smart Contracts
CrowdFunding.sol – Core contract managing campaigns and contributions

🚀 Deployment
For production deployment, you can use:

npm run build
npm start

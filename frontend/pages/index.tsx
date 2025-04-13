import { useState } from "react";
import { ethers } from "ethers";
import contractJson from "../artifacts/contracts/MeeteaToken.sol/MeeteaToken.json";

export default function Home() {
  const [account, setAccount] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask first!");
    const [acc] = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAccount(acc);
  };

  const deployContract = async () => {
    if (!window.ethereum) return alert("Install MetaMask first!");

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const factory = new ethers.ContractFactory(
      contractJson.abi,
      contractJson.bytecode,
      signer
    );

    const contract = await factory.deploy();
    await contract.waitForDeployment();
    setContractAddress(contract.target);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl text-green-400 font-bold mb-6">Deploy Meetea Token</h1>

      <button
        onClick={connectWallet}
        className="bg-green-600 px-6 py-2 rounded text-lg mb-4 hover:bg-green-700"
      >
        Connect Wallet
      </button>

      {account && <p className="mb-4">Connected: <span className="text-green-300">{account}</span></p>}

      <button
        onClick={deployContract}
        className="bg-white text-black px-6 py-2 rounded text-lg hover:bg-gray-300"
      >
        Deploy Token
      </button>

      {contractAddress && (
        <div className="mt-6 text-green-300">
          <p>Token deployed at:</p>
          <code className="break-words">{contractAddress}</code>
        </div>
      )}
    </div>
  );
}

# disperse-fork

Script for [web3playground](https://web3playground.io/) (using Ethers) below. It will:
* switch your MetaMask network to Gnosis Chain, adding it first if needed
* send a transaction to approve spending if needed
* send a transaction to disperse tokens

Runbook:
1. check contract address
1. replace CSV stub under `csv` with actual CSV contents
1. execute

```javascript
const fclTokenContract = {
  address: "0xe68856eb29B2FB39699286CcA7F10f90Ce8AE9De",
  abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
}
const disperseContract = {
  address: "0xDfAa5956d765936AD29E46fE40085B8b31D8c75E",
  abi: [{ "constant": false, "inputs": [{ "name": "token", "type": "address" }, { "name": "recipients", "type": "address[]" }, { "name": "values", "type": "uint256[]" }], "name": "disperseToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "recipients", "type": "address[]" }, { "name": "values", "type": "uint256[]" }], "name": "disperseEther", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }],
}

const csv = `
  0x0AB572e327178eA8C15c338705811476F78D7A0D,0.5
  0x6a7eB27407a50a4eb9d015EA2B0F2e1BcC724461,1.5
`;

Array.prototype.chunks = function (size) {
  const result = [];
  for (var i = 0, l = this.length; i < l; i += size) {
    result.push(this.slice(i, i + size));
  }
  return result;
};

const chainData = {
  chainId: `0x${(100).toString(16)}`,
  rpcUrls: ["https://rpc.gnosischain.com"],
  chainName: "Gnosis",
  nativeCurrency: {
    name: "xDai",
    symbol: "XDAI",
    decimals: 18,
  },
  blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
};

async function main() {
  const abiCoder = new ethers.utils.AbiCoder();

  const parsedCsv = csv.split("\n").slice(1, -1).map(s => s.trim().split(","));
  const recipients = parsedCsv.map(row => row[0]);
  const values = parsedCsv.map(row => row[1]).map(value => ethers.utils.parseEther(value));
  const total = values.reduce((prev, curr) => prev.add(curr), ethers.utils.parseEther("0"));

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  const userAddress = await signer.getAddress();
  console.log(`Using address: ${userAddress}`)

  try {
    await provider.send("wallet_switchEthereumChain", [{ chainId: chainData.chainId }]);
  } catch (switchError) {
    if (switchError.code === 4902) {
      await provider.send("wallet_addEthereumChain", [chainData]);
    }
  }

  const fclToken = new ethers.Contract(
    fclTokenContract.address,
    fclTokenContract.abi,
    provider,
  ).connect(signer);

  const currentAllowance = await fclToken.allowance(userAddress, disperseContract.address);
  console.log(`Current allowance: ${currentAllowance}`);

  if (currentAllowance.lt(total)) {
    await (await fclToken.approve(disperseContract.address, total)).wait(1);
  }

  const disperse = new ethers.Contract(
    disperseContract.address,
    disperseContract.abi,
    provider,
  ).connect(signer);

  console.log(`Number of recipients: ${recipients.length}`);
  console.log(`Total FCL: ${ethers.utils.formatEther(total.toString())}`);

  // Chunking by 500 to make sure the tx fits in the block.
  for (const page of parsedCsv.chunks(500)) {
    const pageRecipients = page.map(row => row[0]);
    const pageValues = page.map(row => row[1]).map(value => ethers.utils.parseEther(value));

    const tx = await disperse.disperseToken(
      fclTokenContract.address,
      pageRecipients,
      pageValues.map(x => abiCoder.encode(["uint256"], [x])),
    );

    console.log(tx);
  }
}
```

# disperse-fork

Stub for web3playground (Ethers) below:
1. replace csv
1. check contract address
1. paste
1. change network
1. execute

```javascript
const disperseABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "token",
        "type": "address"
      },
      {
        "name": "recipients",
        "type": "address[]"
      },
      {
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "disperseToken",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipients",
        "type": "address[]"
      },
      {
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "disperseEther",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
];

const csv = `
  0x0AB572e327178eA8C15c338705811476F78D7A0D,0.4
  0x6a7eB27407a50a4eb9d015EA2B0F2e1BcC724461,1.4
`;

async function main() {
  const parsedCsv = csv.split("\n").slice(1,-1).map(s => s.trim().split(","));
  const recipients = parsedCsv.map(row => row[0]);
  const values = parsedCsv
    .map(row => row[1])
    .map(value => ethers.utils.parseEther(value));
  const total = values.reduce((prev, curr) => prev.add(curr), ethers.utils.parseEther("0"));

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  const disperse = new ethers.Contract(
    "0x58b28458849144d398d6482478c39708cdA2e39A",
    disperseABI,
    provider,
  ).connect(signer);

  console.log(recipients, values, total);

  const abiCoder = new ethers.utils.AbiCoder();
  const tx = await disperse.disperseEther(
    recipients,
    values.map(x => abiCoder.encode(["uint256"], [x])),
    { value: total },
  );
  
  console.log(tx);
}
```

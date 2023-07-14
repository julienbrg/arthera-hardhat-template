# Arthera Hardhat Boilerplate

## Motivation

Facilitate the prototyping of decentralized apps to deploy to Arthera Testnet.

## Install

```
npm i
```

## Test

```
npx hardhat test
```

## Deploy

Create a `.env` file:

```
cp .env.example .env
```

Add your own private key in the `.env` file, then: 

```
npx hardhat run scripts/deploy.js --network arthera-testnet
```

You can use the `increment.js` script to increment the value of `x`: 

```
npx hardhat run scripts/increment.js --network arthera-testnet
```

## Versions

- Node [v18.15.0](https://nodejs.org/uk/blog/release/v18.15.0/)
- NPM [v9.5.0](https://github.com/npm/cli/releases/tag/v9.5.0)
- Hardhat[v2.17.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%402.17.0)
- OpenZeppelin Contracts [v4.9.2](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v4.9.2)

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
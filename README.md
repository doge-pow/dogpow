# Experiment initiated

This is an interesting experiment where all fees paid will enter a prize pool. We will define a specific airdrop ratio for each minting.

We will not issue any other tokens; the airdrop prize will be $DOGE.

For each minting **2 $DOGE** will be added to the prize pool.

## Interesting approach

We initiated at block height 5,196,128

[d4f47f61366d722c31c7e886d3c1d76ef5cb34df0f6314e59d0310a07bf76a36i0](https://wonky-ord.dogeord.io/shibescription/d4f47f61366d722c31c7e886d3c1d76ef5cb34df0f6314e59d0310a07bf76a36i0)

```
{ 
  "p": "drc-20-pow",
  "op": "deploy",
  "tick": "dogw",
  "bitwork": "d4f47",
  "max": "210000000",
  "lim": "1000"
}
```

1. Everyone who mints will receive a reward.
2. The reward for each mint will be different.
3. You must hold your DOGPOW to be eligible for the snapshot.
4. Let's F***ing Go

You can use the [Doge Labs Wallet extension](https://chromewebstore.google.com/detail/doge-labs-wallet/jiepnaheligkibgcjgjepjfppgbcghmp) to manage your DOGE.

## Installation

If you don't have it, please download and install it from the official [Node.js](https://nodejs.org/) website.

- node.js v20.12.x
- npm 10.1.x

```
cd dogepow

npm install
```

1. Create wallet:
.wallet.json file will be generated. Please keep it safe.

```
node . wallet new
```

2. Sync wallet:
Confirm your balance and the available UTXOs.

```
node . wallet sync
```

3. Splite wallet:
If you are minting a lot, you can split up your UTXOs
Note: This feature will distribute your $DOGE evenly.

```
node . wallet split <count>
```

4. Start mint:
The sending and receiving addresses must not be the same.

```
node . mint <receive address> <file path>

Example:
node . mint DAHWPRWDUhMvxbdKnGWy4bNHQ9fRGKjUVg mint.txt
```

5. Set bitwork:
d4f47 = DOG

```
cd .env

BITWORK='d4f47'
```
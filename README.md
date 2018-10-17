# Ethereum Dapp Helloworld

This is an example about the Ethereum Dapp Helloworld.

## I. Required

### 1. Knowledge

1. [Blockchain](https://en.wikipedia.org/wiki/Blockchain) & [What is blockchain technology](https://blockgeeks.com/guides/what-is-blockchain-technology/)
2. [Ethereum](https://www.ethereum.org/)

### 2. Development tools

1. [Git](https://git-scm.com/)
2. [NodeJs](https://nodejs.org/en/)
3. [Truffle](https://truffleframework.com/truffle)
4. [Ganache](https://truffleframework.com/ganache)
5. [Solidity](https://solidity.readthedocs.io/en/v0.4.25/#)

## II. Installed

### 1. Git clone

~~~bash
    git clone https://github.com/Vilisag/ethereum-dapp-helloworld.git
    cd ethereum-dapp-helloworld
~~~

### 2. Install `NodeJs` packages

~~~bash
    npm install
~~~

### 3. Run Ganache

*Note: Default Ganache  network have to be `http://127.0.0.1:7545` (can be changed from configuration)*

### 4. Compile Smart contract

~~~bash
    truffle console --network ganache
    migrate --reset --compile-all
    .exit
~~~

### 5. Build frontend app

~~~bash
    npm run builddev
~~~

### 6. Run frontend app

~~~bash
    npm run development
~~~

## III. Note

- This is an example about the Ethereum Dapp. Reader can refer the source code to research about Ethereum Dapp.
- The idea and source code was refer from http://www.dappuniversity.com/articles/the-ultimate-ethereum-dapp-tutorial and was modify by the author.
- The frontend used the [`webpack-mix.js`](https://github.com/devanandb/webpack-mix/tree/master/docs) to compile `js`, `css` files.
- Also used the [`live-server`](https://www.npmjs.com/package/live-server) to run the development server.
  
## IV. Books

- [Mastering Blockchain](http://ibs.edu.sg/repos/MASTERING%20BLOCKCHAIN%201ST%20EDITION.pdf)
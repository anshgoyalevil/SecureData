# SecureData
A collection of data encrypted using AES-256-CBC Algorithm for Disaster Recovery.
It's secure enough that you can store your passwords on a public repository. Just make sure the key is not public (indeed store it in a really really secure place) 😄

### How it works?

- It uses [`encryptox`](https://www.npmjs.com/package/encryptox) npm package to encrypt the data using AES-256-CBC Algorithm.
- `encryptox` is also developed by me. Feel free to checkout :)

### How to use it?

- Clone the repository
- Run `npm install -g encryptox` to install the package globally
- Run `node index.js <encrypt/decrypt>`
- Make sure you place your 32-byte (256-bit) key inside the `key.pem` file in the root directory
- Place your data inside the `/data` directory. Run `node index.js encrypt` to create the empty directories.

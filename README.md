# SecureData
A collection of data encrypted using AES-256-CBC Algorithm for Disaster Recovery

### How it works?

- It uses [`encryptox`](https://www.npmjs.com/package/encryptox) npm package to encrypt the data using AES-256-CBC Algorithm.

### How to use it?

- Clone the repository
- Run `npm install -g encryptox` to install the package globally
- Run `node index.js <encrypt/decrypt>`
- Make sure you place your key inside the `key.pem` file in the root directory
- Place your data inside the `/data` directory. Run `node index.js encrypt` to create the empty directories.
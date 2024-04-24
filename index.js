#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const dataFolderPath = './data';
const encryptedFolderPath = './encrypted';
const decryptedFolderPath = './decrypted';

// Ensure data, encrypted and decrypted folders exist

if (!fs.existsSync(dataFolderPath)) {
    fs.mkdirSync(dataFolderPath);
}

if (!fs.existsSync(encryptedFolderPath)) {
    fs.mkdirSync(encryptedFolderPath);
}

if (!fs.existsSync(decryptedFolderPath)) {
    fs.mkdirSync(decryptedFolderPath);
}

// Function to encrypt or decrypt a file
function encryptDecryptFile(operation, filename, key) {
    const inputFilePath = path.join(operation === 'encrypt' ? dataFolderPath : encryptedFolderPath, filename);
    const outputFolder = operation === 'encrypt' ? encryptedFolderPath : decryptedFolderPath;

    // Execute encryptox command
    try {
        execSync(`encryptox ${operation} ${inputFilePath} ${key} ${outputFolder}`);
        console.log(`${filename} ${operation}ed successfully.`);
    } catch (error) {
        console.error(`Error ${operation}ing ${filename}: ${error}`);
    }
}

// Function to process files in a folder
function processFiles(operation, key) {
    const folderPath = operation === 'encrypt' ? dataFolderPath : encryptedFolderPath;
    fs.readdirSync(folderPath).forEach(filename => {
        encryptDecryptFile(operation, filename, key);
    });
}

// Read key from key.pem
const key = fs.readFileSync('key.pem', 'utf-8').trim();

// Check command-line arguments
const args = process.argv.slice(2);
if (args.length !== 1 || !['encrypt', 'decrypt'].includes(args[0])) {
    console.error('Usage: index.js <encrypt/decrypt>');
    process.exit(1);
}

// Encrypt or decrypt files based on command-line argument
const operation = args[0];
processFiles(operation, key);

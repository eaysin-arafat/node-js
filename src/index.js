const crypto = require("node:crypto");

const start = new Date();

crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("Hash: ", new Date() - start);

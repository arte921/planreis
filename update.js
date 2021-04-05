#!/usr/bin/env node

const {
    updateMultiplanner
} = require('multiplanner');

(async () => {
    updateMultiplanner(process.argv[2]);
})();
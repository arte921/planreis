#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const formatteerReis = require('./functies/formatteerReis.js');

const {
    multiReis,
    planReis,
} = require("multiplanner");

(async () => {
    const file = process.argv[2];
    if (!file) return console.log("Geef een bestand op met de reis");
    const rawRoute = await fs.promises.readFile(path.join(process.cwd(), process.argv[2]));
    if (!rawRoute) return console.log("Bestand niet gevonden.");
    const route = rawRoute.toString();
    const reisJSON = multiReis(route);
    const reis = await planReis(reisJSON);
    const reisScriptNederlands = formatteerReis(reis);
    console.log(reisScriptNederlands);
})();
const fs = require("fs");
const manifest = require("../manifest.json");
const dotenv = require("dotenv");

dotenv.config();

const injectedStartUrl = process.env.START_URL;

manifest.start_url = injectedStartUrl;

fs.writeFileSync("../manifest.json", JSON.stringify(manifest, null, 2));

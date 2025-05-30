import fs from "fs"; // fs for file system operations
import path from "path"; // path for handling file paths
import { fileURLToPath } from "url"; // fileURLToPath for converting URL to file path

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // get the directory name of the current module

const cachePath = path.join(__dirname, "cache", "fake-cache.json"); // path to the cache file
const cache = JSON.parse(fs.readFileSync(cachePath, "utf8")); // read the cache file and parse it as JSON

const userQuery = process.argv.slice(2).join(" ") || "tell me about me"; // query from command line

const found = cache.find((c) => userQuery.toLowerCase().includes(c.role)); // find a cache entry where the user query includes the role of the cache entry

// if a matching cache entry is found, log its kv_cache and content
if (found) {
  console.log(`using precomputed KV-cache: ${found.kv_cache}`); // log the kv_cache of the found entry
  console.log(`\n answer:\n${found.content}`); // log the content of the found entryt
} else {
  console.log(" no matching cache found for your query"); // log if no matching cache entry is found
}

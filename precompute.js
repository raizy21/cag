import fs from "fs"; // fs for file system operations
import path from "path"; // path for handling file paths
import { fileURLToPath } from "url"; // fileURLToPath for converting URL to file path

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // get the directory name of the current module

const docPath = path.join(__dirname, "data", "docs.txt"); // path to the document file
const text = fs.readFileSync(docPath, "utf8"); // read the document file as a string

const chunks = text
  .split(/\n(?=[a-z ]+:\s*$)/gim)
  .map((chunk) => chunk.trim())
  .filter(Boolean); // split the text into chunks based on the pattern of a line starting with lowercase letters followed by a colon, trim whitespace, and filter out empty chunks

const fakeCaches = chunks.map((chunk, index) => ({
  id: `chunk-${index}`,
  role: chunk.split(":")[0].trim().toLowerCase(),
  content: chunk,
  kv_cache: `CACHE_FOR_${chunk.slice(0, 20)}...`,
})); // create fake cache objects for each chunk with an id, role, content, and kv_cache

fs.mkdirSync(path.join(__dirname, "cache"), { recursive: true }); // create a cache directory if it doesn't exist

fs.writeFileSync(
  path.join(__dirname, "cache", "fake-cache.json"),
  JSON.stringify(fakeCaches, null, 2)
); // write the fake cache objects to a JSON file in the cache directory, formatted with 2 spaces for readability

console.log(` cached ${fakeCaches.length} chunks of data`); // log the number of cached chunks data

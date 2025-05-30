# cache-augmented generation (cag)

this simple demo project shows how cag workflows work.

a minimal cag workflow that lets a generative ai model answer with low-latency, domain-specific info by preloading and caching relevant text chunks ahead of time.

# overview

- eliminates vector db round-trips for blazing-fast responses
- keeps answers consistent and deterministic

# running this demo

to run this demo project, you need a recent version of [node.js](https://nodejs.org) installed on your system. you also need an [openai account](https://platform.openai.com/) (for access to their apis).

you need to generate an api key for openai.

run:

```bash
npm install
```

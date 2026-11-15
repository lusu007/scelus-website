import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  // The public build script runs this adapter; call Next.js directly to avoid recursion.
  buildCommand: "npm run build:next",
};

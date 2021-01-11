//@ts-check

const fs = require("fs").promises;
const path = require("path");
const child_process = require("child_process");

module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log("Setting up Cloudsmith authentication");

    /** @type {string} */
    const cloudsmith_token = process.env.CLOUDSMITH_TOKEN;
    if (cloudsmith_token) {
      child_process.execSync("git config --global credential.helper store");
      let credentials_path = path.join(process.env.HOME, ".git-credentials");
      let credentials = `https://token:${cloudsmith_token}@dl.cloudsmith.io\n`;
      await fs.writeFile(credentials_path, credentials);
    } else {
      console.warn("`CLOUDSMITH_TOKEN` not set, skipping authentication setup");
    }
  },
};

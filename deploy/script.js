/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    // branch setting
    const targetBranch = 'deploy';
    const mainBranch = 'master'; // main / master
    // init targetBranch
    await execa("git", ["checkout", "--orphan", targetBranch]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", targetBranch]);
    console.log("Pushing to " + targetBranch + "...");
    await execa("git", ["push", "origin", "HEAD:build", "--force"]);
    console.log("Successfully pushed to " + targetBranch + ".");
    console.log("Checkout to " + mainBranch + ".");
    await execa('git', ['checkout', '-f', mainBranch]);
    await execa("git", ["branch", "-D", targetBranch]);
    console.log("Successfully deployed.");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();

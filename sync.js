"use strict";

require("dotenv").config({ silent: true });

const rsync = require("rsyncwrapper");

const sshUser = process.env.SSH_USER || "or <ENTER SSH USERNAME>";
const sshHost = process.env.SSH_HOST || "or <ENTER SSH HOST>";

const fromFolder = "./src/"; // use a trailing backslash for recursive
const toFolder = "path/to/folder"; // don't use a trailing backslash

const excludedFiles = [
  ".DS_Store",
  ".gitkeep"
];

rsync({
  src: fromFolder,
  dest: `${ sshUser }@${ sshHost }:${ toFolder }`,
  recursive: true,
  exclude: excludedFiles
}, (error, stdout, stderr, cmd) => {
  if (error) {
    return console.log(error.message, stdout, stderr, cmd);
  } else {
    return console.log(`--> ${ fromFolder } sucessfully synced with ${ toFolder }`);
  }
});

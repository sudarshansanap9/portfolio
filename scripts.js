
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Determine which command to run based on the argument
const scriptName = process.argv[2];

// Define our scripts
const scripts = {
  'dev': 'node ./node_modules/vite/bin/vite.js',
  'build': 'node ./node_modules/vite/bin/vite.js build',
  'build:dev': 'node ./node_modules/vite/bin/vite.js build --mode development',
  'preview': 'node ./node_modules/vite/bin/vite.js preview'
};

// Check if the script exists
if (!scripts[scriptName]) {
  console.error(`Unknown script "${scriptName}"`);
  console.log('Available scripts:', Object.keys(scripts).join(', '));
  process.exit(1);
}

// Execute the script
console.log(`Running script: ${scriptName}`);
exec(scripts[scriptName], { stdio: 'inherit' }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing script: ${error}`);
    return;
  }
  console.log(stdout);
  if (stderr) console.error(stderr);
});


const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Determine which command to run based on the argument
const scriptName = process.argv[2];

// Define our scripts
const scripts = {
  'dev': 'vite',
  'build': 'vite build',
  'build:dev': 'vite build --mode development',
  'preview': 'vite preview'
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

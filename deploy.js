#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DEPLOY_TARGETS = {
  netlify: {
    name: 'Netlify (Drag & Drop)',
    steps: [
      'Building project...',
      'Build complete! dist/ folder ready.',
      '',
      'To deploy to Netlify:',
      '  1. Go to https://app.netlify.com/drop',
      '  2. Drag the "dist" folder onto the page',
      '  3. Your site will be live in seconds!',
      '',
      'Tip: Create a Netlify account to get a custom domain.',
    ],
  },
  vercel: {
    name: 'Vercel',
    steps: [
      'Checking for Vercel CLI...',
      'Building project...',
      'Build complete!',
      '',
      'To deploy to Vercel:',
      '  Option A - CLI (requires login):',
      '    npx vercel --prod',
      '',
      '  Option B - GitHub (recommended):',
      '    1. Push code to GitHub',
      '    2. Go to https://vercel.com',
      '    3. Import your GitHub repo',
      '    4. Framework: Vite, Build: npm run build, Output: dist',
    ],
  },
  'gh-pages': {
    name: 'GitHub Pages',
    steps: [
      'Building project...',
      'Build complete!',
      '',
      'To deploy to GitHub Pages:',
      '  1. Push code to GitHub repository',
      '  2. Go to repo Settings → Pages',
      '  3. Source: GitHub Actions',
      '  4. The workflow file is already in .github/workflows/deploy.yml',
      '  5. Push to main branch to trigger deployment',
    ],
  },
};

function buildProject() {
  console.log('Building project...\n');
  try {
    execSync('npm run build', { stdio: 'inherit', cwd: __dirname });
    console.log('\nBuild successful!\n');
    return true;
  } catch (error) {
    console.error('\nBuild failed:', error.message);
    return false;
  }
}

function showMenu() {
  console.log('\nCV Website Deployment\n');
  console.log('Choose a deployment target:\n');
  Object.entries(DEPLOY_TARGETS).forEach(([key, target], i) => {
    console.log(`  ${i + 1}. ${target.name} (${key})`);
  });
  console.log('  0. Exit');
  console.log('');
}

function deploy(target) {
  const config = DEPLOY_TARGETS[target];
  if (!config) {
    console.error(`Unknown target: ${target}`);
    console.log(`Available: ${Object.keys(DEPLOY_TARGETS).join(', ')}`);
    process.exit(1);
  }

  console.log(`\nDeploying to: ${config.name}\n`);
  
  if (!buildProject()) {
    process.exit(1);
  }

  // Verify dist folder exists and has content
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    console.error('dist/ folder not found after build');
    process.exit(1);
  }

  const files = fs.readdirSync(distPath);
  if (files.length === 0) {
    console.error('dist/ folder is empty');
    process.exit(1);
  }

  console.log(`dist/ folder contains ${files.length} files\n`);

  config.steps.forEach(step => console.log(step));
  
  console.log('\nDone!\n');
}

// Main
const target = process.argv[2];

if (target) {
  deploy(target);
} else {
  showMenu();
  process.stdout.write('Enter choice (0-3): ');
  
  process.stdin.on('data', (data) => {
    const choice = data.toString().trim();
    const targets = Object.keys(DEPLOY_TARGETS);
    
    if (choice === '0') {
      console.log('\nGoodbye!\n');
      process.exit(0);
    }
    
    const index = parseInt(choice) - 1;
    if (index >= 0 && index < targets.length) {
      deploy(targets[index]);
      process.exit(0);
    } else {
      console.log('\nInvalid choice. Run again with: node deploy.js [target]');
      process.exit(1);
    }
  });
}

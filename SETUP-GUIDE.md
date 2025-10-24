# Setting Up the Demo Project

## Complete Setup Guide for Presenters

This guide walks you through setting up the GitHub Actions demo project from scratch, including all integrations and secrets.

---

## 📋 Prerequisites

Before you begin, make sure you have:

- [x] GitHub account
- [x] Node.js 18+ installed
- [x] Git installed
- [x] VS Code or your preferred editor
- [x] Terminal/command line access

Optional (for deployment):
- [ ] Vercel account (free tier is fine)
- [ ] Slack workspace for notifications

---

## 🚀 Step 1: Clone and Setup Locally

### 1.1 Clone the Repository

\`\`\`bash
# Clone the project
git clone <your-repo-url>
cd automation

# Install dependencies
npm install
\`\`\`

### 1.2 Verify Installation

\`\`\`bash
# Run tests
npm test

# Expected output: All tests passing ✅

# Run linter
npm run lint

# Start dev server
npm run dev
\`\`\`

Visit http://localhost:3000 to see the app running.

---

## 🔧 Step 2: Create GitHub Repository

### 2.1 Create New Repository

1. Go to https://github.com/new
2. Repository name: \`github-actions-demo\`
3. Description: "Demo project for GitHub Actions presentation"
4. Choose **Public** (for unlimited Actions minutes)
5. Do NOT initialize with README (we already have one)
6. Click **Create repository**

### 2.2 Push Code to GitHub

\`\`\`bash
# Initialize git (if not already done)
git init

# Add remote
git remote add origin https://github.com/YOUR-USERNAME/github-actions-demo.git

# Add all files
git add .

# Commit
git commit -m "Initial commit - GitHub Actions demo project"

# Push to main branch
git push -u origin main
\`\`\`

### 2.3 Verify Workflows

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see workflows starting to run automatically!

---

## 🔐 Step 3: Configure Secrets

### For Vercel Deployment (Optional)

#### 3.1 Get Vercel Tokens

\`\`\`bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Get your tokens
vercel env ls
\`\`\`

After running \`vercel link\`, you'll find:
- \`.vercel/project.json\` - contains \`orgId\` and \`projectId\`

#### 3.2 Create Vercel Token

1. Go to https://vercel.com/account/tokens
2. Click **Create Token**
3. Name it: "GitHub Actions Demo"
4. Copy the token (you'll only see it once!)

#### 3.3 Add Secrets to GitHub

1. Go to your repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these secrets:

| Secret Name | Value | Where to Find |
|-------------|-------|---------------|
| \`VERCEL_TOKEN\` | Token you just created | Vercel account tokens |
| \`VERCEL_ORG_ID\` | Found in \`.vercel/project.json\` | \`"orgId": "..."\` |
| \`VERCEL_PROJECT_ID\` | Found in \`.vercel/project.json\` | \`"projectId": "..."\` |

### For Slack Notifications (Optional)

#### 3.4 Create Slack Webhook

1. Go to https://api.slack.com/apps
2. Click **Create New App** → **From scratch**
3. App name: "GitHub Actions Bot"
4. Choose your workspace
5. Click **Incoming Webhooks** → Enable it
6. Click **Add New Webhook to Workspace**
7. Choose a channel (e.g., #deployments)
8. Copy the webhook URL

#### 3.5 Add Slack Secret

Add another secret in GitHub:
- Name: \`SLACK_WEBHOOK_URL\`
- Value: The webhook URL from Slack

### For Code Coverage (Optional)

#### 3.6 Setup Codecov

1. Go to https://codecov.io
2. Sign in with GitHub
3. Add your repository
4. Copy the upload token
5. Add secret:
   - Name: \`CODECOV_TOKEN\`
   - Value: Token from Codecov

---

## 🌍 Step 4: Configure Environments

### 4.1 Create Production Environment

1. Go to **Settings** → **Environments**
2. Click **New environment**
3. Name: \`production\`
4. Configure:
   - ✅ **Required reviewers**: Add yourself
   - ✅ **Wait timer**: 0 minutes
   - ✅ **Deployment branches**: Selected branches → \`main\`

### 4.2 Create Staging Environment

1. Click **New environment** again
2. Name: \`staging\`
3. Configure:
   - ⬜ No required reviewers
   - ✅ **Deployment branches**: Selected branches → \`develop\`

---

## ⚡ Step 5: Enable GitHub Actions

### 5.1 Configure Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under **Actions permissions**:
   - Select **Allow all actions and reusable workflows**
3. Under **Workflow permissions**:
   - Select **Read and write permissions**
   - ✅ Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

### 5.2 Configure Concurrency (Optional)

In **Settings** → **Actions** → **General**:
- Under **Workflow concurrency**:
  - Choose appropriate concurrency limits

---

## 🧪 Step 6: Test Your Setup

### 6.1 Create a Test Branch

\`\`\`bash
# Create and checkout new branch
git checkout -b test/setup-verification

# Make a small change
echo "// Setup test" >> src/utils/math.ts

# Commit and push
git add .
git commit -m "Test: Verify GitHub Actions setup"
git push origin test/setup-verification
\`\`\`

### 6.2 Verify Workflows Run

1. Go to **Actions** tab
2. You should see:
   - ✅ CI workflow running
   - ✅ Matrix workflow running
3. Wait for them to complete
4. All should pass with green checkmarks

### 6.3 Create a Pull Request

1. Go to **Pull requests** tab
2. Click **New pull request**
3. Base: \`main\` ← Compare: \`test/setup-verification\`
4. Click **Create pull request**
5. Verify:
   - ✅ PR checks workflow runs
   - ✅ Bot comment appears
   - ✅ Status checks show in PR

---

## 🔄 Step 7: Test Deployment (Optional)

### 7.1 Merge to Main

1. If you configured Vercel:
   - Merge the PR to \`main\`
   - Go to **Actions** tab
   - Watch deployment workflow run
   - Check Slack for notification (if configured)

### 7.2 Manual Deployment Test

\`\`\`bash
# Go to Actions tab
# Select "Deploy to Production"
# Click "Run workflow"
# Select branch: main
# Click "Run workflow"
\`\`\`

If you set up environment protection:
- You'll see a "Review pending" status
- Click **Review deployments**
- Approve and deploy

---

## 📊 Step 8: Add Status Badges

### 8.1 Get Badge URLs

1. Go to **Actions** tab
2. Click on a workflow (e.g., "CI - Continuous Integration")
3. Click the **•••** menu (top right)
4. Click **Create status badge**
5. Copy the Markdown

### 8.2 Update README

\`\`\`markdown
# At the top of README.md, replace the placeholder badges:

![CI](https://github.com/YOUR-USERNAME/github-actions-demo/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/YOUR-USERNAME/github-actions-demo/actions/workflows/deploy.yml/badge.svg)
\`\`\`

Commit and push:
\`\`\`bash
git add README.md
git commit -m "Add workflow status badges"
git push origin main
\`\`\`

---

## ✅ Setup Verification Checklist

Go through this checklist to ensure everything is working:

### Repository Setup
- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] README is visible

### GitHub Actions
- [ ] Workflows folder exists (\`.github/workflows/\`)
- [ ] CI workflow runs on push
- [ ] All jobs complete successfully
- [ ] Artifacts are uploaded

### Secrets Configuration
- [ ] Vercel secrets added (if using deployment)
- [ ] Slack webhook added (if using notifications)
- [ ] Codecov token added (if using coverage)
- [ ] Secrets are not visible in logs

### Environments
- [ ] Production environment created
- [ ] Staging environment created
- [ ] Deployment protection rules set

### Permissions
- [ ] Read/write permissions enabled
- [ ] Actions can create PRs

### Testing
- [ ] All tests pass locally (\`npm test\`)
- [ ] Linting passes locally (\`npm run lint\`)
- [ ] Build succeeds locally (\`npm run build\`)
- [ ] Test PR triggers workflows
- [ ] Status checks appear in PR

### Deployment (Optional)
- [ ] Deployment workflow runs
- [ ] App deploys to Vercel successfully
- [ ] Slack notification received
- [ ] Environment protection works

---

## 🐛 Troubleshooting

### Problem: Workflows not running

**Check:**
1. Go to **Settings** → **Actions** → verify Actions are enabled
2. Check if \`.github/workflows/\` folder exists in your repository
3. Verify YAML syntax with [YAML Lint](http://www.yamllint.com/)

**Solution:**
\`\`\`bash
# Verify workflows exist
ls -la .github/workflows/

# Check git tracking
git ls-files .github/workflows/
\`\`\`

---

### Problem: "Resource not accessible" error

**Cause:** Missing permissions

**Solution:**
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Re-run the workflow

---

### Problem: Secrets not working

**Check:**
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Verify secret names match exactly (case-sensitive!)
3. Secrets should NOT have quotes around values

**Debug:**
\`\`\`yaml
# Add to workflow (temporarily)
- name: Debug secrets
  run: |
    echo "Secret exists: ${{ secrets.VERCEL_TOKEN != '' }}"
    # DO NOT echo the actual secret value!
\`\`\`

---

### Problem: Tests pass locally but fail in CI

**Common causes:**
1. Different Node versions
2. Missing dependencies
3. Environment-specific code
4. Timezone differences

**Solution:**
\`\`\`yaml
# Match your local Node version in workflow
- uses: actions/setup-node@v4
  with:
    node-version: '18.x'  # Use your version
\`\`\`

---

### Problem: Deployment fails

**Check:**
1. Verify all Vercel secrets are set correctly
2. Check Vercel CLI is linked: \`vercel link\`
3. Verify project exists in Vercel dashboard

**Get detailed logs:**
\`\`\`yaml
- name: Deploy with verbose logging
  run: vercel --prod --debug
\`\`\`

---

## 📞 Getting Help

### GitHub Actions Documentation
- [Getting Started](https://docs.github.com/en/actions/quickstart)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Troubleshooting](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows)

### Community Support
- [GitHub Community Forum](https://github.community/c/code-to-cloud/github-actions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-actions)

### Testing Tools
- [YAML Validator](http://www.yamllint.com/)
- [Act - Run Actions locally](https://github.com/nektos/act)

---

## 🎉 Success!

If you've completed all steps, your demo project is ready for the presentation!

### Final Test

Run through this sequence:
1. Make a code change
2. Push to a branch
3. Create a PR
4. Watch workflows run
5. Merge to main
6. Watch deployment

Everything working? **You're ready to present!** 🚀

---

## 📝 Pre-Presentation Checklist

### One Day Before
- [ ] Run \`npm install\` to ensure dependencies are fresh
- [ ] Run all tests: \`npm test\`
- [ ] Verify dev server starts: \`npm run dev\`
- [ ] Check all workflows on GitHub are passing
- [ ] Verify secrets are still valid (Vercel token, etc.)

### Morning Of
- [ ] Pull latest code: \`git pull origin main\`
- [ ] Clear terminal history
- [ ] Close unnecessary browser tabs
- [ ] Have GitHub Actions docs ready in a tab
- [ ] Test screen sharing

### 5 Minutes Before
- [ ] Open repository in browser
- [ ] Open code editor
- [ ] Have terminal ready in project directory
- [ ] Disable notifications
- [ ] Take a deep breath! 😊

---

**You're all set! Good luck with your presentation!** 🎤

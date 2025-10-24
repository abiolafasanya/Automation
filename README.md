# 🚀 GitHub Actions Demo Project

![CI](https://github.com/yourusername/github-actions-demo/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/yourusername/github-actions-demo/actions/workflows/deploy.yml/badge.svg)

A comprehensive Next.js demo project showcasing **GitHub Actions CI/CD pipelines** - perfect for presentations and learning!

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [GitHub Actions Workflows](#github-actions-workflows)
- [Presentation Guide](#presentation-guide)
- [Setup Instructions](#setup-instructions)
- [Demo Scenarios](#demo-scenarios)

---

## 🎯 Overview

This project demonstrates a complete CI/CD pipeline using GitHub Actions, from code push to production deployment. It's designed specifically for knowledge-sharing sessions and presentations about automation and DevOps best practices.

**What it demonstrates:**
- ✅ Automated testing with Jest
- 🔍 Code linting with ESLint
- 📝 TypeScript type checking
- 🏗️ Production builds
- 🚀 Deployment automation
- 📊 Matrix builds across multiple environments
- 🔔 Notifications and reporting

---

## ✨ Features

### Application Features
- Interactive calculator component
- Utility functions for math and string operations
- Comprehensive test coverage (>70%)
- TypeScript for type safety
- Responsive design with CSS modules

### CI/CD Features
- **Continuous Integration**: Runs on every push and PR
- **Multiple Environments**: Production and staging deployments
- **Matrix Testing**: Tests across Node 18, 20, 21 and multiple OS
- **Scheduled Jobs**: Automated daily test runs
- **PR Checks**: Automated code quality validation
- **Notifications**: Slack integration for deployment status

---

## 📁 Project Structure

\`\`\`
automation/
├── .github/
│   └── workflows/              # GitHub Actions workflows
│       ├── ci.yml              # Main CI pipeline
│       ├── deploy.yml          # Production deployment
│       ├── staging.yml         # Staging deployment
│       ├── matrix.yml          # Matrix builds
│       ├── scheduled.yml       # Scheduled tests
│       └── pr-checks.yml       # PR automation
├── src/
│   ├── components/             # React components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── __tests__/
│   │   └── Calculator/
│   │       ├── Calculator.tsx
│   │       ├── Calculator.module.css
│   │       └── __tests__/
│   ├── pages/                  # Next.js pages
│   │   ├── index.tsx
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   ├── styles/                 # Global styles
│   │   ├── globals.css
│   │   └── Home.module.css
│   └── utils/                  # Utility functions
│       ├── math.ts
│       ├── string.ts
│       └── __tests__/
├── jest.config.js              # Jest configuration
├── jest.setup.js               # Jest setup file
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
└── package.json                # Dependencies
\`\`\`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### Installation

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd automation

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Run linter
npm run lint

# Build for production
npm run build
\`\`\`

### Available Scripts

| Script | Description |
|--------|-------------|
| \`npm run dev\` | Start development server on http://localhost:3000 |
| \`npm run build\` | Build production-ready application |
| \`npm start\` | Start production server |
| \`npm test\` | Run tests with Jest |
| \`npm run test:watch\` | Run tests in watch mode |
| \`npm run test:coverage\` | Generate coverage report |
| \`npm run lint\` | Run ESLint |
| \`npm run lint:fix\` | Fix ESLint issues |
| \`npm run type-check\` | Run TypeScript type checking |

---

## 🔄 GitHub Actions Workflows

### 1. **CI Pipeline** (\`.github/workflows/ci.yml\`)

Runs on every push and pull request to \`main\` and \`develop\` branches.

**Jobs:**
- 🔍 **Lint**: ESLint code quality checks
- 🧪 **Test**: Run Jest tests with coverage
- 📝 **Type Check**: TypeScript validation
- 🏗️ **Build**: Production build verification

**Trigger:**
\`\`\`yaml
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
\`\`\`

---

### 2. **Production Deployment** (\`.github/workflows/deploy.yml\`)

Deploys to production on \`main\` branch pushes.

**Features:**
- Runs tests before deployment
- Deploys to Vercel
- Sends Slack notification
- Requires manual approval (environment protection)

**Secrets Required:**
- \`VERCEL_TOKEN\`
- \`VERCEL_ORG_ID\`
- \`VERCEL_PROJECT_ID\`
- \`SLACK_WEBHOOK_URL\`

---

### 3. **Staging Deployment** (\`.github/workflows/staging.yml\`)

Deploys to staging environment from \`develop\` branch.

**Purpose:**
- Test features before production
- Validate integrations
- Preview changes

---

### 4. **Matrix Builds** (\`.github/workflows/matrix.yml\`)

Tests across multiple Node versions and operating systems.

**Matrix Configuration:**
\`\`\`yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 21.x]
    os: [ubuntu-latest, windows-latest, macos-latest]
\`\`\`

**Total Combinations:** 9 build configurations

---

### 5. **Scheduled Tests** (\`.github/workflows/scheduled.yml\`)

Runs automated tests daily at 2 AM UTC.

**Cron Schedule:**
\`\`\`yaml
schedule:
  - cron: '0 2 * * *'
\`\`\`

**Benefits:**
- Catch breaking changes from dependencies
- Monitor application health
- Early detection of issues

---

### 6. **PR Checks** (\`.github/workflows/pr-checks.yml\`)

Automated quality checks on pull requests.

**Features:**
- Welcomes contributors
- Runs comprehensive checks
- Reports bundle size
- Provides feedback

---

## 🎤 Presentation Guide

### For Your Live Demo

#### 1. **Introduction (5 minutes)**
- Show the application running locally
- Explain what GitHub Actions is
- Share the session goals

#### 2. **Workflow Walkthrough (15 minutes)**

**Show the CI workflow file:**
\`\`\`bash
# Open the main CI workflow
cat .github/workflows/ci.yml
\`\`\`

**Explain key concepts:**
- Events (triggers)
- Jobs (parallel execution)
- Steps (sequential actions)
- Runners (execution environment)

#### 3. **Live Trigger Demo (10 minutes)**

**Option A: Make a code change**
\`\`\`bash
# Create a new branch
git checkout -b demo/presentation

# Make a small change
echo "// Demo comment" >> src/utils/math.ts

# Commit and push
git add .
git commit -m "Demo: Testing GitHub Actions"
git push origin demo/presentation
\`\`\`

**Option B: Create a failing test**
\`\`\`typescript
// Add to src/utils/__tests__/math.test.ts
it('should fail for demo', () => {
  expect(add(2, 2)).toBe(5); // Intentional fail
});
\`\`\`

Then push and show the failed workflow!

#### 4. **GitHub UI Tour (10 minutes)**

Navigate through:
1. **Actions tab** - Show all workflows
2. **Running workflow** - Real-time logs
3. **Failed build** - Debugging approach
4. **Artifacts** - Download build output
5. **Secrets** - How to configure

#### 5. **Best Practices & Tips (5 minutes)**

Share:
- Caching dependencies
- Reusable workflows
- Security with secrets
- Status badges

#### 6. **Q&A (10 minutes)**

Common questions:
- How to handle deployment secrets?
- What's the difference between GitHub Actions and Jenkins?
- How much does it cost?
- Can we use self-hosted runners?

---

## ⚙️ Setup Instructions

### Setting Up GitHub Secrets

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| \`VERCEL_TOKEN\` | Vercel authentication token | [Vercel Account Settings](https://vercel.com/account/tokens) |
| \`VERCEL_ORG_ID\` | Your Vercel organization ID | Run \`vercel link\` in project |
| \`VERCEL_PROJECT_ID\` | Your Vercel project ID | Run \`vercel link\` in project |
| \`SLACK_WEBHOOK_URL\` | Slack incoming webhook URL | [Slack API Settings](https://api.slack.com/messaging/webhooks) |
| \`CODECOV_TOKEN\` | Code coverage reporting | [Codecov.io](https://codecov.io) |

### Setting Up Environments

1. Go to **Settings** → **Environments**
2. Create two environments:
   - \`production\` - with required reviewers
   - \`staging\` - without restrictions

### Enabling GitHub Actions

1. Go to **Settings** → **Actions** → **General**
2. Select **Allow all actions and reusable workflows**
3. Enable **Read and write permissions** for workflows

---

## 🎬 Demo Scenarios

### Scenario 1: Successful Build
\`\`\`bash
# Make a simple change
echo "export const version = '1.0.0';" > src/utils/version.ts

git add .
git commit -m "Add version utility"
git push origin main
\`\`\`

**Show:** All green checkmarks in the Actions tab

---

### Scenario 2: Failed Tests
\`\`\`bash
# Create a bug
# Edit src/utils/math.ts and break the add function
\`\`\`

**Show:** How GitHub Actions catches the failure

---

### Scenario 3: Pull Request Flow
\`\`\`bash
git checkout -b feature/new-feature
# Make changes
git push origin feature/new-feature
# Create PR on GitHub
\`\`\`

**Show:** Automated PR checks and comments

---

### Scenario 4: Manual Deployment
1. Go to **Actions** tab
2. Select **Deploy to Production**
3. Click **Run workflow**
4. Show manual approval process

---

## 📊 Monitoring & Badges

### Add Status Badges to README

\`\`\`markdown
![CI](https://github.com/USERNAME/REPO/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/USERNAME/REPO/actions/workflows/deploy.yml/badge.svg)
![Tests](https://github.com/USERNAME/REPO/actions/workflows/matrix.yml/badge.svg)
\`\`\`

Replace \`USERNAME\` and \`REPO\` with your GitHub username and repository name.

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** Tests fail on CI but pass locally
- **Solution:** Ensure dependencies are identical. Check Node versions.

**Issue:** Deployment fails with authentication error
- **Solution:** Verify secrets are correctly set in repository settings.

**Issue:** Workflow not triggering
- **Solution:** Check branch names match the workflow triggers.

**Issue:** Permission denied errors
- **Solution:** Enable write permissions in Settings → Actions → General.

---

## 📚 Additional Resources

### Official Documentation
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [GitHub Marketplace](https://github.com/marketplace?type=actions)

### Useful Actions
- [actions/checkout](https://github.com/actions/checkout) - Checkout code
- [actions/setup-node](https://github.com/actions/setup-node) - Setup Node.js
- [actions/cache](https://github.com/actions/cache) - Cache dependencies
- [codecov/codecov-action](https://github.com/codecov/codecov-action) - Upload coverage

### Learning Resources
- [Awesome GitHub Actions](https://github.com/sdras/awesome-actions)
- [GitHub Actions Starter Workflows](https://github.com/actions/starter-workflows)
- [GitHub Actions YouTube Playlist](https://www.youtube.com/playlist?list=PLArH6NjfKsUhvGHrpag7SuPumMzQRhUKY)

---

## 🤝 Contributing

This is a demo project, but contributions are welcome!

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

---

## 📝 Presentation Tips

### During Your Session

✅ **DO:**
- Start with the problem (manual deployments)
- Show live workflows running
- Demonstrate a failure scenario
- Explain the YAML syntax clearly
- Share real-world use cases from your team

❌ **DON'T:**
- Rush through the YAML files
- Assume everyone knows git basics
- Skip error handling examples
- Forget to share the repository link

### Interactive Elements

1. **Poll the audience:** "Who currently uses CI/CD?"
2. **Live coding:** Create a workflow from scratch
3. **Break something:** Show how Actions catches bugs
4. **Q&A breaks:** Check understanding frequently

---

## 📞 Support & Questions

For questions about this demo project:
- Open an issue on GitHub
- Reach out to the presenter
- Check the [GitHub Actions Community Forum](https://github.community/c/code-to-cloud/github-actions)

---

## 📄 License

This project is created for educational purposes. Feel free to use it for your presentations and learning sessions.

---

## 🎉 Conclusion

This demo project provides a complete, working example of GitHub Actions in action! Use it to:
- Learn CI/CD concepts
- Present to your team
- Experiment with automation
- Build your own pipelines

**Remember:** The best way to learn is by doing. Fork this repo and start experimenting! 🚀

---

**Made with ❤️ for knowledge sharing**

*Last updated: October 2025*

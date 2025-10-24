# GitHub Actions Demo - Presentation Slides

## 📊 Quick Reference for Presenters

This document provides talking points and code snippets for each slide in your presentation.

---

## Slide 2 – The Problem

### Talking Points:
- "How many of you have deployed code manually? Show of hands?"
- "Ever forgotten to run tests before pushing to production?"
- "Manual processes lead to inconsistency and human error"

### Real Story to Share:
"I once deployed code without running tests. It broke production for 2 hours. That's when I learned about CI/CD..."

---

## Slide 3 – What Is GitHub Actions?

### Code Example to Show:
\`\`\`yaml
name: Simple CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm test
\`\`\`

### Talking Points:
- "It's just a YAML file in your repository"
- "GitHub runs this automatically when you push code"
- "No external tools needed - it's built into GitHub"

---

## Slide 5 – Core Concepts

### Live Demo Path:
\`\`\`bash
# Open and explain ci.yml
code .github/workflows/ci.yml
\`\`\`

### Explain Each Section:
1. **Event (on:)** → "What triggers this?"
2. **Job (jobs:)** → "What needs to be done?"
3. **Steps (steps:)** → "How do we do it?"
4. **Actions (uses:)** → "Reusable building blocks"

---

## Slide 6 – Hands-On Demo

### Demo Script:

#### Step 1: Show the Repository
\`\`\`bash
# Navigate to project
cd automation

# Show structure
ls -la .github/workflows/
\`\`\`

#### Step 2: Make a Change
\`\`\`bash
# Create demo branch
git checkout -b demo/live-presentation

# Make a visible change
echo "// Live demo - $(date)" >> src/utils/math.ts

# Commit and push
git add .
git commit -m "Demo: Testing CI pipeline"
git push origin demo/live-presentation
\`\`\`

#### Step 3: Show GitHub UI
1. Navigate to Actions tab
2. Point out the workflow running
3. Click into it and show live logs
4. Highlight parallel jobs

### Backup Plan (if demo fails):
- Have a pre-recorded workflow run ready
- Show screenshots
- Walk through a completed workflow

---

## Slide 7 – Real Example: Deploying to Vercel

### Code Walkthrough:
\`\`\`yaml
# Show this section from deploy.yml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.ORG_ID }}
    vercel-project-id: ${{ secrets.PROJECT_ID }}
\`\`\`

### Explain:
- "Secrets keep credentials safe"
- "Actions from Marketplace make integration easy"
- "One push triggers entire deployment"

---

## Slide 8 – Managing Secrets

### Live Demo:
1. Go to repository Settings
2. Navigate to Secrets → Actions
3. Show (but don't reveal) existing secrets
4. Create a dummy secret: \`DEMO_SECRET=hello\`

### Code Example:
\`\`\`yaml
steps:
  - name: Use secret
    run: echo "Secret exists!"
    env:
      MY_SECRET: ${{ secrets.DEMO_SECRET }}
\`\`\`

### Security Tips:
- Never commit secrets to code
- Use environments for production secrets
- Rotate secrets regularly
- Audit secret access

---

## Slide 9 – Common Use Cases

### Quick Demos to Mention:

#### 1. Linting
\`\`\`yaml
- name: Lint code
  run: npm run lint
\`\`\`
"Catches style issues before code review"

#### 2. Testing
\`\`\`yaml
- name: Run tests
  run: npm test
\`\`\`
"Ensures code works as expected"

#### 3. Docker Build
\`\`\`yaml
- name: Build Docker image
  run: docker build -t myapp .
\`\`\`
"Automates container creation"

#### 4. Slack Notification
\`\`\`yaml
- name: Notify team
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
\`\`\`
"Keep team informed automatically"

---

## Slide 10 – Best Practices

### Code Examples:

#### 1. Caching Dependencies
\`\`\`yaml
- uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'npm'  # This line saves time!
\`\`\`
**Impact:** "Reduces install time from 2 minutes to 20 seconds"

#### 2. Status Badge
\`\`\`markdown
![CI](https://github.com/user/repo/actions/workflows/ci.yml/badge.svg)
\`\`\`
**Show:** Your README with badges

#### 3. Conditional Steps
\`\`\`yaml
- name: Deploy
  if: github.ref == 'refs/heads/main'
  run: npm run deploy
\`\`\`
**Explain:** "Only deploy from main branch"

---

## Slide 11 – Advanced Tips

### Matrix Builds Explanation:
\`\`\`yaml
strategy:
  matrix:
    node-version: [18, 20, 21]
    os: [ubuntu, windows, macos]
\`\`\`
**Show:** "This creates 9 parallel jobs automatically"

### Reusable Workflows:
\`\`\`yaml
# .github/workflows/reusable-test.yml
on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string
\`\`\`
**Explain:** "DRY principle for workflows"

---

## Slide 12 – Common Pitfalls

### Pitfall #1: Missing Permissions
**Error Message:**
\`\`\`
Resource not accessible by integration
\`\`\`

**Solution:**
\`\`\`yaml
permissions:
  contents: read
  pull-requests: write
\`\`\`

### Pitfall #2: Syntax Errors
**Bad:**
\`\`\`yaml
steps
  - name: Test
    run npm test
\`\`\`

**Good:**
\`\`\`yaml
steps:
  - name: Test
    run: npm test
\`\`\`

### Pitfall #3: Secrets Not Set
**Show:** How to debug with:
\`\`\`yaml
- name: Check secret exists
  run: |
    if [ -z "${{ secrets.MY_SECRET }}" ]; then
      echo "Secret not set!"
      exit 1
    fi
\`\`\`

---

## Slide 14 – Q&A

### Anticipated Questions & Answers:

**Q: How much does GitHub Actions cost?**
**A:** "Free for public repos. Private repos get 2,000 minutes/month free, then pay per minute."

**Q: Can we use our own servers?**
**A:** "Yes! Self-hosted runners let you use your own infrastructure."

**Q: How do we handle database migrations?**
**A:** "Great question! Let me show you an example..."
\`\`\`yaml
- name: Run migrations
  run: npm run migrate
  env:
    DATABASE_URL: ${{ secrets.DATABASE_URL }}
\`\`\`

**Q: What about monorepos?**
**A:** "You can use path filters:"
\`\`\`yaml
on:
  push:
    paths:
      - 'frontend/**'
\`\`\`

**Q: How do we debug failed workflows?**
**A:** "Use debug logging and re-run with debug enabled"

---

## 🎯 Pro Presentation Tips

### Timing Guide:
- Slide 1-4: 10 minutes (Setup & context)
- Slide 5-7: 20 minutes (Core concepts & demo)
- Slide 8-11: 15 minutes (Advanced features)
- Slide 12-14: 10 minutes (Tips & Q&A)

### Energy Management:
- **Start strong:** Open with a relatable problem
- **Peak at demo:** Live coding is most engaging
- **End with action:** Challenge audience to try one workflow

### Backup Plans:
1. **WiFi fails:** Have screenshots of workflow runs
2. **Demo breaks:** Use a pre-recorded video
3. **Time runs short:** Skip advanced tips slide
4. **Questions are slow:** Have 3-4 prepared questions

### Interactive Elements:
1. **Poll at start:** "Who uses CI/CD currently?"
2. **Live vote:** "What should we automate first?"
3. **Challenge:** "Create your first workflow this week"

---

## 📝 Presenter Checklist

### Before the Session:
- [ ] Test demo in a fresh clone of the repository
- [ ] Verify all workflows are passing
- [ ] Prepare 2-3 backup demos
- [ ] Have GitHub Actions docs open in a tab
- [ ] Clear browser history/cookies (clean demo)
- [ ] Have a successful workflow run screenshot
- [ ] Have a failed workflow run screenshot
- [ ] Test screen sharing setup

### During Setup:
- [ ] Open repository in browser
- [ ] Open code editor with project
- [ ] Have terminal ready
- [ ] Open Actions tab in GitHub
- [ ] Close unnecessary applications
- [ ] Disable notifications
- [ ] Set "Do Not Disturb"

### After the Session:
- [ ] Share repository link in chat
- [ ] Share slides
- [ ] Collect feedback
- [ ] Follow up on unanswered questions

---

## 🎤 Opening Script

*"Good morning everyone! How many of you have ever pushed code to production and immediately regretted it? [Pause for hands] Don't worry, we've all been there.*

*Today, we're going to solve that problem. We're going to talk about GitHub Actions - a way to automate everything from testing to deployment, so you never have to worry about forgetting to run tests again.*

*By the end of this session, you'll know how to:*
- *Set up automated testing*
- *Deploy code automatically*
- *Sleep better at night knowing your code is tested*

*Let's dive in!"*

---

## 🎤 Closing Script

*"So that's GitHub Actions! Let me recap what we covered:*

1. *We saw how to automate testing and deployment*
2. *We walked through real workflow examples*
3. *We even broke something and fixed it live*

*My challenge to you: this week, create ONE GitHub Action workflow in your project. Just one. Start with something simple - maybe just running tests on every push.*

*I promise, once you see that green checkmark, you'll be hooked.*

*The repository link is in the chat. Clone it, break it, fix it, learn from it.*

*Any final questions before we wrap up?"*

---

## 📞 Follow-Up Resources

Share these after the presentation:

### Repository:
\`\`\`
https://github.com/[your-username]/github-actions-demo
\`\`\`

### Quick Start:
\`\`\`bash
git clone [repo-url]
cd automation
npm install
npm test
\`\`\`

### Next Steps:
1. Fork the repository
2. Modify a workflow
3. Add your own action
4. Share what you built!

---

**Good luck with your presentation! 🚀**

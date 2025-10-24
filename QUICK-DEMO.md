# Quick Start Demo Script

Use this for a rapid 15-minute demo during your presentation.

## 🚀 Express Demo (15 minutes)

### Minute 1-2: Show the Problem
"Who has forgotten to run tests before deploying? GitHub Actions prevents that."

### Minute 3-5: Show Working App
\`\`\`bash
npm run dev
\`\`\`
Open http://localhost:3000 - show the calculator working.

### Minute 6-8: Show the Workflow
\`\`\`bash
cat .github/workflows/ci.yml
\`\`\`
Explain: trigger → jobs → steps

### Minute 9-12: Live Action!
\`\`\`bash
# Create a change
git checkout -b demo/live
echo "// Demo" >> src/utils/math.ts
git add . && git commit -m "Demo"
git push origin demo/live
\`\`\`
Show it running on GitHub!

### Minute 13-14: Show Results
- Point to green checkmarks
- Show test output
- Highlight parallel execution

### Minute 15: Challenge
"Create ONE workflow in your project this week!"

## 🎯 Key Points to Emphasize
1. It's just a YAML file
2. Runs automatically
3. Free for public repos
4. Catches errors before production

Good luck! 🚀

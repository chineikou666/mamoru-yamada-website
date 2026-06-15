---
description: Run Next.js build check before pushing to prevent Vercel deployment failures
---

# Build Check

Run `npm run build` to check for TypeScript and build errors before pushing to git.

## Usage

Run this command before EVERY git push. Vercel deployments fail silently when TypeScript errors exist.

## Command

```bash
cd /Users/mac/mamoru-yamada-website && npm run build 2>&1 | tail -30
```

## Important

- This is a HARD REQUIREMENT before pushing
- Vercel deployment failures are almost always caused by TypeScript build errors
- If build fails, fix all errors before pushing
- The `-30` tail shows the last 30 lines which contain error details

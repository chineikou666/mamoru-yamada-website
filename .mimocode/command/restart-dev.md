---
description: Restart Next.js dev server and open browser
---

# Restart Dev Server

Kill any running Next.js dev server, clear cache, restart, and open browser.

## Usage

Run this command after making code changes to see the latest updates.

## Command

```bash
pkill -f "next dev" 2>/dev/null
sleep 1
cd /Users/mac/mamoru-yamada-website && nohup npm run dev > /tmp/nextjs.log 2>&1 &
sleep 3 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 && open http://localhost:3000
```

## Notes

- Logs are saved to `/tmp/nextjs.log`
- Server runs on `http://localhost:3000`
- If you need a clean restart (clear cache), use:
  ```bash
  pkill -f "next" 2>/dev/null
  rm -rf /Users/mac/mamoru-yamada-website/.next
  cd /Users/mac/mamoru-yamada-website && nohup npm run dev > /tmp/nextjs.log 2>&1 &
  sleep 3 && open http://localhost:3000
  ```

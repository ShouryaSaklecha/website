# Portfolio Website

This is a React app to run my website.

## Working with this repo
- Install dependencies once: `npm install`.
- Run the site locally: `npm start` (defaults to http://localhost:3000).
- Run tests: `npm test`.

## Deploying to GitHub Pages
The project is configured to publish the production build to GitHub Pages via the `gh-pages` npm script.

1. Build and deploy in one step:
   ```bash
   npm run deploy
   ```
   The script runs `npm run build`, copies `build/index.html` to `build/404.html` for client-side routing support, and pushes the contents of `build/` to the `gh-pages` branch using the `homepage` URL in `package.json`.
2. Ensure the `homepage` field in `package.json` matches the desired site URL before deploying.

## Pushing your changes
1. Check what will be committed:
   ```bash
   git status
   ```
2. Stage and commit updates:
   ```bash
   git add .
   git commit -m "<your message>"
   ```
3. Push the branch to GitHub:
   ```bash
   git push origin <branch-name>
   ```
4. Open a pull request from that branch and merge when ready. After merging, re-run `npm run deploy` if you want to refresh the published site.

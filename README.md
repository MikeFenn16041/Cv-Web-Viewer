# CV Website

Terminal-styled CV built with React + TypeScript + Vite + Tailwind.

## Running locally

```bash
npm install
npm run dev
```

Edit `src/data/cvData.ts` with your info.

## Export to PDF

Press `Ctrl+P` and select "Save as PDF". The print view is separate from the terminal UI so it looks professional on paper.

## Deploy

Build first:
```bash
npm run build
```

Then drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop) or deploy to Vercel/GitHub Pages.

## Structure

- `src/data/cvData.ts` - CV content
- `src/components/` - React components
- `src/index.css` - Styles (terminal + print)

Uses CSS variables for the color scheme. Change `--terminal-highlight` in `index.css` to tweak the blue accent.

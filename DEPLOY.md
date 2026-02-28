# Deployment

Quick reference for deploying.

## Netlify (Drag & Drop) - Fastest

```bash
npm run build
```

Drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

Pros: No account needed, instant HTTPS, custom domain support

---

## Deployment Script

```bash
node deploy.js
```

Follow the menu to choose your target.

---

## GitHub Pages

1. Push code to GitHub
2. Repo Settings → Pages
3. Source: GitHub Actions
4. Push to main branch

Site will be at: `https://yourusername.github.io/cv-website/`

---

## Vercel

1. Push code to GitHub
2. Go to vercel.com and sign in
3. Add New Project → Import your repo
4. Framework: Vite
5. Build: `npm run build`
6. Output: `dist`
7. Deploy

---

## Custom Domain

| Platform | Where to add |
|----------|--------------|
| Netlify | Site settings → Domain |
| Vercel | Project settings → Domains |
| GitHub Pages | Settings → Pages → Custom domain |

Then update DNS at your registrar.

---

## Build Output

After `npm run build`, `dist/` contains:
- `index.html` - Main page
- `assets/` - JS, CSS
- `profile.jpg` - Your photo

Note: `dist/` is gitignored.

---

## Troubleshooting

**Build fails:**
```bash
npm ci
npm run build
```

**Blank page:**
- Check `dist/` has files
- Verify `profile.jpg` is in `public/`
- Check browser console

**Photo not showing:**
- Ensure `public/profile.jpg` exists
- Rebuild: `npm run build`

---

## Tips

1. Preview: `npm run dev`
2. Print view: `Ctrl+P`
3. Test mobile: Resize browser
4. Add deployed URL to LinkedIn

---

Need help? Check docs:
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages](https://docs.github.com/pages)

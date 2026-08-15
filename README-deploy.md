# Deploying Arizon E‑Commerce to Vercel

## 1. Deploy to Vercel
1. Fork or clone the repository and push it to GitHub.
2. In Vercel, click **“New Project”** → import the GitHub repo.
3. Vercel will auto‑detect a static‑HTML site; keep the default settings.
4. Click **“Deploy”**. Vercel will build and publish the site at the generated URL.

## 2. Environment Variables
| Variable | Description | Required? |
|----------|-------------|-----------|
| *(none)* | The project is a pure static site with no backend or third‑party keys. | No |

> No `.env` file is needed. If you later add services (e.g., Supabase, payment APIs), add the corresponding variables here.

## 3. First‑time Setup
- No database or authentication setup is required.
- All pages are static HTML; the cart and wishlist use `localStorage` on the client.
- Verify that the site works locally (`serve` or any static server) before pushing changes.

Once deployed, you can access the live site via the Vercel‑provided URL. Enjoy your new e‑commerce store!
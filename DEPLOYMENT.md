# Deployment Guide for JenrickAmbalong.com

Your portfolio has been built successfully! Follow these steps to deploy it with your custom domain.

## Option 1: Deploy to Vercel (Recommended)

1. **Create a Vercel account** at https://vercel.com
2. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```
3. **Deploy from GitHub** (easiest):
   - Push your code to GitHub
   - Import your repository on Vercel
   - Vercel will auto-detect it's a Vite project
4. **Add custom domain**:
   - Go to Project Settings → Domains
   - Add `jenrickambalong.com` and `www.jenrickambalong.com`
   - Follow Vercel's DNS instructions

## Option 2: Deploy to Netlify

1. **Create a Netlify account** at https://netlify.com
2. **Deploy via Drag & Drop**:
   - Drag your `dist` folder to Netlify
   - Or connect your Git repository
3. **Add custom domain**:
   - Go to Domain Settings
   - Add custom domain: `jenrickambalong.com`
   - Update your domain's DNS settings:
     - Add A record pointing to Netlify's IP
     - Add CNAME for www

## Option 3: GitHub Pages

1. **Create a GitHub repository**
2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```
3. **Update package.json**:
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. **Deploy**:
   ```bash
   npm run deploy
   ```
5. **Add custom domain**:
   - Create `CNAME` file in `public` folder with content: `jenrickambalong.com`
   - Configure DNS with your domain provider

## DNS Configuration for JenrickAmbalong.com

Depending on your hosting provider, add these DNS records at your domain registrar:

### For Vercel:
- Type: A, Name: @, Value: 76.76.21.21
- Type: CNAME, Name: www, Value: cname.vercel-dns.com

### For Netlify:
- Type: A, Name: @, Value: 75.2.60.5
- Type: CNAME, Name: www, Value: [your-site].netlify.app

### For GitHub Pages:
- Type: A, Name: @, Value: 185.199.108.153
- Type: CNAME, Name: www, Value: [username].github.io

## Your Build is Ready!

Your production build is in the `dist` folder and ready to deploy.

**Next Steps:**
1. Choose a hosting provider above
2. Deploy your `dist` folder
3. Configure DNS for jenrickambalong.com
4. Wait for DNS propagation (can take up to 48 hours)

**Need Help?** Check the documentation:
- Vercel: https://vercel.com/docs/custom-domains
- Netlify: https://docs.netlify.com/domains-https/custom-domains/
- GitHub Pages: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

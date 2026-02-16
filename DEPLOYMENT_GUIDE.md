# Quick Deployment Guide to GitHub Pages

Follow these simple steps to get your portfolio live on GitHub Pages with HTTPS.

## Prerequisites

✅ GitHub account  
✅ Git installed on your computer  
✅ Repository created: `debanjan-mondal-2005.github.io`

## Step-by-Step Deployment

### 1️⃣ Open Terminal/Command Prompt

Navigate to your portfolio folder:
```bash
cd "c:\Users\USER\OneDrive\Desktop\portfolio"
```

### 2️⃣ Initialize Git Repository

```bash
git init
```

### 3️⃣ Add All Files

```bash
git add .
```

### 4️⃣ Create Initial Commit

```bash
git commit -m "Initial portfolio website commit"
```

### 5️⃣ Connect to GitHub Repository

```bash
git remote add origin https://github.com/debanjan-mondal-2005/debanjan-mondal-2005.github.io.git
```

### 6️⃣ Rename Branch to Main

```bash
git branch -M main
```

### 7️⃣ Push to GitHub

```bash
git push -u origin main
```

**Note**: You may be prompted to enter your GitHub credentials.

### 8️⃣ Enable GitHub Pages

1. Go to: https://github.com/debanjan-mondal-2005/debanjan-mondal-2005.github.io
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 9️⃣ Wait for Deployment

⏱️ Wait 2-5 minutes for GitHub to build your site.

### 🔟 Access Your Live Website

Your portfolio will be live at:
```
https://debanjan-mondal-2005.github.io
```

## ✅ HTTPS is Automatic

GitHub Pages automatically provides:
- ✅ Free HTTPS certificate
- ✅ Secure connection
- ✅ No additional configuration needed

## 🔄 Making Updates

After making changes to your portfolio:

```bash
# Save all changes
git add .

# Commit with a message
git commit -m "Update portfolio content"

# Push to GitHub
git push
```

Changes will appear on your live site within 2-5 minutes.

## 🆘 Troubleshooting

### Issue: "Permission denied"
**Solution**: Set up SSH keys or use GitHub Desktop

### Issue: "Repository not found"
**Solution**: Verify repository name matches exactly

### Issue: "Changes not showing"
**Solution**: Wait 5 minutes, clear browser cache (Ctrl+Shift+R)

### Issue: "404 Error"
**Solution**: Ensure repository is public and GitHub Pages is enabled

## 📱 Test Your Website

After deployment, test:
- ✅ Desktop view
- ✅ Mobile view (use DevTools or actual device)
- ✅ All links work
- ✅ Resume downloads
- ✅ Contact form opens email

## 🎉 You're Done!

Share your portfolio:
- LinkedIn: Add to "Featured" section
- Resume: Include the URL
- Email signature: Add your portfolio link
- GitHub profile: Set as website

---

**Need Help?**
- GitHub Pages Docs: https://pages.github.com/
- Git Basics: https://git-scm.com/doc
- Contact: See README.md

**Your Portfolio URL**: https://debanjan-mondal-2005.github.io

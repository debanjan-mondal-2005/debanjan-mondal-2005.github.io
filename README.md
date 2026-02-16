# Debanjan Mondal - Professional Portfolio

A modern, responsive portfolio website showcasing AI/ML expertise, projects, and professional experience.

🌐 **Live Site**: [https://debanjan-mondal-2005.github.io](https://debanjan-mondal-2005.github.io)

## 📋 Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Customization Guide](#customization-guide)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Browser Support](#browser-support)
- [License](#license)

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Typing effect in hero section
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu
  - Back to top button
  - Animated sections on scroll
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Loading**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation support
- **Contact Form**: Integrated contact form with email functionality
- **Downloadable Resume**: Direct resume download button

## 📁 Folder Structure

```
portfolio/
│
├── index.html                 # Main HTML file
│
├── css/
│   └── style.css             # All styling and responsive design
│
├── js/
│   └── script.js             # Interactive features and functionality
│
├── assets/
│   ├── Debanjan_Mondal_Resume.pdf    # Your resume (PDF)
│   ├── profile.jpg                    # Profile photo (400x400 recommended)
│   ├── project1.jpg                   # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   └── project4.jpg
│
├── README.md                  # Documentation (this file)
├── .gitignore                # Git ignore file
└── LICENSE                   # License file (optional)
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive features
- **Font Awesome 6.4.0**: Icons
- **Google Fonts**: Typography (served via CDN)

## 🚀 Setup Instructions

### Prerequisites

- Git installed on your computer
- GitHub account
- Text editor (VS Code, Sublime Text, etc.)

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/debanjan-mondal-2005/debanjan-mondal-2005.github.io.git
   cd debanjan-mondal-2005.github.io
   ```

2. **Open in browser**:
   - Simply double-click `index.html` or
   - Use Live Server in VS Code for live reload

3. **Test responsiveness**:
   - Open browser DevTools (F12)
   - Toggle device toolbar (Ctrl+Shift+M)
   - Test on different screen sizes

## 🎨 Customization Guide

### 1. Update Personal Information

**In `index.html`:**

- **Hero Section** (Lines 40-65):
  - Update name, subtitle, and description
  - Change social media links

- **About Section** (Lines 85-125):
  - Modify bio text
  - Update personal details

- **Contact Information** (Lines 280-350):
  - Update email address
  - Modify location

### 2. Replace Images

**Profile Photo**:
- Replace `assets/profile.jpg` with your photo
- Recommended size: 400x400 pixels
- Format: JPG or PNG

**Project Images**:
- Replace `assets/project1.jpg` through `project4.jpg`
- Recommended size: 800x600 pixels
- Use high-quality screenshots

### 3. Update Skills

**In `index.html` (Lines 140-200)**:
- Modify the skill tags in each category
- Add or remove skills as needed
- Keep tags concise (1-3 words)

### 4. Add Your Projects

**In `index.html` (Lines 220-280)**:

For each project, update:
- Project image
- Title and description
- Technology tags
- Demo and GitHub links

Example:
```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/your-project.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://demo-link.com" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="https://github.com/username/repo" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Title</h3>
        <p>Your project description here</p>
        <div class="project-tags">
            <span class="tag">Python</span>
            <span class="tag">ML</span>
        </div>
    </div>
</div>
```

### 5. Update Education & Certifications

**In `index.html` (Lines 300-360)**:
- Modify timeline items
- Update institution names
- Change dates and descriptions

### 6. Customize Colors

**In `css/style.css` (Lines 1-20)**:

Modify CSS variables:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary color */
    --accent-color: #3b82f6;       /* Accent color */
    /* ... other colors ... */
}
```

### 7. Update Resume

Replace `assets/Debanjan_Mondal_Resume.pdf` with your resume:
- Keep the filename or update the link in `index.html`
- Ensure PDF is optimized for web (< 2MB)

## 🌐 Deployment to GitHub Pages

### Step 1: Create Repository

1. Go to [GitHub](https://github.com)
2. Create a new repository named: `yourusername.github.io`
   - Example: `debanjan-mondal-2005.github.io`
3. Make it **public**

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Navigate to **Pages** (left sidebar)
3. Under **Source**: Select `main` branch
4. Save

Your site will be live at: `https://yourusername.github.io`

**Note**: It may take a few minutes for changes to appear.

### Step 4: HTTPS (Already Configured)

GitHub Pages automatically provides HTTPS for custom domains and `.github.io` domains.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Images Not Loading

- Check file paths are correct
- Ensure images are in the `assets/` folder
- Verify image file extensions match HTML references

### GitHub Pages Not Updating

- Clear browser cache (Ctrl+Shift+R)
- Wait 5-10 minutes for GitHub to rebuild
- Check repository settings

### Mobile Menu Not Working

- Ensure JavaScript is enabled
- Check browser console for errors
- Verify `script.js` is properly linked

## 📈 Performance Tips

1. **Optimize Images**:
   - Use tools like TinyPNG or ImageOptim
   - Convert to WebP format for better compression
   - Use appropriate dimensions

2. **Minify Code**:
   - Use CSS/JS minifiers for production
   - Remove unused styles

3. **Enable Caching**:
   - GitHub Pages handles this automatically

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to:
- Open an issue
- Submit a pull request

## 📞 Contact

- **LinkedIn**: [debanjan-mondal-ai](https://www.linkedin.com/in/debanjan-mondal-ai/)
- **GitHub**: [debanjan-mondal-2005](https://github.com/debanjan-mondal-2005)
- **Email**: contact@debanjan-mondal.com

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Debanjan Mondal

**Last Updated**: February 2026

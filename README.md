# Freshco Mushroom - Static Website

A beautiful, responsive static website for Freshco Mushroom Farm showcasing fresh button mushrooms, organic seeds, and compost products.

## 🌟 Features

- **Fully Static**: Pure HTML, CSS, and JavaScript - no frameworks or build tools required
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Shopping cart, contact form, mobile menu, and smooth animations
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Fast Loading**: Optimized images and efficient code for quick page loads
- **Accessible**: Keyboard navigation and screen reader friendly

## 📁 File Structure

```
FreshcoMushrooms/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── attached_assets/    # Images and media files
    ├── freshco_Logo-removebg-preview (1)_1750517234057.png
    ├── Screenshot 2025-06-23 212312_1750693999692.png
    ├── image_1750693328754.png
    ├── seed 2_1750523573437.jpg
    ├── harvest_1750523573436.jpg
    └── ... (other images)
```

## 🚀 How to Use

### Option 1: Direct File Opening
1. Simply open `index.html` in any modern web browser
2. The website will work immediately with all features

### Option 2: Local Server (Recommended)
For the best experience, serve the files through a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: Live Server Extension (VS Code)
If using Visual Studio Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🛠️ Customization

### Colors
The main color scheme uses emerald green (`#10b981`). To change colors, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #10b981;
    --primary-dark: #059669;
    --primary-light: #34d399;
}
```

### Content
- **Text Content**: Edit directly in `index.html`
- **Images**: Replace files in `attached_assets/` folder
- **Styling**: Modify `styles.css`
- **Functionality**: Update `script.js`

### Products
To add or modify products, edit the products section in `index.html`:

```html
<div class="product-card">
    <div class="product-image">
        <img src="path/to/image.jpg" alt="Product Name" class="product-img">
        <div class="product-badge fresh">Fresh</div>
    </div>
    <div class="product-content">
        <h3 class="product-title">Product Name</h3>
        <p class="product-description">Product description...</p>
        <div class="product-footer">
            <span class="product-price">₹120/kg</span>
            <button class="btn btn-sm btn-primary add-to-cart" onclick="addToCart('Product Name', 120)">
                <i class="fas fa-shopping-cart"></i>
                Add to Cart
            </button>
        </div>
    </div>
</div>
```

## 📱 Features Explained

### Navigation
- **Sticky Header**: Navigation stays at top when scrolling
- **Active States**: Current page is highlighted
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Clicking links smoothly scrolls to sections

### Shopping Cart
- **Add to Cart**: Click "Add to Cart" buttons on products
- **Cart Sidebar**: Slide-out cart panel
- **Persistent Storage**: Cart items saved in browser localStorage
- **Checkout**: Simulated checkout process

### Contact Form
- **Form Validation**: Checks for required fields and valid email
- **Success Messages**: Shows confirmation when form is submitted
- **Loading States**: Button shows loading animation during submission

### Animations
- **Scroll Animations**: Elements fade in as you scroll
- **Hover Effects**: Interactive hover states on buttons and cards
- **Loading Animations**: Smooth transitions and micro-interactions

## 🎨 Design Features

### Typography
- Clean, modern font stack
- Responsive font sizes
- Proper hierarchy with headings

### Layout
- CSS Grid and Flexbox for responsive layouts
- Mobile-first design approach
- Consistent spacing and alignment

### Visual Effects
- Subtle shadows and gradients
- Smooth transitions and animations
- Professional color scheme

## 📊 Performance

### Optimizations
- Minified CSS and JavaScript (in production)
- Optimized images
- Efficient DOM manipulation
- Debounced scroll events

### Loading Speed
- No external dependencies (except Font Awesome CDN)
- Efficient CSS selectors
- Minimal JavaScript footprint

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data (JSON-LD)
- Proper heading hierarchy
- Alt text for images
- Canonical URLs

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect GitHub repository
3. Automatic deployment on push

### Vercel
1. Import GitHub repository
2. Vercel will auto-detect static site
3. Deploy with one click

### Traditional Hosting
1. Upload all files to web server
2. Ensure `index.html` is in root directory
3. No server-side configuration needed

## 🐛 Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths in `attached_assets/` folder
- Ensure image files exist and are named correctly

**Cart not working:**
- Check browser console for JavaScript errors
- Ensure `script.js` is properly loaded
- Try clearing browser localStorage

**Mobile menu not working:**
- Check if Font Awesome is loading
- Verify JavaScript is enabled in browser

**Styling issues:**
- Clear browser cache
- Check if `styles.css` is loading
- Verify CSS syntax

### Debug Mode
Open browser developer tools (F12) to see:
- Console logs for debugging
- Network tab for loading issues
- Elements tab for styling problems

## 📞 Support

For questions or issues:
- Check browser console for error messages
- Verify all files are in correct locations
- Test in different browsers
- Clear browser cache and cookies

## 📄 License

This project is open source and available under the MIT License.

---

**Freshco Mushroom** - Bringing fresh, organic mushrooms from our farm to your table since 2000.

*Location: Khaga, Fatehpur, Uttar Pradesh, India*
*Contact: +91-9876543210 | anshkumar590423@gmail.com* 
# Urian Society Community Website - 2025 Edition

A modern, animated website for the Urian Society community, featuring cutting-edge design, smooth animations, and advanced interaction patterns.

## Features

### Modern Design

- Responsive, fluid design optimized for all devices
- Smooth animations and transitions
- Modern color scheme with gradient accents
- Dark mode support with system preference detection

### Interactive Elements

- Intersection Observer-based animations
- Smooth scrolling navigation
- Dynamic header behavior
- Interactive hover effects
- Loading states and feedback animations

### Technical Features

- Discord integration for community membership
- Event system with filtering capabilities
- News section with dynamic content loading
- Contact form with animated states
- Modern image lazy loading
- System theme preference detection

## Pages

1. **Home**: Dynamic hero section, animated features, and latest updates
2. **About**: Community background with animated sections
3. **Events**: Interactive event cards with filtering
4. **News**: Latest community updates with smooth transitions
5. **Contact**: Modern contact form with loading states

## Technical Details

### Core Technologies

- Vanilla HTML5, CSS3, and ES6+ JavaScript
- No framework dependencies
- Modern CSS features (Grid, Flexbox, Variables)
- Intersection Observer API
- System theme preference detection

### Performance Features

- Optimized animations
- Lazy loading images
- Smooth scrolling
- Progressive enhancement

## Getting Started

### Prerequisites

- Modern web browser with ES6+ support
- Basic understanding of HTML/CSS/JS for customization

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/urian-society.git
```

2. Navigate to the project directory:

```bash
cd urian-society
```

3. Serve locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Customization

### Theme Colors

The website uses CSS variables for easy customization. Modify the colors in `css/styles.css`:

```css
:root {
	--primary-color: #2d3bf0; /* Modern electric blue */
	--secondary-color: #6c72cb; /* Soft purple blue */
	--accent-color: #845ec2; /* Rich purple */
	/* ... other colors ... */
}
```

### Animations

Customize animations by modifying the animation utilities in `css/styles.css`:

```css
.fade-in {
	animation: fadeIn 0.5s ease-in;
}

.slide-up {
	animation: slideUp 0.5s ease-out;
}

.scale-in {
	animation: scaleIn 0.3s ease-out;
}
```

### Content

- Replace placeholder text in HTML files
- Update Discord invite links
- Add your own images to the `images` folder
- Customize animation timings and effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

All browsers should support:

- CSS Grid/Flexbox
- CSS Variables
- Intersection Observer
- ES6+ JavaScript
- System theme preference detection

## Performance Optimization

The website includes several performance optimizations:

- Efficient animation handling
- Image lazy loading
- Smooth scrolling
- Progressive enhancement
- System theme preference detection

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Discord for community platform
- Modern web APIs for enhanced functionality

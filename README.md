# Velan MicroTech Website

**Technology that Protects Life**

## Overview

This is a modern, story-driven website for Velan MicroTech - an AI-driven technology, research, and training organization that creates intelligent wearable devices to protect, assist, and empower people in their daily lives.

## Features

### Visual Design
- **Living Theme**: Soft glowing accents, smooth transitions, and modern gradients
- **Color Palette**: 
  - Deep Blue (#0A2463) - Technology and trust
  - Soft Teal (#2EC4B6) - Health and calmness
  - Gentle Purple (#8B5CF6) - AI intelligence
  - Clean White (#FFFFFF) - Readability

### Sections

1. **Moving Announcement Bar**
   - Glowing horizontal strip with scrolling announcements
   - Interactive click handler for workshop registration

2. **Hero Section**
   - Split layout with compelling headline and relevant wearable device image
   - Call-to-action buttons
   - Animated glow effects

3. **Product Story 1: Guardian for Mothers**
   - Story of maternal care through intelligent wearables
   - Image grid showcasing the product in context
   - Feature highlights with icons

4. **Product Story 2: Guardian for the Elderly**
   - Story of elderly care and independence
   - Reversed layout for visual variety
   - Safety and assistance features

5. **Identity Section**
   - Neural network animated background
   - Company mission and vision
   - Four key focus areas: Training, Professionals, Industries, Research

6. **Solutions Section**
   - Engineering, Healthcare, AI, and Research & Innovation
   - Card-based layout with hover effects

7. **Research Blogs Section**
   - "Coming Soon" futuristic design
   - Animated rotating elements symbolizing future innovation

8. **Contact Section**
   - Contact information and form
   - Smooth form validation and submission

9. **Footer**
   - Company information and navigation
   - Tagline: "Velan MicroTech — Technology that Protects Life"

## Interactive Features

- Smooth scroll navigation
- Parallax effects on hero section
- Intersection Observer animations for section reveals
- Form validation and submission handling
- Hover effects on images and cards
- Active navigation highlighting based on scroll position
- Notification system for user feedback

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations and gradients
- **JavaScript (ES6+)** - Interactive features
- **Vite** - Fast development and build tool

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173/` (or the next available port).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
healthcaredemo/
├── index.html          # Main HTML file
├── src/
│   ├── styles.css      # All styling and animations
│   └── main.js         # JavaScript interactivity
├── package.json        # Project dependencies
└── README.md          # This file
```

## Design Philosophy

The website is designed to feel **alive** and **human-centered**:

- Every transition feels natural and smooth
- Images are relevant and support the narrative
- Colors evoke trust, care, and innovation
- Typography is clean and professional
- Animations are subtle but meaningful
- The story flows naturally from section to section

## Customization

### Changing Colors

Edit the CSS variables in `src/styles.css`:

```css
:root {
    --deep-blue: #0A2463;
    --soft-teal: #2EC4B6;
    --gentle-purple: #8B5CF6;
    /* Add more customizations */
}
```

### Adding Content

Update the content in `index.html` following the existing structure and semantic HTML patterns.

### Modifying Animations

Adjust animation timings and effects in `src/styles.css` under the respective `@keyframes` rules.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- All images are loaded from external CDNs
- CSS animations use GPU-accelerated properties
- JavaScript uses Intersection Observer for efficient scroll animations
- Minimal dependencies for fast load times

## Future Enhancements

- Research blog integration
- Workshop registration system
- Multi-language support
- Enhanced accessibility features
- Admin dashboard for content management

## Contact

For questions or support regarding this website:

- Email: info@velanmicrotech.com
- Phone: +91 XXXX XXXXXX

---

**Developed with care and innovation.**

Velan MicroTech — Technology that Protects Life 🏥

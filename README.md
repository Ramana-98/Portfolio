# Modern React Portfolio Website

A professional and modern personal portfolio website built with React, Tailwind CSS, ShadCN UI, and Framer Motion. Features smooth animations, dark/light mode toggle, and a fully responsive design optimized for recruiters and potential clients.

## 🚀 Features

### Core Sections
- **Sticky Navbar** - Smooth scroll navigation with progress indicator and theme toggle
- **Hero Section** - Full-screen hero with animated typing effect and glowing CTA buttons
- **About Me** - Profile showcase with animated skill indicators and statistics
- **Projects** - Responsive grid with hover animations and detailed modal dialogs
- **Experience & Education** - Interactive timeline with scroll-triggered animations
- **Skills** - Filterable tabs with progress bars and icon cards
- **Testimonials** - Auto-playing carousel with client feedback and achievements
- **Contact** - Form validation with real-time feedback and social media links

### Technical Features
- **Dark/Light Mode** - System preference detection with manual toggle
- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **Smooth Animations** - Framer Motion powered transitions and scroll effects
- **Custom Cursor** - Interactive cursor with magnetic hover effects
- **Performance Optimized** - Lazy loading and optimized bundle size
- **SEO Ready** - Semantic HTML structure and meta tags

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Theme System**: Custom theme provider with localStorage persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.jsx`)
   - Replace "Your Name" with your actual name
   - Update the animated titles array
   - Modify the description text

2. **About Section** (`src/components/About.jsx`)
   - Update skills and proficiency levels
   - Modify statistics and achievements
   - Replace profile image placeholder

3. **Projects Section** (`src/components/Projects.jsx`)
   - Add your actual projects with descriptions
   - Update GitHub and live demo links
   - Replace project images

4. **Experience Section** (`src/components/Experience.jsx`)
   - Update work experience and education
   - Modify company names, roles, and achievements

5. **Contact Section** (`src/components/Contact.jsx`)
   - Update contact information
   - Replace social media links
   - Configure form submission endpoint

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update Google Fonts import in `src/index.css`
- **Animations**: Customize Framer Motion variants in components

### Resume Download
Place your resume file in the `public` folder and update the path in `src/lib/utils.js`:

```javascript
export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/your-resume.pdf'; // Update this path
  link.download = 'Your-Name-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds on push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

### Project Structure
```
src/
├── components/           # React components
│   ├── ui/              # ShadCN UI components
│   ├── About.jsx        # About section
│   ├── Contact.jsx      # Contact form
│   ├── Experience.jsx   # Timeline component
│   ├── Hero.jsx         # Hero section
│   ├── Navbar.jsx       # Navigation
│   ├── Projects.jsx     # Projects grid
│   ├── Skills.jsx       # Skills tabs
│   └── ...
├── lib/                 # Utility functions
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**

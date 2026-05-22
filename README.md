🍕 Pizza Dough Maturity Calculator
==================================

A Progressive Web App (PWA) for calculating the perfect Neapolitan Biga dough maturity, accounting for fermentation time, temperature, yeast percentage, hydration, and salt levels.

## Features

- 📊 **Real-time Calculations** - Instant feedback as you adjust parameters
- 🌡️ **Temperature-Aware** - Accounts for fermentation speed at different temperatures
- 📱 **Progressive Web App** - Works offline with service worker caching
- 🎨 **Beautiful UI** - Dark theme with intuitive controls
- 📈 **Maturity Tracking** - Visual indicator of dough readiness (0-100%)
- 💾 **Offline Support** - Full functionality without internet connection

## Installation

```bash
# Clone the repository
git clone https://github.com/saaary/calculator.git
cd calculator

# Install dependencies
npm install

# Start the development server
npm start

# Build for production
npm build
```

## Usage

1. Adjust the sliders to match your ingredients and conditions:
   - **Flour Weight** - Total flour in grams (500-5000g)
   - **Temperature** - Ambient fermentation temperature (15-30°C)
   - **Hydration** - Water percentage relative to flour (55-75%)
   - **Yeast** - Fresh yeast percentage (0.1-1%)
   - **Salt** - Salt percentage (1.5-3.5%)
   - **Fermentation Hours** - Fermentation duration (12-96 hours)

2. Monitor the **Maturity Score** - The circular indicator shows fermentation progress
3. Check the calculated values for dough composition
4. Follow the fermentation tips for best results

## Maturity Levels

- **Red (0-30%)** - Early Stage - Dough is still developing
- **Orange (30-60%)- Developing - Gluten development in progress
- **Yellow (60-85%)** - Ready - Good for shaping, can be used
- **Green (85-100%)** - Optimal - Peak flavor development, ideal for baking

## How It Works

The calculator uses the following formula:

```
Water Weight = Flour × (Hydration / 100)
Yeast Weight = Flour × (Yeast % / 100)
Salt Weight = Flour × (Salt % / 100)
Temperature Factor = (Temperature - 18°C) / 10
Maturity Score = (Hours / 72) × 100
```

Higher temperatures accelerate fermentation, so the app adjusts expected fermentation time based on your ambient temperature.

## PWA Features

- **Install as App** - Add to home screen for app-like experience
- **Offline Support** - Service worker caches essential files
- **Manifest** - Includes app metadata and icons
- **Responsive** - Works on mobile, tablet, and desktop

## Technology Stack

- **React 18** - UI framework
- **CSS3** - Styling with variables and gradients
- **Service Workers** - Offline support
- **PWA Standards** - Progressive enhancement

## Browser Support

- Chrome/Edge 51+
- Firefox 44+
- Safari 11+
- iOS Safari 11.3+
- Chrome for Android

## Project Structure

```
calculator/
├── public/
│   ├── index.html          # Main HTML file
│   ├── sw.js              # Service worker
│   ├── manifest.json      # PWA manifest
│   └── icon-*.png         # App icons
├── src/
│   ├── App.js             # Main app component
│   ├── App.css            # Styling
│   ├── index.js           # Calculator component
│   └── index.css          # Component styling
├── package.json           # Dependencies
└── README.md              # This file
```

## Future Enhancements

- [ ] Save favorite recipes/configurations
- [ ] History tracking of fermentations
- [ ] Temperature alerts
- [ ] Export results as PDF
- [ ] Multiple dough types (Neapolitan, Roman, etc.)
- [ ] Dark/light theme toggle
- [ ] Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

Created with ❤️ for pizza enthusiasts and bakers.

---

**Enjoy perfect Neapolitan pizza dough! 🍕**

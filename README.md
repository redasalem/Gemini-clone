# Gemini Clone - React

A modern, interactive clone of **Google Gemini** built with **React.js**, **Vite**, and **Tailwind CSS**. This application demonstrates a clean AI chat interface powered by the Google Gemini API, featuring real-time responses, elegant animations, and a responsive design.

![Gemini Clone](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-06B6D4) ![Google Gemini API](https://img.shields.io/badge/Gemini_API-1.28.0-4285F4)

## ✨ Features

- 🤖 **AI-Powered Chat** - Real-time conversations with Google Gemini AI
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations and transitions
- 💬 **Chat History** - View and manage recent conversations
- 🎯 **Interactive Cards** - Pre-built prompt suggestions for quick interactions
- 🌙 **Elegant Theme** - Professional color scheme matching Google's design language
- 🔧 **TypeScript Support** - Ready for TypeScript integration

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19.1.1](https://reactjs.org/)
- **Build Tool**: [Vite 7.1.7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4.1.16](https://tailwindcss.com/)
- **AI API**: [Google Gemini API 1.28.0](https://ai.google.dev/)
- **Package Manager**: npm
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📁 Project Structure

```
gemini-clone/
├── public/
│   ├── images/              # Icon assets and images
│   └── favicon.svg          # Favicon
├── src/
│   ├── components/
│   │   ├── Main.jsx         # Main chat interface
│   │   └── Sidebar.jsx      # Navigation sidebar
│   ├── config/
│   │   └── gemini.js        # Gemini API configuration
│   ├── context/
│   │   └── context.jsx      # React context for state management
│   ├── assets.js            # Asset imports
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gemini-clone.git
   cd gemini-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   To get your API key:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key
   - Copy and paste it into your `.env.local` file

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 🎯 Usage

1. **Start a New Chat**: Click the "New Chat" button in the sidebar
2. **Send Messages**: Type your prompt in the input field and press Enter or click the send button
3. **Use Suggestions**: Click on the pre-built cards for quick prompt ideas
4. **View History**: Access recent conversations from the sidebar
5. **Navigate**: Use the sidebar menu for Help, Activity, and Settings

## 🔧 Configuration

### API Configuration

The Gemini API is configured in `src/config/gemini.js`. The application uses the `gemini-2.5-flash` model for optimal performance and cost efficiency.

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key | Yes |

### Build Configuration

The project uses Vite for fast development and optimized builds. Configuration is in `vite.config.js`.

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Customization

### Theming

The application uses Tailwind CSS with a custom color scheme. You can modify colors in the components or extend the theme in your Tailwind configuration.

### Adding New Features

1. **New Components**: Add to `src/components/`
2. **API Integration**: Extend `src/config/gemini.js`
3. **State Management**: Update `src/context/context.jsx`

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Set your `VITE_GEMINI_API_KEY` in Netlify environment variables
3. Deploy automatically on push to main branch

### Vercel

1. Import your project to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy with zero configuration

### Static Hosting

```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google](https://google.com) for the Gemini API
- [React](https://reactjs.org) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Vite](https://vitejs.dev) for the blazing-fast build tool

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/gemini-clone/issues) page
2. Create a new issue with detailed information
3. Join our discussions for community support

---

**Built with ❤️ by [Reda Salem](https://github.com/redasalem)**

*This project is optimized for simplicity, responsiveness, and an exceptional AI chat experience.*
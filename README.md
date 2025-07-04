# LexHelps - Legal Help in Your Language

A modern React application that helps users understand legal documents by providing translation, explanation, and organization of legal paperwork.

## Features

- **Document Upload & Translation**: Upload legal documents for instant AI translation and analysis
- **Important Deadlines**: AI highlights critical dates and actions needed
- **Immigration Help**: Understand visa types and get step-by-step guidance
- **24/7 Legal Chat**: Ask questions anytime and get instant guidance
- **Local Help**: Find legal aid and local services in your area
- **Multiple Languages**: Support for 8+ languages including English, Spanish, French, Arabic, Russian, Chinese, Hindi, and more

## Tech Stack

- **React 19** - Latest React version
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast development build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Wouter** - Lightweight routing
- **React Query** - Server state management
- **Radix UI** - Headless UI components
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, inputs, etc.)
│   ├── about-section.tsx
│   ├── download-section.tsx
│   ├── features-section.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   └── hero-section.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── pages/              # Page components
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

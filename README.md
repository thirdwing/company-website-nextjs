# Company Website - Next.js

A modern, responsive company website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting
- **Path Aliases** - Clean imports with `@/*` alias
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Built-in SEO features

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd company-website-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
company-website-nextjs/
├── src/
│   ├── app/                 # App Router pages and layouts
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions and configurations
│   └── styles/              # Global styles and Tailwind config
├── public/                  # Static assets
├── .gitignore              # Git ignore rules
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. The configuration is located in `tailwind.config.ts`.

### Path Aliases

Import components and utilities using the `@/*` alias:

```typescript
// Instead of
import Component from '../../../components/Component'

// Use
import Component from '@/components/Component'
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow ESLint rules
- Use functional components with hooks
- Implement responsive design with Tailwind CSS

### Component Structure
- Place reusable components in `src/components/`
- Use PascalCase for component names
- Export components as default exports

### File Naming
- Use kebab-case for file names
- Use PascalCase for component names
- Use camelCase for variables and functions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
Build the project for production:
```bash
npm run build
npm run start
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Developer:** abdullahcg  
**Email:** abdullahshahid.cg@gmail.com

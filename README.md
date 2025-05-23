# ⚡ React 19 + Vite + Tailwind + shadcn/ui Starter

A modern React 19 boilerplate powered by **Vite**, styled with **Tailwind CSS**, and enhanced with **shadcn/ui** for beautiful, accessible components — all pre-configured with **ESLint** and **Prettier** for a smooth developer experience.

---

## ✨ Features

- ✅ **React 19** with fast Refresh and built-in use hook improvements
- ⚡ **Vite** for lightning-fast development and builds
- 🎨 **Tailwind CSS** for utility-first styling
- 🧩 **shadcn/ui** components with Radix primitives and Tailwind variants
- 🧹 **Prettier + ESLint** preconfigured with recommended rules
- 💾 Auto-formats code on save (via VSCode or your editor)
- 📁 Clean file structure for scalable development

---

## 🛠️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

### 2. Scripts
```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build
npm run lint      # Lint code using ESLint
npm run format    # Format code using Prettier
```

### 3. Styling
Tailwind CSS is pre-configured with JIT mode and ready to use. You can customize design tokens, themes, and breakpoints in tailwind.config.js.

### 4. shadcn/ui
shadcn/ui is set up and ready to use. Components are generated into src/components/ui.

#### To add a component:
```bash
npx shadcn-ui generate component <component-name>

# Example
npx shadcn-ui@latest add button
```

#### Use in your code:
```tsx
import { Button } from '@/components/ui/button'

export default function App() {
  return <Button>Click me</Button>
}
```

### 5. Code Quality
* ESLint uses recommended rules for React and TypeScript
* Prettier is integrated and auto-runs on save
* Pre-configured for formatting and linting consistency
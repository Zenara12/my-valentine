# 💖 Valentine's Day Invite — Vue/Vite

A Vue 3 + TypeScript + Vite port of the Valentine's Day Invite app. Features a playful "No" button that shrinks while the "Yes" button grows, and a confetti celebration screen on acceptance.

## Tech Stack

- **Vue 3** (Composition API + `<script setup>`)
- **Vite 5** (build tool)
- **TypeScript**
- **Tailwind CSS 3**

## Project Structure

```
valentine-vue/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── src/
    ├── main.ts                      # App entry point
    ├── style.css                    # Root CSS — imports all asset CSS
    ├── constants.ts                 # Messages & local teddy image import
    ├── App.vue                      # Main component (Composition API)
    └── assets/
        ├── images/
        │   └── teddy.svg            # Bundled SVG bear (replace with your photo)
        └── css/
            ├── variables.css        # Design tokens / CSS custom properties
            ├── base.css             # Resets & global base styles
            ├── animations.css       # All @keyframe animations + utility classes
            └── components.css       # Component-level BEM styles
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Differences from React Version

| React | Vue |
|---|---|
| `useState` | `ref()` |
| `useCallback` | Plain functions |
| `useMemo` | `computed()` |
| JSX | Single File Components (`.vue`) |
| `className` | `class` / `:class` |
| Inline `style` with CSS vars | `:style` binding with JS objects |

## How It Works

1. User lands on the invite screen with a floating teddy bear
2. Clicking **"No"** cycles through pleading messages, shrinks the No button, and grows the Yes button
3. Clicking **"Yes"** transitions to a celebration screen with floating heart emojis
4. **"See you soon!"** resets everything back to the invite screen

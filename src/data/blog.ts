
import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'demystifying-server-components-nextjs',
    title: 'Demystifying Server Components in Next.js',
    date: '2024-03-10',
    excerpt: 'A comprehensive guide to understanding Next.js Server Components, their benefits, use cases, and how they interact with Client Components for optimal web performance.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'server code illustration',
    author: 'Alex Johnson',
    tags: ['Next.js', 'React', 'Server Components', 'Web Performance'],
    content: `
## Introduction
Next.js has revolutionized React development, and Server Components are one of its most significant advancements. They allow developers to build faster, more efficient applications by moving rendering logic to the server.

## What are Server Components?
Server Components are React components that run exclusively on the server. They can directly access server-side resources like databases or file systems and render HTML before it's sent to the client. This reduces the amount of JavaScript shipped to the browser, leading to quicker load times and improved interactivity.

### Key Characteristics:
- **Run on the server:** Executed during the request-response cycle or at build time.
- **Zero client-side JavaScript (by default):** They don't add to the client bundle unless explicitly hydrating a Client Component.
- **Direct data access:** Can fetch data directly from backend sources without needing API endpoints.
- **Not interactive:** Cannot use state, effects, or browser-only APIs.

## Benefits of Server Components
1.  **Improved Performance:** Reduced client-side JavaScript means faster TTI (Time to Interactive).
2.  **Enhanced Security:** Sensitive data and logic can remain on the server.
3.  **Simpler Data Fetching:** Colocate data fetching logic with the component that uses it.
4.  **Smaller Bundle Sizes:** Leads to faster downloads and parsing on the client.

## Server Components vs. Client Components
The Next.js App Router uses Server Components by default. To create a Client Component (which runs in the browser and can be interactive), you must use the \`"use client"\` directive at the top of the file.

| Feature          | Server Components                        | Client Components                             |
|------------------|------------------------------------------|-----------------------------------------------|
| **Environment**  | Server                                   | Browser (after hydration)                     |
| **Interactivity**| No (cannot use \`useState\`, \`useEffect\`) | Yes (can use state, effects, event listeners) |
| **Data Fetching**| Direct (e.g., \`async/await\` in component) | Indirect (e.g., \`useEffect\`, SWR, React Query) |
| **JS Bundle**    | Does not add to client bundle            | Adds to client bundle                         |
| **Directive**    | Default                                  | \`"use client"\`                               |

## When to Use Which?
-   **Server Components:** Ideal for static content, data display, accessing backend resources, and layouts.
-   **Client Components:** Necessary for user interactions, event handling, state management, and using browser APIs.

\`\`\`jsx
// app/page.tsx (Server Component by default)
async function getProducts() {
  const res = await fetch('https://api.example.com/products');
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="font-headline text-3xl mb-4">Our Products</h1>
      <ul>
        {products.map(product => <li key={product.id}>{product.name}</li>)}
      </ul>
      <AddToCartButton productId="123" /> {/* Client Component for interaction */}
    </div>
  );
}

// components/AddToCartButton.tsx
"use client"; // This makes it a Client Component

import { useState } from 'react';

export default function AddToCartButton({ productId }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = async () => {
    setIsAdding(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(\`Product \${productId} added to cart!\`);
    setIsAdding(false);
  };

  return (
    <button onClick={handleClick} disabled={isAdding} className="bg-primary text-primary-foreground p-2 rounded">
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}
\`\`\`

## Conclusion
Server Components are a paradigm shift in building React applications with Next.js. By understanding their capabilities and how to effectively combine them with Client Components, developers can create highly performant and maintainable web experiences. Embrace the server-first mindset for content and progressively enhance with client-side interactivity where needed.
    `,
  },
  {
    slug: 'advanced-tailwind-css-techniques',
    title: 'Advanced Tailwind CSS Techniques for Modern UIs',
    date: '2024-02-20',
    excerpt: 'Go beyond the basics of Tailwind CSS. Learn about custom plugins, theming, performance optimization, and strategies for building complex and maintainable user interfaces.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'css code design',
    author: 'Alex Johnson',
    tags: ['Tailwind CSS', 'CSS', 'Frontend', 'UI Design'],
    content: `
## Introduction
Tailwind CSS has gained immense popularity for its utility-first approach. While its basics are easy to grasp, mastering advanced techniques can significantly elevate your UI development workflow and the quality of your applications.

## 1. Customizing Your Theme
Tailwind's \`tailwind.config.js\` is powerful. You can extend or override the default theme:
-   **Colors:** Define a custom color palette that aligns with your brand.
-   **Typography:** Set custom font families, sizes, and line heights.
-   **Spacing:** Adjust spacing scales for margins, paddings, and dimensions.
-   **Breakpoints:** Customize responsive breakpoints for your specific design needs.

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
\`\`\`

## 2. Creating Custom Utility Classes with Plugins
For reusable patterns or utilities not covered by default, create your own plugins.
\`\`\`javascript
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-gradient-brand': {
          background: \`linear-gradient(to right, \${theme('colors.brand.light')}, \${theme('colors.brand.dark')})\`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ]
}
\`\`\`

## 3. Optimizing for Performance
-   **PurgeCSS (JIT Mode):** Tailwind's JIT (Just-In-Time) mode automatically removes unused CSS in production, resulting in significantly smaller file sizes. Ensure it's enabled.
-   **\`@apply\` Sparingly:** While useful for component-like abstractions, overuse of \`@apply\` can lead to larger CSS. Prefer composing utilities directly in HTML or using component frameworks.
-   **Group-hover and Group-focus:** Use these variants to style elements based on the state of a parent, reducing the need for JavaScript.

## 4. Dark Mode
Tailwind provides built-in support for dark mode using the \`dark:\` variant. Configure it in your \`tailwind.config.js\`:
\`\`\`javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}
\`\`\`
Then, toggle a \`dark\` class on your \`<html>\` or \`<body>\` element.

## 5. Building Complex Layouts
-   **Grid & Flexbox:** Master Tailwind's comprehensive grid and flexbox utilities for sophisticated layouts.
-   **CSS Variables for Theming:** Integrate CSS custom properties with Tailwind for dynamic theming beyond just dark mode.

## Conclusion
Tailwind CSS is more than just a collection of utility classes. By leveraging its advanced features like theming, plugins, and optimization strategies, you can build highly customized, performant, and maintainable UIs that scale with your projects. Continuously explore its documentation and community resources to unlock its full potential.
    `,
  },
  {
    slug: 'new-blog-post-example',
    title: 'My New Awesome Blog Post',
    date: '2024-07-28', // Change to current date
    excerpt: 'This is a short and catchy summary of my new awesome blog post. It will appear on the blog listing page.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'creative writing', // Example hint
    author: 'Your Name', // Change to your name
    tags: ['New', 'Example', 'Markdown'],
    content: `
## Welcome to My New Post!

This is the main content of your blog post. You can use Markdown syntax here.

### Markdown Basics

*   **Bold text:** \`**Bold text**\`
*   *Italic text:* \`*Italic text*\`
*   \`Code snippets:\` \`\`\` \`Code snippets\` \`\`\`
*   [Links:](https://www.example.com) \`[Links:](https://www.example.com)\`

### Headings

# Heading 1 (\`# Heading 1\`)
## Heading 2 (\`## Heading 2\`)
### Heading 3 (\`### Heading 3\`)

### Lists

**Unordered List:**
*   Item 1
*   Item 2
    *   Sub-item 2.1
    *   Sub-item 2.2

**Ordered List:**
1.  First item
2.  Second item
3.  Third item

### Code Blocks

You can include code blocks for different languages:

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet('World');
\`\`\`

\`\`\`python
def greet(name):
  print(f"Hello, {name}!")

greet("World")
\`\`\`

### Blockquotes

> This is a blockquote. It's useful for quoting text from other sources.
> - Sun Tzu, The Art of War (maybe)

### Images (from an external URL)

![Alt text for image](https://placehold.co/300x200.png)

**Remember to replace this placeholder content with your actual blog post!**
    `,
  },
];


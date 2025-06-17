import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform "ShopSphere"',
    description: 'A robust and scalable e-commerce platform featuring user authentication, product catalog management, secure payment processing, and an intuitive admin dashboard.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'online shopping interface',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    details: `
## Project Overview
ShopSphere is a modern e-commerce solution designed for scalability and user experience. It provides a comprehensive set of features for both customers and administrators.

## Key Features
- **User Management:** Secure registration, login, profile management.
- **Product Catalog:** Dynamic product listings, categories, search, and filtering.
- **Shopping Cart & Checkout:** Persistent cart, multi-step checkout, Stripe integration.
- **Order Management:** Order history, status tracking for users.
- **Admin Dashboard:** Product, category, and order management, user analytics.
- **Responsive Design:** Optimized for all devices.

## Technical Stack
- **Frontend:** React, Next.js (for SSR/SSG capabilities), Zustand (state management)
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Payments:** Stripe API
- **Styling:** Tailwind CSS, Shadcn/UI components
- **Authentication:** JWT, NextAuth.js (optional)
- **Deployment:** Vercel/AWS

## Challenges & Solutions
- **Scalability:** Designed with a microservices-inspired architecture for backend services.
- **Performance:** Leveraged Next.js features like ISR and image optimization.
- **Security:** Implemented secure coding practices, input validation, and HTTPS.

## Future Enhancements
- AI-powered product recommendations
- Advanced analytics and reporting
- Integration with third-party logistics providers
    `,
  },
  {
    id: 'realtime-collab-whiteboard',
    title: 'Real-time Collaborative Whiteboard "IdeaFlow"',
    description: 'A web-based collaborative whiteboard application enabling multiple users to brainstorm and visualize ideas together in real-time, with drawing tools, text, and shapes.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'digital whiteboard collaboration',
    tags: ['React', 'WebSockets', 'Node.js', 'Canvas API', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#',
    details: `
## Project Overview
IdeaFlow is a real-time collaborative digital whiteboard designed to facilitate remote teamwork and creative brainstorming sessions.

## Key Features
- **Real-time Collaboration:** Multiple users can draw, write, and edit simultaneously.
- **Drawing Tools:** Pen, eraser, shapes (rectangles, circles, lines), text input.
- **Infinite Canvas:** Zoom and pan for unlimited brainstorming space.
- **Session Management:** Create, join, and share whiteboard sessions.
- **Undo/Redo Functionality:** Easily revert or reapply actions.
- **User Cursors:** See other collaborators' cursors in real-time.

## Technical Stack
- **Frontend:** React, TypeScript, Zustand for state management
- **Real-time Engine:** WebSockets (Socket.io) for low-latency communication
- **Backend:** Node.js, Express.js for session management and signaling
- **Drawing:** HTML5 Canvas API, Konva.js or similar library for canvas manipulation
- **Persistence (Optional):** Firebase Realtime Database or Firestore for saving board states
- **Styling:** Tailwind CSS

## Challenges & Solutions
- **Synchronization:** Ensuring consistent state across all clients using operational transforms or CRDTs.
- **Performance:** Optimizing canvas rendering for smooth user experience with many objects and users.
- **Conflict Resolution:** Handling simultaneous edits from multiple users.

## Future Enhancements
- Export board as image/PDF
- Template library
- Version history
    `,
  },
  {
    id: 'ai-powered-recipe-generator',
    title: 'AI-Powered Recipe Generator "CuisineAI"',
    description: 'An intelligent recipe generator that suggests dishes based on available ingredients, dietary restrictions, and culinary preferences, powered by a fine-tuned AI model.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'food ingredients cooking',
    tags: ['Python', 'Flask', 'React', 'AI/ML', 'Docker'],
    liveUrl: '#',
    details: `
## Project Overview
CuisineAI leverages artificial intelligence to help users discover new recipes and reduce food waste by suggesting meals based on ingredients they already have.

## Key Features
- **Ingredient-based Search:** Input available ingredients to get recipe suggestions.
- **Dietary Filters:** Options for vegan, gluten-free, low-carb, etc.
- **Cuisine Preferences:** Specify preferred cuisines (e.g., Italian, Mexican, Indian).
- **Nutritional Information:** Estimated calorie counts and macronutrient breakdown.
- **Recipe Saving & Rating:** Users can save favorite recipes and rate them.
- **AI-Generated Variations:** Suggests creative twists on existing recipes.

## Technical Stack
- **Frontend:** React, Redux Toolkit for state management
- **Backend:** Python, Flask/FastAPI for the API
- **AI Model:** Fine-tuned GPT model or similar NLP model for recipe generation and understanding. Integration with services like OpenAI API or Google Gemini API.
- **Database:** PostgreSQL for storing user data, recipes, and ingredient information.
- **Containerization:** Docker for easy deployment and scalability.
- **Styling:** Material UI or Tailwind CSS

## Challenges & Solutions
- **AI Model Training/Fine-tuning:** Curating a quality dataset and fine-tuning the model for coherent and safe recipe generation.
- **Ingredient Parsing:** Developing robust NLP techniques to parse user-inputted ingredients.
- **Balancing Creativity and Practicality:** Ensuring AI generates novel yet cookable recipes.

## Future Enhancements
- Meal planning features
- Shopping list generation
- User-submitted recipes and community features
    `,
  },
];

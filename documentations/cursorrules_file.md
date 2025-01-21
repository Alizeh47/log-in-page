# Cursor Rules for Project

## Project Overview

**Project Name:** Simple Access Login Page

**Description:** The Simple Access project involves creating a visually appealing, modern login page for a user-focused platform. This page acts as a gateway for users such as professionals and students to access a specific web application. It highlights the product's core values like productivity and accessibility through design.

**Tech Stack:**

*   Frontend: Next.js 14, TypeScript, Tailwind CSS, shadcn/UI, Radix UI, Lucide Icons
*   Backend & Storage: Supabase (if needed for handling forms, data capture)
*   Optional AI Integration: Claude AI for generating marketing copy

**Key Features:**

*   Login form with email & password fields and a purple "Sign in" button.
*   Alternative sign-in methods via GitHub and Twitter.
*   "Forgot your password?" and "Sign up" links.
*   Background illustrations with modern, professional themes.
*   Optional footer with legal terms and social media links.

## Project Structure

### Root Directory:

*   Contains the main configuration files and documentation.

### /frontend:

*   All frontend-related code, including components, styles, and assets.

### /components:

*   LoginForm.js: Component containing the login fields and buttons.
*   SocialLoginButtons.js: Component for GitHub and Twitter login options.
*   Footer.js: Optional component for terms and social links.

### /assets:

*   Images for background illustrations and icons.

### /styles:

*   main.css: Main styles using Tailwind CSS.

### /backend:

*   If required, could contain integration files with Supabase for user authentication.

### /controllers:

*   Empty unless backend integration is needed for the login flow.

### /models:

*   Not used unless extending backend features.

### /routes:

*   Not used for this frontend-focused project.

### /config:

*   Configuration files for environment variables (if backend setup).

### /tests:

*   Unit and integration tests, particularly for frontend components.

## Development Guidelines

**Coding Standards:**

*   Follow TypeScript best practices for type safety.
*   Use Tailwind CSS for consistent styling.

**Component Organization:**

*   Organize components by functionality, grouping related UI elements together.

## Cursor IDE Integration

**Setup Instructions:**

1.  Clone repository.
2.  Install dependencies using `npm install`.
3.  Launch development server with `npm run dev`.

**Key Commands:**

*   Preview changes with `npm run dev`
*   Format code with Prettier via `npm run format`

## Additional Context

**User Roles:**

*   Targeted at a single role of professionals and students using a web portal.

**Accessibility Considerations:**

*   Ensure keyboard navigability and screen reader compatibility across the login interface.

This `.cursorrules` file serves as a guide to aid in the development and integration of the Simple Access login page within the Cursor IDE environment, ensuring consistency and alignment with the project goals and specifications provided.

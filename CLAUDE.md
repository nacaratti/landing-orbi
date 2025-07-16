# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build the application for production
- `npm run preview` - Preview the built application locally

## Architecture Overview

This is a React-based web application built with Vite as the build tool. The application uses:

- **Authentication**: Supabase-based authentication system with React Context
- **Routing**: React Router with protected routes
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Styling**: Tailwind CSS with custom animations and gradients
- **State Management**: React Context for authentication state

## Key Architecture Patterns

### Authentication Flow
- `AuthContext` provides authentication state management using Supabase
- `ProtectedRoute` component wraps authenticated routes
- `PublicRoute` component redirects authenticated users to dashboard
- Authentication state persists across page refreshes

### Component Structure
- `/components/ui/` - Reusable UI components (buttons, inputs, toast, etc.)
- `/components/` - Feature-specific components (Features, Footer, Navbar, etc.)
- `/pages/` - Page-level components (LandingPage, LoginPage, DashboardPage)
- `/contexts/` - React Context providers

### File Organization
- `/lib/supabaseClient.js` - Supabase client configuration
- `/lib/utils.js` - Utility functions for className merging
- Path aliases configured with `@/` pointing to `/src/`

## Key Dependencies

- **React Router**: Client-side routing with protected routes
- **Supabase**: Backend-as-a-service for authentication and database
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Development Notes

- The application uses a dark theme with gradient backgrounds (slate-950 to indigo-950)
- Vite configuration includes custom error handling and CORS settings
- Components follow shadcn/ui patterns with Tailwind styling
- Authentication redirects are handled automatically via AuthContext
- The app is configured for development with hot reload and fast refresh

## Route Structure

- `/` - Landing page (public)
- `/login` - Login page (redirects to dashboard if authenticated)
- `/dashboard` - Protected dashboard page
- Catch-all route redirects to landing page
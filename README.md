# Nx Monorepo for React Router 7 Apps


This repository is an Nx monorepo designed for building applications with **React Router 7**. It provides a robust structure for both frontend and backend development, along with shared libraries and a design system.

## Demo

### Preview

[![Watch the demo](https://cdn.loom.com/sessions/thumbnails/0852a59123c346a7a8686e2a40065a25-with-play.gif)](https://www.loom.com/share/0852a59123c346a7a8686e2a40065a25?sid=5d9f47ec-c716-402f-8e49-c06283e6f38f)

[Watch on Loom](https://www.loom.com/share/0852a59123c346a7a8686e2a40065a25?sid=5d9f47ec-c716-402f-8e49-c06283e6f38f)

## Features

- **Backend**: Node.js + Express server included.
- **Shared Library**: Common utilities and functions for both backend and frontend.
- **UI Library / Design System**: Built with [shadcn/ui](https://ui.shadcn.com/), compatible with the CLI (note: generated component paths may need adjustment).
- **App Generator**: Custom Nx generator to scaffold new React Router 7 apps, ready for customization in content and style.
- **Centralized Dependencies**: All dependencies are managed in the root `package.json`.

## Getting Started

1. **Install dependencies:**
    ```sh
    npm install
    ```

2. **Start a frontend app:**
    ```sh
    npx nx dev router-web
    ```
    Or, for any app:
    ```sh
    npx nx dev {appName}
    ```

3. **Start the backend:**
    ```sh
    npx nx serve backend
    ```

4. **Generate a new React Router app:**
    ```sh
    npx nx g @rr/rrb:rrb-gen appName
    ```
    Then start it:
    ```sh
    npx nx dev appName
    ```

## Design System & Tailwind

- The design system uses **shadcn/ui** and is fully compatible with Tailwind CSS.
- Tailwind transpilation works seamlessly with the design system components.

## Folder Structure

```
apps/       # Frontend and backend applications
tools/      # Custom Nx generators
packages/   # UI library (design system), shared utilities, and types
```

---

Feel free to explore, extend, and build scalable apps with this Nx monorepo setup!

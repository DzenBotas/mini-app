# Project Requirements – eSIM Store Telegram Mini App

## Goal
Create a mobile-first Telegram Mini App for an eSIM store, built with React, using the official Telegram Mini App SDK and TelegramUI kit.

## Features
- Browse global, regional, and country-specific eSIM plans
- View details of each bundle (price per GB, plans available, coverage)
- Purchase eSIMs (handled via backend)
- View active and past purchases
- Get support via help screen

## Pages / Views
### StorePage (Main Entry)
- Header: logo + profile icon
- Features section: 3 tiles (Global Coverage, Fast Networks, Instant Activation)
- Search bar
- Category pills: Country, Regional, Global
- Bundle cards list:
  - icon, name, country count, from {price}/GB, number of plans
  - full-card clickable

### BundleDetailPage
- Bundle info
- Plan list
- Purchase action

### MyESIMsPage
- List of user’s eSIMs
- Status (active/expired)
- QR code re-download

### HelpPage
- FAQ
- Troubleshooting
- Contact options

## Tech Stack
- Frontend: React, TypeScript
- UI Kit: TelegramUI
- SDK: @telegram-apps/sdk, @telegram-apps/sdk-react
- State: useState, useEffect, context API if needed
- Backend: Supabase (auth, database, possibly functions)
- Dev Tools: Vite, ESLint, GitHub Pages or Render for hosting

## Telegram SDK Integration
- Use `useWebApp()` to control window, theme, and navigation
- Use `useBackButton()` for back button behavior
- Use `initPopup()` for modals
- Use `WebApp.sendData()` to trigger checkout or purchases
- Use theme-aware styles via `useThemeParams()`

## Notes
- Avoid using `mockTelegramEnv` in production.
- Use HTTPS for dev with vite-plugin-mkcert.

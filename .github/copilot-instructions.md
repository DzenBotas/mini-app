# Copilot Instructions for eSIM Store Telegram Mini App

## General
- Use React + TypeScript.
- Use Telegram Mini App template structure with Vite.
- Integrate `@telegram-apps/sdk` and `@telegram-ui/components` for UI.
- Use TelegramUI components for layout, buttons, modals, icons, etc.
- Use `@telegram-ui/styles` for consistent theming.
- All interactions must feel native to Telegram (lightweight, fast, clean).

## Component Naming
- `StorePage.tsx`: shows main store page with plans
- `BundleCard.tsx`: shows individual eSIM plan bundle
- `SearchBar.tsx`: filters plans
- `FeatureTiles.tsx`: three tiles showing: Global Coverage, Fast Networks, Instant Activation
- `CategoryTabs.tsx`: pills for Country, Regional, Global
- `FooterNav.tsx`: Store | My eSIMs | Help
- `ProfileMenu.tsx`: for user profile options

## Styling & UI
- Use components from TelegramUI like `Button`, `Tabs`, `Card`, `Badge`, `Input`.
- Cards must be tappable across their entire surface.
- Category buttons should use `Tabs` or pill-style buttons.
- Navigation bar should use `BottomNavBar` from TelegramUI or custom component with similar styling.
- Respect Telegram light/dark theme using `useThemeParams()` from SDK.

## Data
- Each eSIM bundle object includes:
  - `name: string`
  - `coverageCount: number`
  - `pricePerGb: number`
  - `planCount: number`
  - `iconUrl: string`

## UX
- Prioritize fast loading and user feedback.
- Highlight "New" or "Popular" plans with tags.
- Use `useBackButton()` from SDK for hardware back compatibility.
- Use `initPopup()` for confirmation dialogs.

## Navigation
- This is a single-page app. Use local state and components for routing.
- Use Telegram WebApp SDK methods for navigation or alerts.

## Backend
- Data is fetched from Supabase (REST or RPC).
- Bundle list and plan details are dynamic.

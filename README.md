# Archnova Studio

**[View Live App](https://archnova.vercel.app)**

![Archnova Banner](./public/logo.png)

## Overview
Archnova Studio is a web application designed for architecture firms. It functions as a public-facing portfolio and a secure internal dashboard for managing projects, clients, and team schedules.

### Core Architecture
Instead of using separate platforms for marketing, project tracking, and client communication, this application unifies these functions into a single Next.js codebase. 

- **Client Portfolio:** A public landing page displaying past projects and firm philosophy.
- **Internal Dashboard:** A secure area where staff can track project status, upload documents, and manage client meetings.
- **Location & Meetings:** Projects integrate with Google Maps for site locations, and meetings integrate directly with Google Meet links.

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **UI Components**: Radix UI & Shadcn
- **Icons**: Lucide React
- **Deployment**: Vercel

## Local Development

To run this project locally, ensure you have Node.js installed, then execute the following commands:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This repository is optimized for Vercel. You can deploy it by installing the Vercel CLI and running the production command:

```bash
npm i -g vercel
npx vercel --prod
```

# Daksh Yadav Portfolio

A production-ready personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, next-themes, Lucide icons, and shadcn-style UI components.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file for the contact form:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## EmailJS setup

1. Create an EmailJS account and connect the email service you want to use.
2. Create a template with these variables:
   - `from_name`
   - `from_email`
   - `project_type`
   - `message`
3. Copy the service ID, template ID, and public key into `.env.local`.
4. Restart the dev server after adding env vars.

## Content updates

- Update project data in `data/projects.ts`
- Update skills in `data/skills.ts`
- Update experience and highlights in `data/experience.ts`
- Update personal links and services in `data/site.ts`
- Replace `/public/images/profile-daksh.png` if you want to swap in a newer portrait later
- Replace the project SVGs in `/public/images/projects/` with real screenshots when ready

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Set the same EmailJS environment variables in the Vercel project settings.
4. Deploy.

## Tech stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- Lucide React
- shadcn-style component architecture

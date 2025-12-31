# Portfolio Website - Setup Guide

This is your professional portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design that works on all devices
- Hero section with contact information and social links
- About section highlighting your professional profile
- Comprehensive experience timeline
- Skills showcase organized by category
- Education and certifications display
- Contact section with professional references
- Clean, professional design with smooth animations

## How to Download and Set Up on Your Local Machine

### Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - To check if installed, open a terminal and run: `node --version`

2. **Git** (optional, but recommended)
   - Download from: https://git-scm.com/
   - To check if installed, run: `git --version`

### Step 1: Download the Project

You have two options:

#### Option A: Download as ZIP
1. Download all project files as a ZIP archive
2. Extract the ZIP file to a folder on your computer
3. Open a terminal/command prompt in that folder

#### Option B: Using Git (if you have Git installed)
```bash
# Clone or download the project to your computer
# Navigate to where you want to save the project
cd ~/Documents  # or your preferred location
# Then move the project folder there
```

### Step 2: Navigate to the Project Folder

Open your terminal/command prompt and navigate to the project folder:

```bash
cd path/to/your/portfolio-folder
```

For example:
- Windows: `cd C:\Users\YourName\Downloads\portfolio`
- Mac/Linux: `cd ~/Downloads/portfolio`

### Step 3: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will download all necessary dependencies. It may take a few minutes.

### Step 4: Start the Development Server

Once installation is complete, start the development server:

```bash
npm run dev
```

You should see output like:

```
VITE v5.4.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 5: View Your Portfolio

Open your web browser and go to:

```
http://localhost:5173/
```

Your portfolio website will be displayed and running live!

## Making Changes

### Editing Content

All components are located in the `src/components/` folder:

- `Hero.tsx` - Your name, title, and contact info
- `About.tsx` - Professional summary and objectives
- `Experience.tsx` - Work experience and responsibilities
- `Skills.tsx` - Technical and soft skills
- `Education.tsx` - Education and certifications
- `Contact.tsx` - Contact information and references

To make changes:
1. Open the file you want to edit in any code editor (VS Code, Sublime Text, etc.)
2. Make your changes
3. Save the file
4. The browser will automatically refresh with your changes

### Changing Colors

The portfolio uses a neutral slate color scheme. To change colors, edit the Tailwind classes in the component files:

- `bg-slate-900` - Dark backgrounds
- `text-slate-900` - Dark text
- `bg-white` - Light backgrounds
- `text-white` - Light text

## Building for Production

When you're ready to deploy your portfolio:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder. You can upload the contents of this folder to any web hosting service.

## Deploying Your Portfolio

### Option 1: Netlify (Free)
1. Go to https://www.netlify.com/
2. Sign up for a free account
3. Drag and drop your `dist` folder
4. Your site will be live in seconds

### Option 2: Vercel (Free)
1. Go to https://vercel.com/
2. Sign up for a free account
3. Import your project
4. Vercel will automatically build and deploy

### Option 3: GitHub Pages (Free)
1. Create a GitHub account at https://github.com/
2. Create a new repository
3. Push your code to the repository
4. Enable GitHub Pages in repository settings

## Troubleshooting

### Port Already in Use
If you see "Port 5173 is already in use", either:
- Close other instances of the dev server
- Or run: `npm run dev -- --port 3000` to use a different port

### Module Not Found Errors
Run `npm install` again to ensure all dependencies are installed.

### Changes Not Showing
- Make sure you saved the file
- Try refreshing the browser (Ctrl+R or Cmd+R)
- Check the terminal for any error messages

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Build configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code for errors

## Need Help?

If you encounter any issues:
1. Check that Node.js is installed: `node --version`
2. Delete `node_modules` folder and `package-lock.json`, then run `npm install` again
3. Make sure you're in the correct project directory
4. Check for error messages in the terminal

## Customization Tips

1. **Add Your Photo**: Add an image to the `public` folder and reference it in `Hero.tsx`
2. **Update Projects**: Add a new `Projects.tsx` component to showcase your work
3. **Change Font**: Import Google Fonts in `index.html` and use them in your CSS
4. **Add Animations**: The project uses Tailwind's built-in animation utilities

Your portfolio is now ready to showcase your skills and experience to potential employers and clients!

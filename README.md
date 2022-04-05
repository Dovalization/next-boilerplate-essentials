# Next.JS Boilerplate Essentials

The easiest way to quick-start Next.JS projects, only the essentials!

Ideal for simple projects, proofs of concept and prototypes.

Also ideal for beginners, newcomers and those who are just getting started with Next.JS. 

Focusing on ease of use and simplicity.

>Less is more. - [Ludwig Mies van der Rohe](https://en.wikipedia.org/wiki/Ludwig_Mies_van_der_Rohe)


**Also includes:**
- A set of guidelines for writing reusable components to help you build a better product.
- Out-of-the-box linting and formatting to make your code look beautiful.
- Sample theme and global styles, just change the colors and fonts and you're good to go.
- SEO library already integrated, so you can focus on creating meaningful content.
- TypeScript support, ensuring your code if error-free before deploying.
- SWC support, to speed up your development workflow and reduce bundle size.

---

## 📋 Table of contents
1. [Motivation](#motivation)
1. [Getting Started](#getting-started)
1. [What's Included?](#included-packages)
1. [Project Structure](#structure)
1. [Closing Thoughts](#closing-thoughts)


---

## 💬 Motivation <span id="motivation"/>

Sometimes, you want to start a new project with Next.JS but you don't want to install all the dependencies by yourself. You can then use boilerplates to get a project up and running quickly. However, you might not want to use all the dependencies that are included in the boilerplate.

While production-ready boilerplates are available, you might not need it for small projects or a quick proof-of-concept.

This boilerplate includes only bare-bones components and libraries that are needed for a simple project, the idea is to get you up and running quickly and you take over from there.

With the vast ammount of architecture and design patterns that are available, it's hard to choose the right boilerplate for your project and even then, architecture decisions are not always straightforward or properly documented.

The structure of the project should also allow pieces of code to be reused, changed, or removed without affecting the rest of the project.

More than just serving as a way to get a project up and running quickly, **Next.JS Boilerplate Essentials** provides a set of battle-tested rules and best practices that can be used to create a project that is easy to expand and maintain. So you can waste less time trying to figure out how to do something and more time doing it!

I hope you enjoy using **Next.JS Boilerplate Essentials!**

---

## 📁 Getting started <span id="getting-started"/>

You can use this as a template simply by clicking the `Use this template` button.

Then, clone your repository and run the following commands:


```bash
# Install dependencies
yarn

# Run the development server
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser of choice.

From there, you can customize the project to your liking and start coding!

---

## 🧰 What's included? <span id="included-packages"/>
- [Next.JS](https://nextjs.org/) - The production-ready framework for React.
- [React](https://reactjs.org/) - The JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A strongly typed superset of JavaScript to catch errors before they happen.
- [Styled-Components](https://styled-components.com/) - A CSS-in-JS library useful for theming, styling and more.
- [Axios](https://axios-http.com/) - A promise-based HTTP client to make requests in both Node.js and the browser.  
- [Prettier](https://prettier.io/) - An opinionated code formatter to make your code look beautiful.
- [ESLint](https://eslint.org/) - A linter for JavaScript and JSX, useful for ensuring your code is error-free.
- [Next SEO](https://github.com/garmeeh/next-seo) - A library to manage your project's SEO easily.

---

## 📐 Project Structure <span id="structure"/>

While the project structure is very self-explanatory, it's important to know how to use it.

File-specific information can be found inside the file itself as comments.


```bash
.
├── public # Static files
│   └── images
│       └── favicon.ico 
├── src # Your source code.
│   ├── components # All your components should be here.
│   │   └── common # Shared components.
│   ├── context # Contexts for your components.
│   │   └── myContext.tsx 
│   ├── hooks # Hooks to use in your components.
│   ├── layout # Layouts for your pages.
│   │   └── Home
│   │       ├── HeroSection # Sections for the layout.
│   │       │   ├── index.tsx 
│   │       │   └── styles.ts
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── lib # External libraries and utilities.
│   │   ├── services # Services, such as API's.
│   │   │   └── api.ts
│   │   └── utils # Utilities, such as helpers.
│   │       └── youtubeUtils.ts
│   ├── pages # Default Next.JS pages.
│   │   ├── api # API routes.
│   │   │   └── hello.ts
│   │   ├── _app.tsx # Custom App component.
│   │   ├── _document.tsx # Custom Document component.
│   │   └── index.tsx # Landing page.
│   └── styles # Global styles.
│       ├── global.ts # Global style definitions.
│       ├── styled.d.ts # Type definitions for styled-components.
│       └── theme.ts # Theme definitions.
├── .editorconfig
├── .env.development # Environment variables for development.
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next-seo.config.js # SEO configuration.
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

---

## 👋🏻 Closing thoughts <span id="closing-thoughts"/>

Remember that sharing this boilerplate is a great to help me get feedback and help others learn from it. If you have any questions, please feel free to shoot me an [email](mailto:me@doval.dev).

Also feel free to fork this project and make your own! I would love to see what you come up with.

### And remember:

- **🚫 No spaghetti code allowed!**

- **🤝🏻 Help others in their dev journey!**

- **🤓 Have fun coding!**
## Medium Clone w/ NextJS, TS, Tailwind, & Sanity

First real shot at building a fullstack application using CRUD operations to update and fetch from remote storage. Using TypeScript and a full backend in a project was a lot of fun. Did have to fix some breaking changes within some pf Sanity's tooling
Built to practice developing Next.js apps using 3rd-party API plugins and responsive design tools like Chakra UI. Certain comments were left in the code as a reminder of my troubleshooting efforts/experimentation, while others indicate innovations I made over the original project from 

## Tech Used & Learning Takeaways

Tech: Next.js/ISR, Sanity.io, TailwindCSS, React Hook Forms, TypeScript

Takeaways: 
Documentation research and integration of 3rd-party API endpoints, component & module libraries, building, using async data-fetching in Next.js, using optional-chaining methods(?.) and other es6+ conditionals to render and execute code,

## Why I Built This Project

This project is intended as a learning experience for assembling and properly styling a NextJS app using a styled React component library (ChakraUI) and doing a thorough documentation dive into new tools: Chakra UI, Next.js, and the Bayut API endpoint details retrieved from an axios GET request with RapidAPI.

## How the File Structure is Setup

This project was created using the standard npx create-next-app command. There are two kinds of react component folders ( components and containers ) with each containing a folder for the jsx component listed and its corresponding css file. 

## Improvements to be Made With More Time/Experience

The site design is still using medium branded images and is accessing them via url paths from a content creator's site. They should be substituted with local Assets. The [slug].tsx file is roughly 250 lines an is in need of being componentized.
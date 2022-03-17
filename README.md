## Medium Clone w/ NextJS, TS, Tailwind, & Sanity

First real shot at building a fullstack application using CRUD operations to update and fetch from remote storage. Using TypeScript and a full backend in a project was a lot of fun.  


## Tech Used & Learning Takeaways

Tech: Next.js/ISR, Sanity.io, TailwindCSS, React Hook Forms, TypeScript

Takeaways: 
Documentation research and integration of the Sanity.io headless CMS as a backend plugin and real-time database for the comments and articles in the app, component & module libraries, using async data-fetching in Next.js, using .env variables to keep the keys useable for front-end queries, but inaccessible from the front-end deployed code. 
 - Did have to fix some breaking changes within some pf Sanity's tooling since sanity-io/next-sanity 5.0 release removed createImageUrlBuilder from the package so it had to first be located and added in separately.

## Why I Built This Project

This project is intended as a learning experience for creating, maintaining, and deploying a fullstack CRUD capable app in the style of the Medium news site. I've used node.js for previous explorations of backend, but having BaaS to just plug in like firebase is nice. Having the immediately available schemas is great for managing a variety of doc types as you manage the submitted content through Sanity Studio.

## How the File Structure is Setup

This project was created using: npx create-next-app --example with-tailwindcss. 

## Improvements to be Made With More Time/Experience

The site design is still using medium branded images and is accessing them via url paths from a Sonny Sangha's site. They should be substituted with local Assets. The [slug].tsx file is roughly 250 lines an is in need of being componentized.
![project_icon](https://raw.githubusercontent.com/Eliya-G/heiwa-studio/refs/heads/main/public/repo_logo.png)

Heiwa Studio is a full-stack demo website designed to showcase my front-end and back-end development skills from server to website. Built using React and react-router-dom, the site delivers a dynamic, responsive experience that looks great across desktop, tablet, and mobile devices. From day one, I prioritized cross-platform compatibility and clean design.
The site's theme is inspired by a zen meditation studio (not affiliated with any real business), using a tranquil color palette and carefully curated image assets to create a calm and modern user experience.


# Key Challenges and Solutions

## Dynamic CSS

To ensure the site performs well across devices, I implemented responsive design techniques using ternary-based CSS logic. Elements resize and reposition intelligently for different screen sizes, with overlayed HTML elements contributing to a clean, modern aesthetic.

## Building a Store Page

In a store page consistency is important, so here I prepared all the images with a consistent white background. Sharing the same design language be the same across the site. Then presented each item with a 320px width card, in a grid. Combined with a button handing function we have a store page.

## Private Database, Public Articles

To handle content securely, I set up a private database for storing articles, while exposing only a public-facing API for fetching data. This ensures sensitive backend information remains protected. A site service layer manages all API calls, making the experience seamless and secure for the user.

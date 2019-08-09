<p align="center">
  <a href="http://www.kylegill.com">
    <img alt="Gatsby" src="https://raw.githubusercontent.com/gillkyle/images/master/about-me.png" width="240" />
  </a>
</p>
<h1 align="center">
  Kyle Gill - Portfolio
</h1>

This is my portfolio to serve as a reference point for a lot of projects I've worked on and things I've written. 

_Feel free to fork the repo to make edits or use as a reference for your own project_

## 🚀 Quick start

First, clone the repo:

```sh
git clone https://github.com/gillkyle/me.git
```

Then install dependencies:

```sh
cd me && yarn
```

Then run using Gatsby (you may need to install the `gatsby-cli` if you haven't already):
```sh
gatsby develop
```
    
## 🧐 What's inside?

The site is built using Gatsby, leveraging a handful of plugins to pull in data, fonts, optimize images, among other things.

- a Medium source plugin is used to retrieve info from Medium about blog posts I've written
- the Clearbit logo api was used to retrieve grayscale images for icons and buttons
- the Gatsby image plugin was used to create optimized images to greatly improve performance and "blur up" some images

Static files like SVG's from the designs and my resume are also included. 

## 💫 Deploy

I've had issues with Netlify's deployment environments, deploys work just fine on Surge or pushed to a storage service. To create an optimized build run:

```sh
yarn build
```

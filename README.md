# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Github Repo](https://github.com/quasarblues/interactive-rating-component)
- Live Site URL: [Netlify Live Site](https://interactive-rating-component-quasarbl.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Material UI](https://mui.com/ "React UI tool")

**How my solution differs from the example**

* I used stars instead of numbers. This was quicker to do using Material UI. I needed to speed up the process so I could focus on the React side of things.
* Grey circles behind the numbers were excluded.
* I used icons from Material UI instead of svg images.
* I added a button to the Thank You component so users can change their ratings (and so we don't have to refresh the page to see the Rating component again)

### What I learned

+ How to use the sx property in Material UI
+ How to use Box, Stack, and Typography Components in Material UI.
+ How to set global CSS variables in a React project.
+ How to conditionally render content using React.
+ How to pass state to children.


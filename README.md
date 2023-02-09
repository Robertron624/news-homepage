# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl) by me [Robertron624](https://github.com/Robertron624). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- When clicking the hamburger button in mobile a menu should appear from the right side

### Screenshot

Desktop

![desktop](https://user-images.githubusercontent.com/72587880/217922118-d940b87f-734c-422a-ac96-479a7f9a42de.png)

Mobile

![mobile](https://user-images.githubusercontent.com/72587880/217922343-10b78707-9591-40b7-9ff5-dc0e8e7413ed.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [react-router](https://reactrouter.com/en/main) - React framework

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This was a fun project to learn responsive design and layout with grid/flexbox and handling state that changes
the style of the page.

The logic I implemented for the mobile menu:

```js
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    function updateMenu() {
        if (!isMenuClicked) {
            setMenuClass("menu visible");
            document
                .querySelector(".overlay")
                .classList.remove("overlay-hidden");
        } else {
            setMenuClass("menu hidden");
            document.querySelector(".overlay").classList.add("overlay-hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }

```

### Continued development

I want to keep improving my react state handling with more complex state, also maybe I will add the other pages since this
project only has the homepage.


### Useful resources

- [react router tutorial](https://reactrouter.com/en/main/start/tutorial) - This helped me to create the routes
- [Example resource 2](https://isotropic.co/react-multiple-pages/) - This is an amazing article which helped me understand how to use react-router and create a navbar with the different links.


## Author

- Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
- Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
- Twitter - [@robertdowny](https://www.twitter.com/robertdowny)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

- [James LePage](https://isotropic.co/react-multiple-pages/), and his article wich helped me to create a navbar and the links with react-router

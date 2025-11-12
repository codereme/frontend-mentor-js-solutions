# Blog Preview Card

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

## Screenshot

![Desktop screenshot](./assets/images/screenshot.png)

## What I learned

- Adaptive image cropping: Using image container `height` and blog image `object=fit: cover` to show different image sections - a cropped portion on mobile vs. the complete image on desktop.

```css
.img-container {
  width: 100%;
  height: 12.5rem;
}
.blog-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

- How to apply stylish borders to the card using `box-shadow`

```css
box-shadow: 8px 8px 0 var(--gray-950), 0 0 0 1px var(--gray-950);
```

## Links

- Solution URL: [https://www.frontendmentor.io/solutions/](https://www.frontendmentor.io/solutions/)
- Live Site URL: [https://codereme.github.io/blog-preview-card](https://codereme.github.io/blog-preview-card)

## Author

- Frontend Mentor - [@codereme](https://www.frontendmentor.io/profile/codereme)
- Github - [@codereme](https://github.com/codereme)

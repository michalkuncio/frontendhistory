# The history of Frontend

[frontendhistory.com](https://frontendhistory.com) ✨

![Alt Text](public/ogimagefb.jpg)

## Motivation

The frontend changes rapidly, with new libraries being released daily, and some features achieving full browser support. Likewise, some libraries and browsers become deprecated. What if we had something like a calendar that cataloged all significant events in the frontend world? This would allow us to stay informed about recent news and explore the distant history of frontend. It would be great to have a single comprehensive repository detailing the entire history of frontend development.

## FAQ

**I want to contribute and add some new items. Which items will be accepted?**

If you think it's important to the frontend community, go ahead and add it. Adding JS libraries can be a tad trickier because if we were to include every single JS package in this calendar, it'd be way too big. I think we should only list the relevant packages here, so you got to decide for yourself if a library is worth adding.

**What stack is used here?**

Nuxt

**Why not Astro, Tailwind, HTMX, HTML, XYZ?**

I love those tools but I feel the most comfortable with Vue and Nuxt

## Contributions

This is a long-term community project that will be as valuable as its contributions. Anyone can contribute and help write down the history of Frontend.

## How to contribute?

- Create a separate branch originating from **main**
- Create a pull request from your branch to **main**
- For new history entries, please add **[History items]** at the end of the PR title
- For other issues or improvements, don't you don't have to add any label in the PR title
- For new history entries, navigate to the appropriate year inside `/data` directory
- data should follow chronological order, there is no additional sorting
- It should follow the the following structure:

```js
export default {
    year: 2004,
    items: [
        {
            date: '2004-11-09',
            title: 'First version of Firefox released',
            link: 'https://en.wikipedia.org/wiki/Firefox',
            icon: 'firefox'
        }
    ]
};
```

- If you are adding a new type of history item, you can also add the SVG icon to `components/icons`
- Please note that new history items without the link with date confirmation won't be accepted
- Add the repository owner as a reviewer.

## Contributors

- [michalkuncio](https://github.com/michalkuncio/)
- [CARLOSGINER](https://github.com/CARLOSGINER)
- [eranshmil](https://github.com/eranshmil)
- [Kaamkiya](https://github.com/Kaamkiya)
- [danielroe](https://github.com/danielroe)

<p>contribute and get listed here! 🥳</p>

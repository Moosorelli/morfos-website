# morfos.se

Website for Morfos Edtech Akademi, deployed by Netlify (project `morfos-se`) on every push to `main`.

- `index.html`: the home page, plain HTML, copied as it is.
- `blogg/`: the blog at morfos.se/blogg/, built with [Eleventy](https://www.11ty.dev/).
- Font: Outfit (SIL Open Font License, see `fonts/LICENSE-outfit.txt`), self-hosted.

## Writing a blog post

1. Copy `blogg/inlagg/2026-11-22-mall.md` (the template, which is never published).
2. Name the copy `YYYY-MM-DD-short-name.md`. The date becomes the post date and the rest becomes the address, e.g. `2026-12-01-varfor-e-larande.md` → morfos.se/blogg/varfor-e-larande/
3. Edit `title`, `description`, `author` and the text (Markdown).
4. Remove the `draft: true` line to publish. Posts with `draft: true` are left out of the site.

Images go in `blogg/bilder/` and are referenced as `/blogg/bilder/name.jpg`.

The newest posts also appear in the feed at morfos.se/blogg/feed.xml.

## Building locally

```
npm install
npm start        # preview at http://localhost:8080
npm run build    # output in _site/
```

# Priest SSG

Currently a testing site

## Development

First
cd cms
strapi develop

Second
cd site
gatsby develop

## Strapi Content Types

### Services

- Title
- Content
- Cover
- User
- Excerpt
- Photo Gallery

https://www.gatsbyjs.org/docs/add-page-metadata/

### Gatsby Clean
``` gatsby clean ```
``` gatsby build ```
Move the uploads gallery
``` cd public ```
``` git init ```
``` git remote add dreamhost ssh://rilbat2@sumter.dreamhost.com/~/priest.rileybathurst.com ```
``` git add * -f ```
``` git commit -am "clean build" ```
``` git push --set-upstream dreamhost master --force ```
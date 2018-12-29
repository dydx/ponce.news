# Ponce News Network (a name in news)

## Installation

The `ponce.news` website is generated with [Gatsby.js](https://www.gatsbyjs.org/). Please see Gatsby documentation for setting up a local CLI. After doing this, simply download the `ponce.news` repo and install packages.

1. `git clone git@github.com:poncenewsnetwork/ponce.news.git`
2. `cd ponce.news`
3. `npm install`

## Local Development

Use the Gatsby CLI to operate the local development server. This will make a Live Reload server available at `http://localhost:8000` and a GraphiQL interface at `http://localhost:8000/___graphql`.

1. `gatsby develop`


## Deployment

The `ponce.news` website is hosted on Github Pages and is deployed via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) module via a single command

1. `npm run deploy`

> **NOTE:**
> This command only deploys to the production `gh-pages` branch. It is also crucial to check in your version of the site to `master`

## TODO

1. See if it is possible to cache requests to the DarkSky API
2. Set up markdown for articles
3. Add 7 day forecast for Weather
4. Fetch images from FB and host GitHub Pages or GCP Bucket
5. Fetch videos from FB, `ffmpeg` encode them into `m3u8` streams, and host these on GitHub Pages or GCP Bucket
6. Create Video Archive section
7. Add hamburger and slider for mobile sidebar
8. Explore offline mode
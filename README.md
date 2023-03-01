<h1 align="center">
  A Gatsby Image Portfolio
</h1>

A portfolio site built with [Gatsby](https://www.gatsbyjs.com/), based off of [gatsby-image-gallery](https://github.com/browniebroke/gatsby-image-gallery) by [@browniebroke](https://github.com/browniebroke). I also have added EXIF data using [@thomasgassmann](https://github.com/thomasgassmann)'s excellent [gatsby-plugin-sharp-exif](https://github.com/thomasgassmann/gatsby-plugin-sharp-exif) plugin.

## Project Goals

A headless server website that is fast, responsive and easy to maintain for a large database of images. Gatsby automatically generates multiple resolutions of the image files, allowing for fast loading on any device. The site concept is to use the image filenames for date sorting and additional data will be contained within the image's EXIF data, such as author, media, keywords, and more.

This is not a blog site, the single goal for this implementation is to display a large quantity of artwork organized by media and chronologically in a minimalist gallery-like format. Updates are primarily adding new images, but of course simple updates to the 'About' page can be easily done. One could easily add Gatsby blog-like functionality to the site, but it's left out in this version to keep it simple and easy to maintain.

## Installation Instructions

- Step 1: Setup a [Gatsby](https://www.gatsbyjs.com/) site on your local development machine. Use a simple template, this will include instructions for installing Node.js and all the dependencies.
= Step 2: Use a good text editor like Atom (just found out it's now deprecated, so something similar like Sublime) to organize and edit your text files.
- Step 3: Download or clone this repository
- Step 4: Using Terminal (OSX) or other command-line interface navigate to the 'gatsby-portfolio' on your hard drive - 'cd /Users/bryan/Documents/GitHub/gatsby-portfolio'
- Step 5: In Terminal, run the command 'npm install'
- Step 6: Once all the packages are installed, run the command 'gatsby develop' and verify that it working in your browser


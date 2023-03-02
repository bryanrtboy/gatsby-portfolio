<h1 align="center">
  A Gatsby Image Portfolio
</h1>

A portfolio site built with [Gatsby](https://www.gatsbyjs.com/), based off of [gatsby-image-gallery](https://github.com/browniebroke/gatsby-image-gallery) by [@browniebroke](https://github.com/browniebroke). I also have added EXIF data using [@thomasgassmann](https://github.com/thomasgassmann)'s excellent [gatsby-plugin-sharp-exif](https://github.com/thomasgassmann/gatsby-plugin-sharp-exif) plugin.

## Project Goals

A headless server website that is fast, responsive and easy to maintain for a large database of images. Gatsby automatically generates multiple resolutions of the image files, allowing for fast loading on any device. The site concept is to use the image filenames for date sorting and additional data will be contained within the image's EXIF data, such as author, media, keywords, and more.

This is not designed to be a blog site with frequent text updates. The single goal for this implementation is to display a large quantity of artwork organized by media and chronologically in a minimalist gallery-like format. Updates are primarily adding new images, but of course simple updates to the 'About' page can be easily done. One could easily add Gatsby blog-like functionality to the site, but it's left out in this version to keep it simple and easy to maintain.

## Installation Instructions

- Step 1: Setup a [Gatsby](https://www.gatsbyjs.com/) site on your local development machine. Use a simple template, this will include instructions for installing Node.js and all the dependencies.
= Step 2: Use a good text editor like Atom (just found out it's now deprecated, so something similar like Sublime) to organize and edit your text files.
- Step 3: Download or clone this repository
- Step 4: Using Terminal (OSX) or other command-line interface navigate to the 'gatsby-portfolio' on your hard drive - 'cd /Users/bryan/Documents/GitHub/gatsby-portfolio'
- Step 5: In Terminal, run the command 'npm install'
- Step 6: Once all the packages are installed, run the command 'gatsby develop' and verify that it working in your browser

## How To Use With Your Own Images

- Step 1: Gather together all of your high-resolution scans and photos of your artwork
- Step 2: Name your images using this format (!IMPORTANT) '1995-02-17-Title-of-my-Artwork.jpg' replacing 'Title-of-my-Artwork' with your title and using '-' for spaces. Don't use any funny characters like /,$,%,.,;, and make sure only one '.' is used prior to a three letter extensioin of .jpg, .png or .psd. GIF images are probably OK, but will not be re-sized by Gatsby, so stick to .jpg , .png or .psd at this stage.
- Step 3: Export or convert your high-res images to something reasonable in size, like 2000 pixels on the longest dimension or less. As part of the export process, decrease the quality from maximum (no compression) to high and make sure the resulting files are in RGB format as .jpg or .png
- Step 4: Decide on your main media categories and create a folder named for each, as I have done. Drag your web-ready images into those folders
-- All media/subject pages are based on the folder name, i.e. 'interactive' work resides in the 'images/interactive' folder. The interactive.tsx page includes a Gatsby query to fetch those images and build the gallery
- Step 5: Review how I organized the 'year' folder with a file named '1990.tsx' for each year. Add or delete files with a year that you have not created work. The app builds the 'year' menu based on what's in this folder and then finds all the images that start with that year in their filename. If you keep the pages I have included but have no work for that year, the page will be empty. Otherwise, the page builds a gallery from all work created in that year.
- Step 6: Edit the 'gatsby-config.js' with your information as well as pages like the 'about' page.
- Step 7: After you've organized your site, test it out using 'gatsby develop' in the Terminal and adjust to your needs!


# Cat Card App

## Intro
Hallo Harver!

I'm Charaka Gunatillake

This file will help you navigate through the changes. The main changes can be found in `index.js`.

## Changes

1. Moved the code for fetching cat images into a seperate function
2. Moved the code to merge and save image into another function
3. Moved the constants to the top of the file so that there're no magic numbers
4. Moved the commandline arguments out of the functions to make them testable
5. Improved log texts to be more meaningful
6. Replaced the use of the deprecated functions with supported functions
7. Replaced `mergeImg` library with `joinImages` (which uses `sharp`)
8. Replaced `request` with `node-fetch`
9. Added the skeleton code for testing with `jest`

## Installaion

Please run `npm install` first as the node_modules have not been included

npm install

## Usage

To generate a cat card, use the following command:

node index.js --greeting "Hello" --who "You" --width 400 --height 500 --color "Pink" --size 100

Replace the `--greeting` and `--who` flags with your desired text for the cat card. You can also customize the appearance of the cat image using the optional flags `--width`, `--height`, `--color`, and `--size`.

The cat card will be saved as `cat-card.jpg` in the current working directory.

## Command-line Arguments

- `--greeting`: The text to be displayed on the cat card as a greeting. (Default: "Hello")
- `--who`: The text to be displayed on the cat card addressing the recipient. (Default: "You")
- `--width`: The width of the cat image. (Default: 400)
- `--height`: The height of the cat image. (Default: 500)
- `--color`: The color of the cat image. (Default: "Pink")
- `--size`: The size of the text on the cat image. (Default: 100)

## Example

Generate a cat card with custom text:

node index.js --greeting "Hallo" --who "Haver!" 

## Testing

To run unit tests, use the following command:

npm test

Note I: The tests do not perform actual server requests, they are mocked with nock
Note II: The test file is not complete and TODOs have been added for additional test cases

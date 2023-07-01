import { join } from 'path';
import { joinImages } from 'join-images';
import fetch from 'node-fetch';
import argv from 'minimist';

// These constants can be moved to config file if needed
const CATAAS_SERVER_PATH = 'https://cataas.com/cat/says/';
const OUTPUT_FILENAME = 'cat-card.jpg';
const DEFAULT_WIDTH = 400, DEFAULT_HEIGHT = 500, DEFAULT_COLOR = 'Pink', DEFAULT_SIZE = 100;
const DEFAULT_GREETING = 'Hello', DEFAULT_WHO = 'You';

// Fetch the cat images from the server
async function fetchCatImage(text, {width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT, color = DEFAULT_COLOR, size = DEFAULT_SIZE} = {}) {
  const requestUrl = `${CATAAS_SERVER_PATH}${text}?width=${width}&height=${height}&color=${color}&size=${size}`;
  const response = await fetch(requestUrl);
  return Buffer.from(await response.arrayBuffer());
}

// Merge and save the images
async function mergeAndSaveImages(images) {
  const img = await joinImages(images, { direction: 'horizontal' });
  await img.toFile(join(process.cwd(), OUTPUT_FILENAME));
}

// Main function
async function main() {
  try {
    // Parse command-line arguments
    const args = argv(process.argv.slice(2));
    console.log(`Running with the arguments: ${JSON.stringify(args)}`);
    const { greeting = DEFAULT_GREETING, who = DEFAULT_WHO, ...otherConfigs } = args;
    
    // Fetch the images
    const imagePromises = [greeting, who].map(async (text) => fetchCatImage(text, otherConfigs));
    const images = await Promise.all(imagePromises);
    console.log('Done fetching cat images');

    // Merge and save the images
    await mergeAndSaveImages(images);
    console.log('The file was saved!');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

// Prevents running the main function for unit tests
if (process.env.NODE_ENV !== 'test')
  main();

// exporting this solely for the purpose of illustrating how testing works
export { fetchCatImage, /* mergeAndSaveImages, main */ }

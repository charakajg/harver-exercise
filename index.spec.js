import { jest } from '@jest/globals'
import { fetchCatImage } from './index';
import nock from 'nock';

describe('fetchCatImage', () => {
  test('should fetch the cat image from the server', async () => {
    const expectedBuffer = Buffer.from([0, 1, 2, 3]); // Mocked buffer data

    // Mock the fetch http calls using nock
    nock('https://cataas.com')
      .get(`/cat/says/Hello`)
      .query({ width: 400, height: 500, color: 'Pink', s: 100 })
      .reply(200, expectedBuffer);

    // Call the function and assert the result
    const result = await fetchCatImage('Hello');

    expect(result).toEqual(expectedBuffer);
  });

  test('should fetch the cat image when speicic configurations are provided', async () => {
    const expectedBuffer = Buffer.from([5, 2, 2, 5]); // Mocked buffer data

    // Mock the fetch http calls using nock
    nock('https://cataas.com')
      .get(`/cat/says/SomethingElse`)
      .query({ width: 240, height: 340, color: 'Green', s: 120 })
      .reply(200, expectedBuffer);

    // Call the function and assert the result
    const result = await fetchCatImage('SomethingElse', { width: 240, height: 340, color: 'Green', size: 120 });

    expect(result).toEqual(expectedBuffer);
  });
});

describe.skip('mergeAndSaveImages', () => {
  test('should merge and saves the images', async () => {
    // TODO mock 3rd party dependencies and test mergeAndSaveImages function
  });
});

describe.skip('main', () => {
  test('should use default values when the command-line arguments have not been provided', async () => {
    // TODO mock minimist and test whether fetchCatImage/mergeAndSaveImages called with default values
  });

  test('should use correct values when the command-line arguments have been passed', async () => {
    // TODO mock minimist and test whether fetchCatImage/mergeAndSaveImages called with correct arguments
  });
});

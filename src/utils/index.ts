/**
 * @file Utils
 */

/**
 * Wait for a given amount of time
 */
export const waitFor = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

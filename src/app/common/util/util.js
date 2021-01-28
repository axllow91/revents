export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFileExtension(filename) {
  // ex: .filename which can be a empty string or a file with . extension
  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}

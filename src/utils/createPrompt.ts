export function createLogoPrompt<T extends string>(userInput: T, size: number = 1024) {
  return `Create a ${size} × ${size} px square mobile app logo illustration: ${userInput}. Focus on a modern, professional, and visually striking design that works for both iOS and Android. Use bold, vibrant colors, clean geometry, and subtle depth with shadowing. Center the main design with comfortable margins. Solid background or subtle gradient. **Do NOT include any text, letters, words, or numbers.** Final logo should be memorable, sleek, polished, and optimized for app icons.`;
}

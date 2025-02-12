export function hasLetterWords(text: string) {
  const words = text.toLowerCase().split(/\s+/); // Разделение по пробелам
  const regex = /^[a-zа-яё]+$/i; // Регулярка для слов только из букв

  return words.some((word) => regex.test(word));
}

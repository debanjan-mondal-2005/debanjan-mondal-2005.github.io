import { useEffect, useState } from 'react';

export function useTypingEffect(
  words,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetweenWords = 2000
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    let timer;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // Erasing phase
      timer = setTimeout(() => {
        setCurrentText(prev => prev.substring(0, prev.length - 1));
      }, erasingSpeed);
    } else {
      // Typing phase
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    // If fully typed, wait and switch to deleting
    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    }

    // If fully erased, switch to the next word
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex(prev => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, erasingSpeed, delayBetweenWords]);

  return currentText;
}

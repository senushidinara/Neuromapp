import { useCallback, useEffect, useRef } from 'react';

export const useSpeech = (text: string) => {
  const synthRef = useRef(window.speechSynthesis);

  const speak = useCallback(() => {
    if (synthRef.current.speaking) {
      // Don't interrupt if already speaking
      return;
    }
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      synthRef.current.speak(utterance);
    }
  }, [text]);

  // Cleanup on unmount
  useEffect(() => {
    const synth = synthRef.current;
    return () => {
      synth.cancel();
    };
  }, []);

  return speak;
};

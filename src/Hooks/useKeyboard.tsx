import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboard = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  return keyboardStatus;
};

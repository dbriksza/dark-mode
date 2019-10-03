import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);

  const handleChanges = e => {
    setStoredValue(e);
  };

  useEffect(() => {
    if (storedValue == true) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  });
  return [storedValue, handleChanges, setStoredValue];
};

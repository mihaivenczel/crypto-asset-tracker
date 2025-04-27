export const saveDarkModeToStorage = (isDarkMode: boolean) => {
  try {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  } catch (error) {
    console.log(error);
  }
};

export const getDarkModeFromStorage = (): boolean => {
  try {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === null) return false;
    return JSON.parse(storedDarkMode);
  } catch (error) {
    console.log(error);
    return false;
  }
};

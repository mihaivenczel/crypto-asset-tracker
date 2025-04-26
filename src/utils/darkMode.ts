export const enableDarkMode = () => {
  document.documentElement.classList.add("dark");
};

export const disableDarkMode = () => {
  document.documentElement.classList.remove("dark");
};

/**
 * Toggle dark mode on the document root
 * @param isDark - true to enable dark mode, false to disable
 */
export const toggleDarkMode = (isDark: boolean) => {
  document.documentElement.classList.toggle("dark", isDark);
};

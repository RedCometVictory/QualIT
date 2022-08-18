const globalTheme = async (newTheme) => {
  localStorage.setItem('qualit__theme', newTheme)
  return newTheme;
};

const themeService = {
  globalTheme
};
export default themeService;
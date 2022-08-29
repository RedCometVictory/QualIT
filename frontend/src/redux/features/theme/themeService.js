const globalTheme = async (newTheme) => {
  localStorage.setItem('qualit__theme', newTheme)
  return newTheme;
};

const unsplashTheme = async (openDrawer) => {
  return openDrawer;
}

const themeService = {
  globalTheme,
  unsplashTheme
};
export default themeService;
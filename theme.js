
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'theme-default';
  setTheme(savedTheme);
};

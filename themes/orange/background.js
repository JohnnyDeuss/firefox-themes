const themes = {
  normal: {
    images: {
      theme_frame: "images/none.png"
    },
    colors: {
      frame: "rgb(243, 174, 86)",
      toolbar: "rgb(249, 206, 153)",
      tab_selected: "rgb(250, 224, 188)",
      tab_text: "rgb(0, 0, 0)",
    }
  },
  private: {
    images: {
      theme_frame: "images/none.png",
    },
    colors: {
      frame: "rgb(123, 73, 9)",
      toolbar: "rgb(152, 88, 9)",
      tab_selected: "rgb(152, 88, 9)",
      tab_line: "rgb(0, 0, 0)",
      tab_text: "rgb(245, 245, 245)",
      tab_background_text: "rgb(245, 245, 245)",
    }
  }
};

function themeWindow(window) {
  const themeName = window.incognito ? 'private' : 'normal';
  browser.theme.update(window.id, themes[themeName])
}

browser.windows.onCreated.addListener(themeWindow);
browser.windows.getAll().then(wins => wins.forEach(themeWindow));

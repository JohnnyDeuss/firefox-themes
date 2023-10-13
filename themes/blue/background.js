const themes = {
  normal: {
    images: {
      theme_frame: "images/none.png"
    },
    colors: {
      frame: "rgb(89, 180, 240)",
      toolbar: "rgb(155, 210, 248)",
      tab_selected: "rgb(180, 225, 246)",
      tab_text: "rgb(0, 0, 0)",
    }
  },
  private: {
    images: {
      theme_frame: "images/none.png",
    },
    colors: {
      frame: "rgb(11, 77, 121)",
      toolbar: "rgb(11, 93, 151)",
      tab_selected: "rgb(15, 109, 157)",
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


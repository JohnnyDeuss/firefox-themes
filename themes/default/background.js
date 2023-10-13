function themeWindow(window) {
  if (window.incognito) {
    browser.theme.update(window.id, {
      images: {
        theme_frame: "images/none.png",
      },
      colors: {
        frame: "rgb(60, 64, 67)",
        toolbar: "rgb(53, 54, 58)",
        tab_selected: "rgb(53, 54, 58)",
        tab_line: "rgb(0, 0, 0)",
        tab_text: "rgb(245, 245, 245)",
        tab_background_text: "rgb(245, 245, 245)",
      }
    });
  }
  else {
    browser.theme.reset(window.id);
  }
}

browser.windows.onCreated.addListener(themeWindow);
browser.windows.getAll().then(wins => wins.forEach(themeWindow));

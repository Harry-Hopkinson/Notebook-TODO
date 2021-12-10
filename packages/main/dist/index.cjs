"use strict";
var require$$1 = require("electron");
var require$$1$1 = require("path");
require("url");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
const isSingleInstance = require$$1.app.requestSingleInstanceLock();
if (!isSingleInstance) {
  require$$1.app.quit();
  process.exit(0);
}
require$$1.app.disableHardwareAcceleration();
const env = { "VITE_DEV_SERVER_URL": "http://localhost:3000/", "BASE_URL": "/", "MODE": "development", "DEV": true, "PROD": false };
{
  require$$1.app.whenReady().then(() => Promise.resolve().then(function() {
    return /* @__PURE__ */ _interopNamespace(require("electron-devtools-installer"));
  })).then(({ default: installExtension, VUEJS3_DEVTOOLS }) => installExtension(VUEJS3_DEVTOOLS, {
    loadExtensionOptions: {
      allowFileAccess: true
    }
  })).catch((e) => console.error("Failed install extension:", e));
}
let mainWindow = null;
const createWindow = async () => {
  mainWindow = new require$$1.BrowserWindow({
    show: false,
    vibrancy: "under-window",
    visualEffectState: "active",
    webPreferences: {
      preload: require$$1$1.join(__dirname, "../../preload/dist/index.cjs"),
      contextIsolation: env.MODE !== "test",
      enableRemoteModule: env.MODE === "test"
    }
  });
  mainWindow.on("ready-to-show", () => {
    if (!(mainWindow == null ? void 0 : mainWindow.isVisible())) {
      mainWindow == null ? void 0 : mainWindow.show();
    }
    {
      mainWindow == null ? void 0 : mainWindow.webContents.openDevTools();
    }
  });
  const pageUrl = env.VITE_DEV_SERVER_URL;
  await mainWindow.loadURL(pageUrl);
};
require$$1.app.on("second-instance", () => {
  if (mainWindow) {
    if (mainWindow.isMinimized())
      mainWindow.restore();
    mainWindow.focus();
  }
});
require$$1.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    require$$1.app.quit();
  }
});
require$$1.app.whenReady().then(createWindow).catch((e) => console.error("Failed create window:", e));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gZnJvbSAnZWxlY3Ryb24nO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCc7XHJcblxyXG5cclxuY29uc3QgaXNTaW5nbGVJbnN0YW5jZSA9IGFwcC5yZXF1ZXN0U2luZ2xlSW5zdGFuY2VMb2NrKCk7XHJcblxyXG5pZiAoIWlzU2luZ2xlSW5zdGFuY2UpIHtcclxuICBhcHAucXVpdCgpO1xyXG4gIHByb2Nlc3MuZXhpdCgwKTtcclxufVxyXG5cclxuYXBwLmRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbigpO1xyXG5cclxuLyoqXHJcbiAqIFdvcmthcm91bmQgZm9yIFR5cGVTY3JpcHQgYnVnXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy80MTQ2OCNpc3N1ZWNvbW1lbnQtNzI3NTQzNDAwXHJcbiAqL1xyXG5jb25zdCBlbnYgPSBpbXBvcnQubWV0YS5lbnY7XHJcblxyXG5cclxuLy8gSW5zdGFsbCBcIlZ1ZS5qcyBkZXZ0b29sc1wiXHJcbmlmIChlbnYuTU9ERSA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIGFwcC53aGVuUmVhZHkoKVxyXG4gICAgLnRoZW4oKCkgPT4gaW1wb3J0KCdlbGVjdHJvbi1kZXZ0b29scy1pbnN0YWxsZXInKSlcclxuICAgIC50aGVuKCh7IGRlZmF1bHQ6IGluc3RhbGxFeHRlbnNpb24sIFZVRUpTM19ERVZUT09MUyB9KSA9PiBpbnN0YWxsRXh0ZW5zaW9uKFZVRUpTM19ERVZUT09MUywge1xyXG4gICAgICBsb2FkRXh0ZW5zaW9uT3B0aW9uczoge1xyXG4gICAgICAgIGFsbG93RmlsZUFjY2VzczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcignRmFpbGVkIGluc3RhbGwgZXh0ZW5zaW9uOicsIGUpKTtcclxufVxyXG5cclxubGV0IG1haW5XaW5kb3c6IEJyb3dzZXJXaW5kb3cgfCBudWxsID0gbnVsbDtcclxuXHJcbmNvbnN0IGNyZWF0ZVdpbmRvdyA9IGFzeW5jICgpID0+IHtcclxuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgc2hvdzogZmFsc2UsIC8vIFVzZSAncmVhZHktdG8tc2hvdycgZXZlbnQgdG8gc2hvdyB3aW5kb3dcclxuICAgIHZpYnJhbmN5OiAndW5kZXItd2luZG93JyxcclxuICAgIHZpc3VhbEVmZmVjdFN0YXRlOiAnYWN0aXZlJyxcclxuICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbiAgICAgIHByZWxvYWQ6IGpvaW4oX19kaXJuYW1lLCAnLi4vLi4vcHJlbG9hZC9kaXN0L2luZGV4LmNqcycpLFxyXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiBlbnYuTU9ERSAhPT0gJ3Rlc3QnLCAgIC8vIFNwZWN0cm9uIHRlc3RzIGNhbid0IHdvcmsgd2l0aCBjb250ZXh0SXNvbGF0aW9uOiB0cnVlXHJcbiAgICAgIGVuYWJsZVJlbW90ZU1vZHVsZTogZW52Lk1PREUgPT09ICd0ZXN0JywgLy8gU3BlY3Ryb24gdGVzdHMgY2FuJ3Qgd29yayB3aXRoIGVuYWJsZVJlbW90ZU1vZHVsZTogZmFsc2VcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHlvdSBpbnN0YWxsIGBzaG93OiB0cnVlYCB0aGVuIGl0IGNhbiBjYXVzZSBpc3N1ZXMgd2hlbiB0cnlpbmcgdG8gY2xvc2UgdGhlIHdpbmRvdy5cclxuICAgKiBVc2UgYHNob3c6IGZhbHNlYCBhbmQgbGlzdGVuZXIgZXZlbnRzIGByZWFkeS10by1zaG93YCB0byBmaXggdGhlc2UgaXNzdWVzLlxyXG4gICAqXHJcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZWxlY3Ryb24vZWxlY3Ryb24vaXNzdWVzLzI1MDEyXHJcbiAgICovXHJcbiAgbWFpbldpbmRvdy5vbigncmVhZHktdG8tc2hvdycsICgpID0+IHtcclxuICAgIGlmICghbWFpbldpbmRvdz8uaXNWaXNpYmxlKCkpIHtcclxuICAgICAgbWFpbldpbmRvdz8uc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbnYuTU9ERSA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICBtYWluV2luZG93Py53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogVVJMIGZvciBtYWluIHdpbmRvdy5cclxuICAgKiBWaXRlIGRldiBzZXJ2ZXIgZm9yIGRldmVsb3BtZW50LlxyXG4gICAqIGBmaWxlOi8vLi4vcmVuZGVyZXIvaW5kZXguaHRtbGAgZm9yIHByb2R1Y3Rpb24gYW5kIHRlc3RcclxuICAgKi9cclxuICBjb25zdCBwYWdlVXJsID0gZW52Lk1PREUgPT09ICdkZXZlbG9wbWVudCdcclxuICAgID8gZW52LlZJVEVfREVWX1NFUlZFUl9VUkxcclxuICAgIDogbmV3IFVSTCgnLi4vcmVuZGVyZXIvZGlzdC9pbmRleC5odG1sJywgJ2ZpbGU6Ly8nICsgX19kaXJuYW1lKS50b1N0cmluZygpO1xyXG5cclxuXHJcbiAgYXdhaXQgbWFpbldpbmRvdy5sb2FkVVJMKHBhZ2VVcmwpO1xyXG59O1xyXG5cclxuXHJcbmFwcC5vbignc2Vjb25kLWluc3RhbmNlJywgKCkgPT4ge1xyXG4gIC8vIFNvbWVvbmUgdHJpZWQgdG8gcnVuIGEgc2Vjb25kIGluc3RhbmNlLCB3ZSBzaG91bGQgZm9jdXMgb3VyIHdpbmRvdy5cclxuICBpZiAobWFpbldpbmRvdykge1xyXG4gICAgaWYgKG1haW5XaW5kb3cuaXNNaW5pbWl6ZWQoKSkgbWFpbldpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICBtYWluV2luZG93LmZvY3VzKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xyXG4gICAgYXBwLnF1aXQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbmFwcC53aGVuUmVhZHkoKVxyXG4gIC50aGVuKGNyZWF0ZVdpbmRvdylcclxuICAuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCBjcmVhdGUgd2luZG93OicsIGUpKTtcclxuXHJcblxyXG4vLyBBdXRvLXVwZGF0ZXNcclxuaWYgKGVudi5QUk9EKSB7XHJcbiAgYXBwLndoZW5SZWFkeSgpXHJcbiAgICAudGhlbigoKSA9PiBpbXBvcnQoJ2VsZWN0cm9uLXVwZGF0ZXInKSlcclxuICAgIC50aGVuKCh7IGF1dG9VcGRhdGVyIH0pID0+IGF1dG9VcGRhdGVyLmNoZWNrRm9yVXBkYXRlc0FuZE5vdGlmeSgpKVxyXG4gICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKCdGYWlsZWQgY2hlY2sgdXBkYXRlczonLCBlKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImFwcCIsIkJyb3dzZXJXaW5kb3ciLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNLG1CQUFtQkEsZUFBSTtBQUU3QixJQUFJLENBQUMsa0JBQWtCO2lCQUNqQjtVQUNJLEtBQUs7QUFBQTtBQUdmQSxlQUFJO0FBTUosTUFBTSxNQUFNO0FBSW9CO2lCQUMxQixZQUNELEtBQUssTUFBTTtxREFBTztBQUFBLE1BQ2xCLEtBQUssQ0FBQyxFQUFFLFNBQVMsa0JBQWtCLHNCQUFzQixpQkFBaUIsaUJBQWlCO0FBQUEsSUFDMUYsc0JBQXNCO0FBQUEsTUFDcEIsaUJBQWlCO0FBQUE7QUFBQSxNQUdwQixNQUFNLE9BQUssUUFBUSxNQUFNLDZCQUE2QjtBQUFBO0FBRzNELElBQUksYUFBbUM7QUFFdkMsTUFBTSxlQUFlLFlBQVk7ZUFDbEIsSUFBSUMseUJBQWM7QUFBQSxJQUM3QixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixtQkFBbUI7QUFBQSxJQUNuQixnQkFBZ0I7QUFBQSxNQUNkLFNBQVNDLGtCQUFLLFdBQVc7QUFBQSxNQUN6QixrQkFBa0IsSUFBSSxTQUFTO0FBQUEsTUFDL0Isb0JBQW9CLElBQUksU0FBUztBQUFBO0FBQUE7YUFVMUIsR0FBRyxpQkFBaUIsTUFBTTtRQUMvQixDQUFDLDBDQUFZLGNBQWE7K0NBQ2hCO0FBQUE7QUFHa0I7K0NBQ2xCLFlBQVk7QUFBQTtBQUFBO1FBU3RCLFVBQ0YsSUFBSTtRQUlGLFdBQVcsUUFBUTtBQUFBO0FBSTNCRixlQUFJLEdBQUcsbUJBQW1CLE1BQU07TUFFMUIsWUFBWTtRQUNWLFdBQVc7aUJBQTBCO2VBQzlCO0FBQUE7QUFBQTtBQUtmQSxlQUFJLEdBQUcscUJBQXFCLE1BQU07TUFDNUIsUUFBUSxhQUFhLFVBQVU7bUJBQzdCO0FBQUE7QUFBQTtBQUtSQSxlQUFJLFlBQ0QsS0FBSyxjQUNMLE1BQU0sQ0FBQyxNQUFNLFFBQVEsTUFBTSx5QkFBeUI7In0=

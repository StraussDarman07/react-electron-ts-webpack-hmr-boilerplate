const url = require("url");
const path = require("path");
import { app, BrowserWindow } from "electron";
let window: BrowserWindow | null;

const isDevelopment = process.env.ELECTRON_DEV == 'dev';

const createWindow = () => {
    window = new BrowserWindow(
        {
            width: 800,
            height: 1000,
            webPreferences: {
                nodeIntegration: true
            }
        });

    const resource = isDevelopment
        ? `http://localhost:3000`
        : url.format({
            pathname: path.join(__dirname, "index.html"),
            protocol: "file:",
            slashes: true
        });

    window.loadURL(
        resource
    );

    if (isDevelopment) {
        window.webContents.openDevTools();
    }


    window.on("closed", () => {
        window = null;
    });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (window === null) {
        createWindow();
    }
});

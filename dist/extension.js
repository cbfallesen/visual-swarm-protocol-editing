"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand("extension.openWebview", () => {
        const panel = vscode.window.createWebviewPanel("myWebview", "React App", vscode.ViewColumn.One, {
            enableScripts: true, // Enable JavaScript in the webview
        });
        // Serve the bundled React app in the webview
        const reactAppUri = vscode.Uri.file(vscode.Uri.joinPath(context.extensionUri, "dist", "bundle.js").fsPath);
        panel.webview.html = getReactAppHtml(reactAppUri, panel);
        // Read file and send data to React frontend
        const filePath = vscode.Uri.file("../test.txt");
        fs.readFile(filePath.fsPath, "utf8", (err, data) => {
            if (err) {
                vscode.window.showErrorMessage("Error reading file");
            }
            else {
                panel.webview.postMessage({ command: "fileData", data });
            }
        });
        // Handle messages from the webview (React frontend)
        panel.webview.onDidReceiveMessage((message) => {
            if (message.command === "log") {
                console.log(message.data);
            }
        });
    }));
}
function getReactAppHtml(scriptUri, panel) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React App</title>
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src ${panel.webview.cspSource}; style-src ${panel.webview.cspSource};">
    </head>
    <body>
        <div id="root"></div>
        <h1>Hello from extension!</h1>
        <script src="${scriptUri}"></script>
    </body>
    </html>
    `;
}
//# sourceMappingURL=extension.js.map
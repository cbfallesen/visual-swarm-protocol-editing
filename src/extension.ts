import * as vscode from "vscode";
import path from "path";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    // Create the command to open the webview
    vscode.commands.registerCommand("extension.openWebview", () => {
      // Get the active editor
      const activeEditor = vscode.window.activeTextEditor;

      // Check if there is an active editor
      if (!activeEditor) {
        vscode.window.showErrorMessage("No active editor found");
        return;
      }

      console.log(activeEditor.document.fileName);

      // Save text from active editor to a variable
      const text = activeEditor.document.getText();

      // Set the substring to search for
      const typeSubstring = "SwarmProtocolType";

      let jsonObject: string;

      // Check if the file contains a swarm protocol
      if (text.includes(typeSubstring)) {
        // Get index of the second occurence (first occurence is import)
        const index = text.indexOf(
          typeSubstring,
          text.indexOf(typeSubstring) + 1
        );

        if (index === -1) {
          vscode.window.showErrorMessage("Cannot find the swarm protocol");
          return;
        } else {
          // Get the JSON object from the file
          jsonObject = getNestedJSONObject(text, index);
          console.log(jsonObject);
        }
      } else {
        vscode.window.showErrorMessage("No swarm protocol found");
        return;
      }

      // Create the webview panel
      const panel = vscode.window.createWebviewPanel(
        "myWebview",
        "Actyx Swarm Protocol",
        vscode.ViewColumn.One,
        {
          enableScripts: true, // Enable JavaScript in the webview to allow for React
          localResourceRoots: [
            vscode.Uri.file(path.join(context.extensionPath, "dist")),
          ],
          retainContextWhenHidden: true, // Retain the webview content when it is hidden
        }
      );

      // Serve the bundled React app in the webview
      const reactAppUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "dist", "bundle.js")
      );

      // Get the html content for the webview
      panel.webview.html = getReactAppHtml(reactAppUri);

      panel.webview.postMessage({
        command: "fileData",
        data: jsonObject,
      });

      // Handle messages from the webview (React frontend)
      panel.webview.onDidReceiveMessage((message) => {
        if (message.command === "log") {
          console.log(message.data);
        }
      });
    })
  );
}

function getNestedJSONObject(text: string, index: number) {
  // With help from copilot
  // Get the index of the opening curly brace
  let openingCurlyBraceIndex = text.indexOf("{", index);
  let closingCurlyBraceIndex;

  let counter = 0;

  do {
    const openIndex = text.indexOf("{", index);
    const closingIndex = text.indexOf("}", index);

    if (openIndex < closingIndex) {
      index = openIndex + 1;
      counter++;
    } else {
      index = closingIndex + 1;
      closingCurlyBraceIndex = closingIndex;
      counter--;
    }
    console.log(counter);
  } while (counter !== 0);

  // while (counter != 0) {
  //   // Get index of the next opening curly brace
  //   let previousOpeningCurlyBraceIndex = openingCurlyBraceIndex;

  //   // Find next opening curly brace after the previous opening curly brace
  //   openingCurlyBraceIndex = text.indexOf("{", openingCurlyBraceIndex + 1);

  //   if (openingCurlyBraceIndex === -1) {
  //     // If there are no more opening curly braces, break
  //     break;
  //   }

  //   // Save previous closing curly brace index
  //   let previousClosingCurlyBraceIndex = closingCurlyBraceIndex;

  //   // Get the index of the closing curly brace
  //   closingCurlyBraceIndex = text.indexOf("}", closingCurlyBraceIndex + 1);

  //   if (openingCurlyBraceIndex < closingCurlyBraceIndex) {
  //     // If opening curlyBrace is before the closing curlyBrace, increment counter and save as next opening curlyBrace
  //     counter++;
  //     closingCurlyBraceIndex = previousClosingCurlyBraceIndex;
  //   } else {
  //     // If closing curlyBrace is before the opening curlyBrace, decrement counter and don't increment next opening curlyBrace
  //     counter--;
  //     openingCurlyBraceIndex = previousOpeningCurlyBraceIndex;
  //   }
  // }

  // Get the JSON object from the file
  const jsonObject = text.substring(
    openingCurlyBraceIndex,
    closingCurlyBraceIndex
  );

  return jsonObject;
}

function getReactAppHtml(scriptUri: vscode.Uri): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React App</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="${scriptUri}"></script>
    </body>
    </html>
    `;
}

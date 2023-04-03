// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('New Hello World from HelloWorld!');
	});

	let showTime = vscode.commands.registerCommand('helloworld.showTime', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		let date = new Date();
		vscode.window.showInformationMessage(date.toTimeString());
	});

	let showWarning = vscode.commands.registerCommand('helloworld.showWarning', () => {
		// The code you place here will be executed every time your command is executed
		// Display a warning box to the user
		let message = "Stop right there, criminal scum! Nobody breaks the law on my watch!";
		vscode.window.showWarningMessage(message);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

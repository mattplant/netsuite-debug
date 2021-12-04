import * as vscode from 'vscode';
import { TextEncoder } from 'util';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('netsuite-debug.debugCode', () => {
		vscode.window.showInformationMessage('The NetSuite Debug extension has been activated.');

		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			const code = document.getText(selection);
			const codeFileUri = vscode.Uri.parse(path.dirname(editor.document.fileName) + '/code.js');

			vscode.workspace.fs.writeFile(codeFileUri, new TextEncoder().encode(code)).then(function (x) {
				vscode.window.showTextDocument(codeFileUri, { preview: false });
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

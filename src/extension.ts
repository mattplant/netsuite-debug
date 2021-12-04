import * as vscode from 'vscode';
import { TextEncoder } from 'util';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('netsuite-debug.createFile', () => {
		vscode.window.showInformationMessage('The NetSuite Debug extension has been activated.');

		const editor = vscode.window.activeTextEditor;
		if (editor) {
			// BUILD THE DEBUG FILE
			// grab selected code
			const document = editor.document;
			const selection = editor.selection;
			const codeContent: string = document.getText(selection);
			// get header file content
			const headerUri: vscode.Uri = vscode.Uri.joinPath(context.extensionUri, 'templates', 'header_2_0.txt');
			vscode.workspace.openTextDocument(headerUri).then((headerDoc: vscode.TextDocument) => {
				const headerContent: string = headerDoc.getText();
				// get footer file content
				const footerUri: vscode.Uri = vscode.Uri.joinPath(context.extensionUri, 'templates', 'footer.txt');
				vscode.workspace.openTextDocument(footerUri).then((footerDoc: vscode.TextDocument) => {
					const footerContent: string = footerDoc.getText();
					// save debug file
					const debugFileName = 'NETSUITE_DEBUG.js';
					const debugFileUri: vscode.Uri = vscode.Uri.parse(path.dirname(editor.document.fileName) + '/' + debugFileName);
					const debugFileContent = headerContent + codeContent + footerContent;
					vscode.workspace.fs.writeFile(debugFileUri, new TextEncoder().encode(debugFileContent)).then(function (x) {
						vscode.window.showTextDocument(debugFileUri, { preview: false });
					});
				});
			}, (error: any) => {
					console.error(error);
					debugger;
			});
		} else {
			vscode.window.showErrorMessage('Please select the code that you want to debug first.');
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

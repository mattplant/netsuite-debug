# NetSuite Debug

This VS Code extension allows you to quickly deploy a selection of code for debugging it while it is running on NetSuite servers.

## Requirements

While not explicitly required, the assumption is that you are using.
- **SuiteCloud SDK** installed and working with your NetSuite Instance - https://github.com/oracle/netsuite-suitecloud-sdk
- **SuiteCloud Extension for Visual Studio Code** - https://marketplace.visualstudio.com/items?itemName=Oracle.suitecloud-vscode-extension

If you have questions on setting up these tools I suggest you take a look at another project of mine called "**NetSuite TypeScript SDF Project Template**" at https://github.com/mattplant/netsuite-typescript-sdf.
## Usage

In VS Code, select the section of code that you want to debug and then have this extension create the Client Script file via Command Pallete, "NetSuite Debug: Create File".

Then upload the file to NetSuite.  Since the generated file already has the focus, just press Shift+Alt+U to trigger "SuiteCloud: Upload File" to execute.

Now in your browser with remote debugging enabled and with the inspector running visit the deployed object in NetSuite that has the above client script file deployed.  Code execection will stop just above your deployed code on the "debugger" line.
- Google Chrome - `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222`
- or Google Chrome Beta - `/Applications/Google\ Chrome\ Beta.app/Contents/MacOS/Google\ Chrome\ Beta --remote-debugging-port=9222`

## Extension Settings

Currently none.

## Known Issues

I currently have this working for debugging with a browser.  I plan to enable debugging thru VS Code.

The code needs to be executed as a Client Script.  Therefore, you are not able to debug the complete code for specialized scripts (e.g. Portlets, Suitelets, Map/Reduce etc.).  All of the code from Scheduled Scripts can be executed, tho if you have any script parameters, you will need to set the variables for them correctly.  For Map/Reduce, you will only be able to debug one stage and will need to supplly appropriate values for input into that stage.

## Release Notes
### 0.1.0

Proof of concept.

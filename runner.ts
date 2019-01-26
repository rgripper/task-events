import * as x from './compile';
import * as fs from 'fs';
import * as ts from 'typescript';
import { readJsonConfigFile, parseJsonSourceFileConfigFileContent, getParsedCommandLineOfConfigFile }  from 'typescript';

//const tsConfig = parseJsonSourceFileConfigFileContent(tsConfigFile, , __dirname);

const parseConfigHost: ts.ParseConfigFileHost = {
  fileExists: ts.sys.fileExists,
  readFile: ts.sys.readFile,
  readDirectory: ts.sys.readDirectory,
  getCurrentDirectory: () => __dirname, 
  onUnRecoverableConfigFileDiagnostic: () => {},
  useCaseSensitiveFileNames: true
};

const tsConfig = getParsedCommandLineOfConfigFile('./tsconfig.json', {}, parseConfigHost)!;
x.compile("./src/**/*", { projectBaseDir: "." }, tsConfig.options);
console.log("finished");
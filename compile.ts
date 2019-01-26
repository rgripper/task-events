import * as ts from "typescript";
import { sync as globSync } from "glob";
import {
  transformDts as dtsPathTransform,
  Opts as PathTransformOpts
} from "ts-transform-import-path-rewrite";
import { resolveModuleName } from "typescript";

const CJS_CONFIG: ts.CompilerOptions = {
  experimentalDecorators: true,
  jsx: ts.JsxEmit.React,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  noEmitOnError: false,
  noUnusedLocals: true,
  noUnusedParameters: true,
  stripInternal: true,
  declaration: true,
  baseUrl: __dirname,
  target: ts.ScriptTarget.ES2015
};

export function compile(
  input: string,
  transformOpts: PathTransformOpts,
  options: ts.CompilerOptions
) {
  const files = globSync(input);
  const compilerHost = ts.createCompilerHost(options);
  const result = resolveModuleName("root/store/models", "C:/temp/task-events/src/store/store.ts", options, compilerHost);
  console.log(result);
  //const output = compilerHost!.resolveModuleNames!(["root/store/models"], "C:/temp/task-events/src/store/store.ts");

  // const program = ts.createProgram(files, options, compilerHost);

  // const msgs = {};

  // let emitResult = program.emit(undefined, undefined, undefined, undefined, {
  //   after: [dtsPathTransform(transformOpts) as ts.TransformerFactory<ts.SourceFile>],
  //   afterDeclarations: [dtsPathTransform(transformOpts) as any]
  // });

  // let allDiagnostics = ts
  //   .getPreEmitDiagnostics(program)
  //   .concat(emitResult.diagnostics);

  // allDiagnostics.filter(x => x.file !== undefined).forEach(diagnostic => {
  //   let { line, character } = diagnostic.file!.getLineAndCharacterOfPosition(
  //     diagnostic.start!
  //   );
  //   let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
  //   console.log(
  //     `${diagnostic.file!.fileName} (${line + 1},${character + 1}): ${message}`
  //   );
  // });

  // return msgs;
}
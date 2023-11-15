const esbuild = require('esbuild');

Promise.all([
  esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outfile: './dist/bundle.js',
    format: 'iife',
    globalName: 'GptErrors',
    logLevel: 'info',
  }),
]).catch(() => process.exit(1));

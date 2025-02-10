import { transformSync } from '@babel/core';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

export async function load(url, context, defaultLoad) {
  if (url.endsWith('.jsx')) {
    const filePath = fileURLToPath(url);
    const code = readFileSync(filePath, 'utf-8');
    const transformed = transformSync(code, {
      filename: filePath,
      presets: ['@babel/preset-react'],
      babelrc: false
    });
    return {
      format: 'module',
      source: transformed.code,
      shortCircuit: true
    };
  }
  return defaultLoad(url, context, defaultLoad);
}
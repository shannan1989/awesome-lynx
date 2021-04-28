import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import babel from "rollup-plugin-babel";
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import packageconfig from './package.json';

export default [{
    input: 'src/index.js',
    output: [{
        name: 'lynx',
        file: 'dist/lynx.js',
        format: 'umd'
    },
    {
        name: 'lynx',
        file: 'dist/lynx-' + packageconfig.version + '.js',
        format: 'umd'
    },
    {
        name: 'lynx',
        file: 'dist/lynx.common.js',
        format: 'cjs'
    }
    ],
    plugins: [
        resolve({
            browser: true
        }),
        commonjs(),
        eslint(),
        babel(),
        terser()
    ]
}];

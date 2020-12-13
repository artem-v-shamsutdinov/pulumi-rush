import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import builtins from 'builtin-modules'

export default {
    input: 'lib/index.js',
    output: {
        file: '../pulumi-deploy/index.js',
        format: 'cjs'
    },
    plugins: [
        excludeDependenciesFromBundle({
            dependencies: true,
            peerDependencies: false
        }),
        nodeResolve(),
        commonjs(),
        json()
    ],
    external: builtins
};

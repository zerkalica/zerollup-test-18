// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import ttypescript from 'ttypescript'

export default {
    input: './src/index.ts',

    plugins: [
                resolve({
                    extensions: ['.mjs', '.js', '.json'],
                    jsnext: true,
                    browser: true,
                    preferBuiltins: false
                }),
                commonjs(),
	typescript({
typescript: ttypescript
})
    ],
                output: [
                    {
                        sourcemap: true,
                        format: 'es',
                        dir: 'lib'
                    },
                    {
                        sourcemap: true,
                        format: 'cjs',
                        dir: 'lib'
                    }
                ]
}

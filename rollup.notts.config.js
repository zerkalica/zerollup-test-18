// rollup.config.js
import rpt2 from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import pathPlug from '@zerollup/ts-transform-paths'
import typescript from 'typescript'


const transformer = (service) => {
 return {
    before: [ pathPlug(service.getProgram()).before ],
    afterDeclaration: [ pathPlug(service.getProgram()).afterDeclaration ]
 };
}
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
	rpt2({
transformers: [transformer]
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

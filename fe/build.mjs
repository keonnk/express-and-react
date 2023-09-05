import * as esbuild from 'esbuild'
import process from 'node:process'

if(process.argv[2] == '-w' || process.argv[2] == '--watch') {
    let ctx = await esbuild.context({
        entryPoints: ['./src/app.tsx'],
        bundle: true,
        loader: {
            '.tsx': 'tsx',
            '.ts': 'ts',
        },
        outfile: './public/dist/out.js'
    })

    console.log('esbuild watching for changes...')
    await ctx.watch()
}
else {
    await esbuild.build({
        entryPoints: ['./src/app.tsx'],
        bundle: true,
        loader: {
            '.tsx': 'tsx',
            '.ts': 'ts',
        },
        outfile: './public/dist/out.js'
    })
}
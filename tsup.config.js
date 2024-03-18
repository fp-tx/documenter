import { makeConfig } from '@fp-tx/build-tools'

export default makeConfig(
  {
    buildType: 'dual',
    buildMode: {
      type: 'Multi',
      entrypointGlobs: [
        'src/Api.ts',
        'src/APITraversal.ts',
        'src/Documenter.ts',
        'src/FileService.ts',
        'src/Markdown.ts',
        'src/MarkdownFiles.ts',
        'src/Prettier.ts',
        'src/bin.ts',
        'src/index.ts',
      ],
    },
  },
  {
    clean: true,
    target: 'node18',
    splitting: true,
    external: ['prettier'],
  },
)

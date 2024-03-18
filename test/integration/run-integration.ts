import * as E from '@fp-tx/core/Either'
import path from 'path'

import { Documenter } from '../../src'
import { FileServiceLive } from '../../src/FileService'

const main = Documenter.extractApiPackage(
  path.join(__dirname, 'sample-report.api.json'),
  path.join(__dirname, 'output'),
)

main({
  ...FileServiceLive,
  prettierOptions: {
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 120,
  },
})()
  .then(
    E.match(
      err => console.error(err),
      () => console.log('Finished writing documentation'),
    ),
  )
  .catch(e => console.error('unhandled error', e))

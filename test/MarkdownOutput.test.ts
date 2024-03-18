import type * as E from '@fp-tx/core/Either'
import * as TE from '@fp-tx/core/TaskEither'

import * as FileService from '../src/FileService'
import * as Md from '../src/Markdown'
import * as MdO from '../src/MarkdownFiles'

function assertRight<E, A>(te: E.Either<E, A>): asserts te is E.Right<A> {
  if (te._tag === 'Left') {
    throw new Error('Assertion error: expected Right, got Left')
  }
}

describe('MarkdownOutput', () => {
  test('markdown output traversal', async () => {
    const testFS: Record<string, string> = {}
    const constructedDirs: Set<string> = new Set()

    const mockFileSystem = new FileService.FileService({
      writeFile: (path, content) => {
        testFS[path.toString()] = content
        return TE.right(void 0)
      },
      mkdir: path => {
        constructedDirs.add(String(path))
        return TE.right(void 0)
      },
    })
    const testMarkdown = MdO.folder('root', [
      MdO.folder('subfolder', [
        MdO.file('./file1', Md.text('content1')),
        MdO.file('file2.md', Md.text('content2')),
        MdO.folder('./subsubfolder', [MdO.file('file4', Md.text('content4'))]),
      ]),
      MdO.file('./file3.md', Md.text('content3')),
    ])
    assertRight(
      await MdO.saveMarkdownOutput(Md.renderToString('\n'))('./docs/output')(testMarkdown)(
        mockFileSystem,
      )(),
    )
    expect(testFS).toStrictEqual({
      'docs/output/root/subfolder/file1.md': 'content1',
      'docs/output/root/subfolder/file2.md': 'content2',
      'docs/output/root/file3.md': 'content3',
      'docs/output/root/subfolder/subsubfolder/file4.md': 'content4',
    })
    expect(constructedDirs).toStrictEqual(
      new Set([
        'docs/output/root',
        'docs/output/root/subfolder/subsubfolder',
        'docs/output/root/subfolder',
      ]),
    )
  })
})

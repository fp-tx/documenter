import * as O from '@fp-tx/core/Option'

import * as Module from '../src/Module'

describe('Module', () => {
  it("doesn't exclaim none", () => {
    const testValue = O.none
    expect(Module.exclaimOptional(testValue)).toEqual(O.none)
  })
  it('exclaims some', () => {
    const testValue = O.some('hello')
    expect(Module.exclaimOptional(testValue)).toEqual(O.some('hello!'))
  })
})

const assert = require('assert')

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../config/webpack.base.js')

  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('kebk-webpack-app/test/smoke/template/src/index/index.js') > -1, true)
    assert.equal(baseConfig.entry.search.indexOf('kebk-webpack-app/test/smoke/template/src/search/index.js') > -1, true)
  })
})

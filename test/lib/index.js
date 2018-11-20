const { expect } = require("chai")
const loader = require("../../lib/index")

const mockRuleDir = `${__dirname}/../../mock-rules`

/* eslint-disable import/no-dynamic-require */
const firstRule = require(`${mockRuleDir}/first-rule`)
const secondRule = require(`${mockRuleDir}/second-rule`)
/* eslint-enable import/no-dynamic-require */

describe("index", () => {
  it("throws if RULES_DIR is not defined", () => {
    expect(() => loader.rules).to.throw("set the `RULES_DIR` property")
  })

  it("is able to load rules", () => {
    loader.RULES_DIR = mockRuleDir
    // eslint-
    expect(loader.rules["first-rule"]).to.deep.equal(firstRule)
    expect(loader.rules["second-rule"]).to.deep.equal(secondRule)
  })

  it("ignores anything starting with an underscore", () => {
    loader.RULES_DIR = mockRuleDir
    // eslint-disable-next-line no-unused-expressions
    expect(loader.rules["_first-rule"]).to.be.undefined
  })
})

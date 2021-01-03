import delay from "delay"
import path from "path"

const indexModule = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))

/**
   * @type { import("../src") }
   */
const {default: Stoppuhr} = indexModule

it("should run", async () => {
  const stoppuhr = new Stoppuhr
  await delay(3000)
  expect(stoppuhr.total()).toBeGreaterThanOrEqual(3000)
  expect(stoppuhr.total()).toBeLessThan(4000)
})
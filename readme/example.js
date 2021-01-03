import Stoppuhr from "stoppuhr"

const stoppuhr = new StoppUhr

function resolve() {
  const result = stoppuhr.total()
  const result2 = stoppuhr.totalText()
}

setTimeout(resolve, 70000)
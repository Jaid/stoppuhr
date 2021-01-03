import Stoppuhr from "stoppuhr"

const counter = new Stoppuhr

counter.get("bananas") // null
counter.feed("bananas")
counter.get("bananas") // 1
/** @module stoppuhr */

import readableMs from "readable-ms"

/**
 * @example
 * import Stoppuhr from "stoppuhr"
 * const stoppuhr = new Stoppuhr
 * someHeavyWork()
 * const passedMs = stoppuhr.total()
 */
export default class {

  /**
   * @constructor
   */
  constructor() {
    this.reset()
  }

  /**
   * @return {void}
   */
  reset() {
    const now = Date.now()
    this.startTime = now
    this.lapStartTime = now
  }

  /**
   * @return {number}
   */
  lap() {
    const now = Date.now()
    const passedMs = now - this.lapStartTime
    this.lapStartTime = now
    return passedMs
  }

  /**
   * @return {string}
   */
  lapText() {
    const passedMs = this.lap()
    const passedMsText = readableMs(passedMs)
    return passedMsText
  }

  /**
   * @return {number}
   */
  total() {
    const now = Date.now()
    const passedMs = now - this.startTime
    return passedMs
  }

  /**
   * @return {string}
   */
  totalText() {
    const passedMs = this.total()
    const passedMsText = readableMs(passedMs)
    return passedMsText
  }

}
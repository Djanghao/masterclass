# Scala FP: simple tailrec

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/4727039/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/4727039/)

---

# Code
```
/** 
 * The API guess is defined in the parent class.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			          1 if num is lower than the picked number
 *               otherwise return 0
 * def guess(num: Int): Int = {}
 */

class Solution extends GuessGame {
  def guessNumber(n: Int): Int = {
    @annotation.tailrec
    def bsNumber(first: Int, end: Int): Int = {
      val half = first + (end - first) / 2
      guess(half) match {
        case -1 => bsNumber(first, half)
        case 1 => bsNumber(half + 1, end)
        case 0 => half
      }
    }

    bsNumber(1, n + 1)
  }
}
```
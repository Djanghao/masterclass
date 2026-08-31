# Scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game/solutions/4342959/](https://leetcode.com/problems/flip-game/solutions/4342959/)

---

both the time and space complexity of the code are O(n)

# Code
```
object Solution {
  def generatePossibleNextMoves(s: String): List[String] = {
    var res: List[String] = List()

    // Iterate through the string up to the second-to-last character
    for (i <- 0 until s.length - 1) {
      // Check if the current and next characters are '++'
      if (s.charAt(i) == '+' && s.charAt(i + 1) == '+') {
        // If '++' is found, replace it with '--' and add to the result list
        val nextMove = s.substring(0, i) + "--" + s.substring(i + 2)
        res = res :+ nextMove
      }
    }

    res
  }
}
```
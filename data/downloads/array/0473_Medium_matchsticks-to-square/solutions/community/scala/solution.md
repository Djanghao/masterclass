# SCALA CODE WITH COMMENTS

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/4269253/](https://leetcode.com/problems/matchsticks-to-square/solutions/4269253/)

---

# Code
```
// This object defines a solution for a game where the player can make a square with given matchsticks
object Solution {
  // This function checks if the player can make a square with the given matchsticks
  def makesquare(matchsticks: Array[Int]): Boolean = {
    // This is a helper function that uses a recursive approach to determine if a square can be made
    def helper(remaining: Array[Int], target: Int): Boolean =
      // If there are no remaining matchsticks, return true
      remaining.isEmpty || 
      // Otherwise, try to find a combination of matchsticks that sum up to the target
      (1 to remaining.length).exists(remaining.combinations(_).exists(c => c.sum == target && helper(remaining.diff(c), target)))

    // If the number of matchsticks is less than 4 or the sum of matchsticks is not divisible by 4, return false
    // Otherwise, call the helper function with initial values
    matchsticks.length >= 4 && matchsticks.sum % 4 == 0 && helper(matchsticks, matchsticks.sum / 4)
  }
}

```
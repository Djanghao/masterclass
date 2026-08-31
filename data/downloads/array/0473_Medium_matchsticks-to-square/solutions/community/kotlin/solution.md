# Kotlin: Backtracking with comments

**Author:** mahrezz
**Votes:** 1
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/2271936/](https://leetcode.com/problems/matchsticks-to-square/solutions/2271936/)

---

```
class Solution {
    fun makesquare(matchsticks: IntArray): Boolean {
        if (matchsticks.size < 4) return false

        val matchsticksSum =  matchsticks.sum() 
        val maxStickLength = matchsticksSum / 4
        
        if (matchsticksSum % 4 != 0) return false // is not possible to make square

        matchsticks.sortDescending() // let's sort the Matchsticks desc,to prevent further explorations if the first stick is greater than the maxStickLength
        //e.g. [1,2,1,4,3,3] => after sorting [3,2,2,1] 8/2 = 2 (max stick length) but when we check arr[0] = 3  3 > 2 no need to continue

        val sides = IntArray(4){0} // It is empty at first

        fun backtrack(index: Int): Boolean {
            if (index == matchsticks.size) {
                return sides[0] == maxStickLength && sides[1] == maxStickLength && sides[2] == maxStickLength // means we can make a square here
            }
            for (i in 0..3) { // traverse each side
                if (sides[i] + matchsticks[index] > maxStickLength) continue // if the side length is greater than the target, just skip it.
                sides[i] += matchsticks[index] // add the stick to the current side

                if (backtrack(index + 1)) return true
                sides[i] -= matchsticks[index] // do backtrack by extracting the latest stick from the current side
            }
            return false
        }

        return backtrack(0)
    }
}
```
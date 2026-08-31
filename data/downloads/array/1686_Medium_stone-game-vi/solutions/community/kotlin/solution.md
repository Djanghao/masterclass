# :: Kotlin :: Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/3578474/](https://leetcode.com/problems/stone-game-vi/solutions/3578474/)

---

# Code
```
class Solution {
    fun stoneGameVI(aliceValues: IntArray, bobValues: IntArray): Int {
        val n = aliceValues.size
        val diff = mutableListOf<Pair<Int, Int>>()

        for (i in 0 until n) {
            diff.add(Pair(aliceValues[i] + bobValues[i], i))
        }

        diff.sortWith(compareBy({ -it.first }))

        var result = 0

        for(i in 0 until n) {
            if (i % 2 == 0) {
                result += aliceValues[diff[i].second]
            } else {
                result -= bobValues[diff[i].second]
            }
        }

        return if(result > 0) 1 else if(result < 0) -1 else 0
    }
}
```
# :: Kotlin :: Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/3600242/](https://leetcode.com/problems/stone-game-ix/solutions/3600242/)

---

# Code
```
class Solution {
    fun stoneGameIX(stones: IntArray): Boolean {
        var m = IntArray(3){ 0 }
        stones.forEach{ m[it % 3]++ }

        return if(m[0] % 2 == 0) m[1] > 0 && m[2] > 0 else Math.abs(m[1] - m[2]) > 2
    }
}
```
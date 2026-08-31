# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/4527617/](https://leetcode.com/problems/dungeon-game/solutions/4527617/)

---

# Code
```
class Solution {
    fun calculateMinimumHP(dungeon: Array<IntArray>): Int =
        dungeon.first().foldRightIndexed(IntArray(dungeon.size + 1) { Int.MAX_VALUE }.also { it[it.lastIndex - 1] = 1 }) { i, _, r ->
            dungeon.foldRightIndexed(r) { j, _, dp -> dp[j] = max(1, min(dp[j + 1], dp[j]) - dungeon[j][i]); dp } }.first()
}
```
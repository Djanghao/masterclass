# Kotlin solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4338615/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4338615/)

---

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code

```
class Solution {
    fun numberOfWays(corridor: String): Int {
        val seats = corridor.count { it.isSeat() }
        if (seats == 0 || seats % 2 != 0) return 0

        var result = 1L
        var i = 0

        while (i < corridor.length) {
            i = nextSeat(corridor, nextSeat(corridor, i) + 1) + 1
            val prefix = i
            i = nextSeat(corridor, i)

            val inner = if (i == corridor.length) 1 else i - prefix + 1
            result = (result * inner) % 1_000_000_007
        }
        
        return result.toInt()
    }

    private fun nextSeat(corridor: String, from: Int): Int {
        var i = from
        while (i < corridor.length && !corridor[i].isSeat()) {
            i++
        }
        return i
    }

    private fun Char.isSeat(): Boolean = this == 'S'
}
```
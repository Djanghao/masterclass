# Simple Kotlin solution

**Author:** sonyjtp
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4414914/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4414914/)

---

# Intuition
Add the number of losses to a MutableMap; return the list of participants with 0 and 1 losses.

# Approach
- Add the count of number of losses to a MutableMap - add 0 for winner of each match, 1 for loser
- Filter the map and return the sorted list of participants with 0 and 1 losses.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun findWinners(matches: Array<IntArray>): List<List<Int>> {
        val lossCountMap = mutableMapOf<Int, Int>()
        for(match in matches) {
            lossCountMap[match[0]] = lossCountMap.getOrDefault(match[0], 0)
            lossCountMap[match[1]] = lossCountMap.getOrDefault(match[1], 0) + 1
        }
        return listOf(
            lossCountMap.filter { (_, value) -> value == 0 }.map { it.key }.sorted(),
            lossCountMap.filter { (_, value) -> value == 1 }.map { it.key }.sorted()
        )
    }
}
```
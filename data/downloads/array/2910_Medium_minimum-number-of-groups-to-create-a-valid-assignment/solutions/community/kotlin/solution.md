# Top 1% Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4256756/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4256756/)

---


```
class Solution {
    fun minGroupsForValidAssignment(nums: IntArray): Int {
        val map: MutableMap<Int, Int> = HashMap()
        for (n in nums) {
            map[n] = map.getOrDefault(n, 0) + 1
        }

        var min = nums.size
        for (v in map.values) {
            min = min.coerceAtMost(v)
        }

        for (size in min downTo 1) {
            val numGroups = groupify(map, size)
            if (numGroups > 0) return numGroups
        }

        return nums.size
    }

    private fun groupify(map: Map<Int, Int>, size: Int): Int {
        var groups = 0
        var next = size + 1

        for (value in map.values) {
            val numGroups = value / next
            val remaining = value % next

            if (remaining == 0) {
                groups += numGroups
            } else if (numGroups >= size - remaining) {
                groups += numGroups + 1
            } else {
                return 0
            }
        }
        return groups
    }
}

```
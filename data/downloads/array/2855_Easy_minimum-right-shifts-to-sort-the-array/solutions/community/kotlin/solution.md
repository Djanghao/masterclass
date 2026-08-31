# Kotlin Queue

**Author:** Atrilos
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4052217/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4052217/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minimumRightShifts(nums: List<Int>): Int {
        val deque = java.util.ArrayDeque<Int>().apply { addAll(nums) }
        val n = nums.size
        var res = 0
        start@ while (res < n) {
            val list = deque.toList()
            for (i in 1 until deque.size) {
                if (list[i] < list[i - 1]) {
                    res++
                    deque.addFirst(deque.removeLast())
                    continue@start
                }
            }
            return res
        }
        return -1
    }
}
```
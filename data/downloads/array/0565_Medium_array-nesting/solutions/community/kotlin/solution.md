# [kotlin] Using TreeMap traversal

**Author:** kevinleigh
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-nesting/solutions/1273875/](https://leetcode.com/problems/array-nesting/solutions/1273875/)

---

```
class Solution {
    fun arrayNesting(nums: IntArray): Int {
        val tree = TreeMap<Int, Int>()
        for (i in 0..nums.lastIndex) {
            tree[i] = nums[i]
        }
        
        var max = 0
        while (tree.size> 0) {
            var current = tree.firstKey()
            var count = 0
            while (current != null) {
                val next = nums[current]
                if (tree[next] != null) {
                    count += 1
                    current = next
                    tree.remove(next)
                } else {
                    current = null
                }
            }
            max = Math.max(max, count)
        }

        return max
    }
}
```
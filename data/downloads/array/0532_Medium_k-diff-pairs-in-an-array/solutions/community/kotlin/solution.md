# [Kotlin] Using two sets: O(n) time and space

**Author:** zlandorff
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1759273/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1759273/)

---

```
class Solution {
    fun findPairs(nums: IntArray, k: Int): Int {
        if (k < 0) return 0
        
        var kDiffPairs = mutableSetOf<Pair<Int, Int>>()
        val visited = mutableSetOf<Int>()
        
        for (num in nums) {
            if (visited.contains(num - k)) {
                // smallest first
                kDiffPairs.add(Pair(num - k, num))
            }
            if (visited.contains(num + k)) {
                // smallest first
                kDiffPairs.add(Pair(num, num + k))
            }
            visited += num
        }
        
        return kDiffPairs.size
    }
}
```
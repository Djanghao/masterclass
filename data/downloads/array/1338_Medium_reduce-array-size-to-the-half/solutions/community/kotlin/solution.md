# Kotlin simple solution

**Author:** shbazhenov
**Votes:** 2
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2441963/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2441963/)

---

**Please upvote, if you like**
```
class Solution {
    fun minSetSize(arr: IntArray): Int {
        val N = arr.size
        val half = if (N % 2 == 0) N/2 else N/2+1
        
        var occurs = mutableMapOf<Int, Int>()
        arr.forEach {
            occurs[it] = (occurs[it] ?: 0) + 1
        }
        
        val nums = occurs.keys.sortedBy { occurs[it] } // sorted by frequency
        val set = mutableSetOf<Int>()
        var removed = 0
        for (i in nums.lastIndex downTo 0) {
            set.add(nums[i])
            removed += occurs[nums[i]]!!
            if (removed >= half) break
        }
        
        return set.size
    }
}
```
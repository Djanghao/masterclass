# [Kotlin] TreeSet, beats 100%

**Author:** pierluigifimiano
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/5203240/](https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/5203240/)

---

```
class Solution {
    fun maxBalancedSubsequenceSum(nums: IntArray): Long {
        val n = nums.size
        
        val tree = TreeSet<Pair<Int, Long>> { a, b -> 
            when (val c = a.first.compareTo(b.first)) {
                0 -> a.second.compareTo(b.second)
                else -> c
            }
        }
        tree.add(nums[n - 1] - (n - 1) to nums[n - 1].toLong())
        
        for (i in n - 2 downTo 0) {
            val min = nums[i] - i
            
            var max = nums[i].toLong()
            for ((_, dp) in tree.tailSet(min to Long.MIN_VALUE)) {
                max = maxOf(max, nums[i] + dp)
            }
            
            val it = tree.headSet(min to Long.MAX_VALUE).iterator()
            while (it.hasNext()) {
                if (it.next().second <= max) {
                    it.remove()
                }
            }
            
            tree.add(min to max)
        }
        
        var max = Long.MIN_VALUE
        for ((_, dp) in tree) {
            max = maxOf(max, dp)
        }
        
        return max
    }
    
}
```
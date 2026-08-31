# Kotlin LIS Solution

**Author:** JJNC
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/2259815/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/2259815/)

---

```
class Solution {
    fun minOperations(target: IntArray, arr: IntArray): Int {
        // The position of each number in target
        val positions = mutableMapOf<Int, Int>()
        target.forEachIndexed { idx, num ->
            positions[num] = idx
        }
        
        // Use the target number positin to create a sequence for arr
        val sequence = mutableListOf<Int>()
        arr.forEach { num ->
            positions.get(num)?.also {
                sequence.add(it)
            }
        }
        
        // Find the longest increasing subsequence
        var len = 0
        sequence.forEach { num ->
            var lo = 0
            var hi = len
            
            while (lo < hi) {
                val mid = lo + (hi-lo)/2
                if (sequence[mid] >= num) hi = mid
                else lo = mid+1
            }
            sequence[lo] = num
            
            if (lo == len) len++
        }
        
        return target.size - len
    }
}
```
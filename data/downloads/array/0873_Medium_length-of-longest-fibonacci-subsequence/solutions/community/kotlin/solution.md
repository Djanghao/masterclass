# Kotlin using HashSet

**Author:** zohidjonakbarov
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/2891595/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/2891595/)

---

# Approach
All item are positive so adding two items makes greater number and also the array is sorted so the order will no change.

# Complexity
- Time complexity:O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun lenLongestFibSubseq(arr: IntArray): Int {
    var length = 0
    val set = arr.toHashSet()
    for (i in 0 until arr.size - 2) {
        for (j in i + 1 until arr.size - 1) {
            val temp = helper(arr[i], arr[j], set)
            if (temp > length) length = temp
        }
    }
    return if (length < 3) 0 else length
}

private fun helper(first: Int, second: Int, set: Set<Int>): Int {
    var f = first
    var s = second
    var count = 2
    while ((f + s) in set) {
        val t = f
        f = s
        s += t
        count++
    }
    return count
}
}
```
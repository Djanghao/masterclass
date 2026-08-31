# Kotlin: O(1) memory

**Author:** artemasoyan
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/3176195/](https://leetcode.com/problems/find-k-closest-elements/solutions/3176195/)

---

# Code
```
class Solution {
    fun findClosestElements(arr: IntArray, k: Int, x: Int): List<Int> {
        var (l, r) = 0 to arr.size - k
        
        while (l < r) {
            val m = (l + r) / 2
            if (x - arr[m] > arr[m + k] - x) l = m + 1
            else r = m
        }

        return arr.slice(l until l + k)
    }
}
```
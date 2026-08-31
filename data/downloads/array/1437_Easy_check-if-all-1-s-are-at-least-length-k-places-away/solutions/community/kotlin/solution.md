# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/3045233/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/3045233/)

---

```
class Solution {
    fun kLengthApart(nums: IntArray, k: Int): Boolean {
        val n = nums.size
        var prev = 0
        for (i in 0..n-1) {
            if (nums[i] == 1) {
                if (prev != 0 && i < prev + k) return false
                prev = i + 1
            }
        }
        return true
    }
}
```
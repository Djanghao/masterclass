# Kotlin O(n) no extra space used

**Author:** c4tdog
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/2812612/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/2812612/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution {
    fun checkDistances(s: String, a: IntArray): Boolean {
        for (i in 0..s.length - 1) {
            var p = s[i].toInt() - 97
            if (a[p] >= 1000) {
                var prevPos = (a[p] / 1000) - 1
                var prevValue = a[p] - ((prevPos + 1) * 1000)
                if (i - prevPos - 1 != prevValue) return false
            } else {
                a[p] += (i + 1) * 1000 // remember position
            }
        }

        return true
    }
}
```
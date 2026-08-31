# O(n) Sliding Windows

**Author:** mezzermite
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/4285361/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/4285361/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun maximumSum(arr: IntArray): Int {
        var max = arr[0]
        var current = arr[0]
        var currentWithSkip = arr[0]

        for (i in 1 until arr.size) {
            val next = arr[i]

            if (currentWithSkip < 0) currentWithSkip = 0

            if (next >= 0) {
                currentWithSkip += next
            } else {
                currentWithSkip = maxOf(currentWithSkip + next, current)
            }

            if (current < 0) current = 0

            current += next

            max = maxOf(max,  current, currentWithSkip)
        }

        return max
    }
}
```
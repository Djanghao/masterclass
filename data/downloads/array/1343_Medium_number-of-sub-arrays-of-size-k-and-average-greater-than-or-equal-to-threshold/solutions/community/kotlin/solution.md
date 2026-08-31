# Kotlin O(n) O(1)

**Author:** arohimsama
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5218916/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5218916/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun numOfSubarrays(arr: IntArray, k: Int, threshold: Int): Int {
        if(arr.size < k)
            return 0

        var count = 0
        var l = 0
        var r = k - 1
        var sumSoFar = arr.slice(l until r).sum()

        while(r < arr.size) {
            sumSoFar += arr[r]

            // calculate avg
            var avg = sumSoFar / k

            // check if >= threshold then count++
            if(avg >= threshold) {
                count++
            }
            sumSoFar -= arr[l]
            l++
            r++
        }
        return count
    }
}
```
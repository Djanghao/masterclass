# Simple two for loops

**Author:** user7112sQ
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5295514/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5295514/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(K x N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun valueAfterKSeconds(n: Int, k: Int): Int {
       val MOD = 1_000_000_007

    var array = IntArray(n) { 1 }

    // Apply the transformation k times
    for (second in 1..k) {
        for (i in 1 until n) {
            array[i] = (array[i] + array[i - 1]) % MOD
        }
    }

    // Return the last element modulo 10^9 + 7
    return array[n - 1]
    
    }
}
```
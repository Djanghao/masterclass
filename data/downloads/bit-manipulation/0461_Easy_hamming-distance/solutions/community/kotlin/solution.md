# [Kotlin] Literally One Line Solution

**Author:** devle79
**Votes:** 3
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/3413443/](https://leetcode.com/problems/hamming-distance/solutions/3413443/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Simple, Isn't it?

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    
    fun hammingDistance(x: Int, y: Int) = Integer.bitCount(x xor y)
}
```
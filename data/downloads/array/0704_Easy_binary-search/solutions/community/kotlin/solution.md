# one line hack Kotlin solution

**Author:** art-ylem
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-search/solutions/3069742/](https://leetcode.com/problems/binary-search/solutions/3069742/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun search(nums: IntArray, target: Int): Int {
        return Math.max(-1,nums.binarySearch(target))
    }
}
```
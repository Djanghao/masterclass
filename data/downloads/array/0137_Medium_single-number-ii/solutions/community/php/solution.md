# PHP single line solution with 15ms runtime

**Author:** DekaBla
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/3769508/](https://leetcode.com/problems/single-number-ii/solutions/3769508/)

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

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNumber($nums) {
        return array_search(1, array_count_values($nums));
    }
}
```
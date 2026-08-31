# Ruby simple 1-line solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/5625573/](https://leetcode.com/problems/total-hamming-distance/solutions/5625573/)

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
# @param {Integer[]} nums
# @return {Integer}
def total_hamming_distance(nums, sz = nums.size) = 32.times.sum { |i| (c = nums.sum { 1 & _1 >> i }) * (sz - c) }
```
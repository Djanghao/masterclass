# Simple 1 LOC ruby solution beats 95%

**Author:** deleted_user
**Votes:** 3
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/3415248/](https://leetcode.com/problems/top-k-frequent-elements/solutions/3415248/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(NlogN) -> we sort freq of N numbers. In worst case all N are uniq and hence NlogN to sort N numbers

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) -> we store all uniq numbers in map

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def top_k_frequent(nums, k)
  nums.tally.sort_by { |_, v| -v }.first(k).to_h.keys
end
```
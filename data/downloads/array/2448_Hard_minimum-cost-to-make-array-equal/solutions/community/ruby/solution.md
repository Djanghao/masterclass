# Solution in 4 lines

**Author:** sparlaimor
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3663752/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3663752/)

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
# @param {Integer[]} costs
# @return {Integer}
def min_cost(nums, costs)
  min, max = nums.minmax
  return 0 if min == max

  memo = Hash.new { |h, k| h[k] = nums.zip(costs).sum(0) { |number, cost| cost * (k - number).abs } }
  memo[(min..max).bsearch { |number| memo[number] < memo[number + 1] }]
end
```
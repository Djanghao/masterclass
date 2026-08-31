# Bottom-up DP, 1 Array

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4861351/](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4861351/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Bottom-up DP, 1 array 

# Complexity
- Time complexity:
O(n * k)

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def maximum_strength(nums, k)
  dp = Array.new(k) { Array.new(nums.length, -Float::INFINITY) }
  dp[k - 1][0] = nums[0] * k

  (1...nums.length).each do |i|
    (k - 1).downto(0) do |j|
      dp[j][i] = [dp[j][i - 1], (j + 1 < k ? dp[j + 1][i - 1] : 0)].max + nums[i] * (j + 1) * ((j & 1 == 1) ? -1 : 1)
    end
  end
  dp[0].max
end

```
# Straightforward Ruby Solution

**Author:** mahi3432
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5508718/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5508718/)

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
# @param {Integer} k
# @return {Integer}
def min_changes(nums, k)
   existing_diffs, max_diffs = {}, {}
   i, n = 0, nums.length
   while i < n / 2 do
     diff = (nums[i] - nums[n - i - 1]).abs
     existing_diffs[diff] = ( existing_diffs[diff] || 0) + 1

     i += 1
   end

   i = 0
   while i < n / 2 do
     max = [nums[i], nums[n - i - 1], k - nums[i], k - nums[n - i - 1]].max
     max_diffs[max] = (max_diffs[max] || 0) + 1

     i += 1
   end

   puts max_diffs.to_s
   x, res, two_changes = 0, Float::INFINITY, 0
   while x <= k + 1 do
     res = [res, n / 2 + two_changes - (existing_diffs[x] || 0) ].min
     two_changes += (max_diffs[x] || 0)

     x += 1
   end

   res
end

```
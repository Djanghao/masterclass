# Ruby solution

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/6079813/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/6079813/)

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
```ruby []
# @param {Integer[]} nums
# @param {Integer} target
# @param {Integer} start
# @return {Integer}
def get_min_distance(nums, target, start)
  arr = []
  nums.each_index { |i| arr << (i - start).abs if nums[i] == target }

  arr.min
end
```
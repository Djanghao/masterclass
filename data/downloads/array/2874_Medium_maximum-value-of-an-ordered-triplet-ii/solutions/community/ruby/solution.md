# Ruby: Beats 100.00% of users. T: O(n)

**Author:** RajRoR
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4112052/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4112052/)

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
def maximum_triplet_value(nums)
  j = 1
  result = 0
  len = nums.length
  left_max = nums[0]
  right_max = nums[j + 1...len].max

  while j < len - 1
    result = [(left_max - nums[j]) * right_max, result].max

    left_max = [nums[j], left_max].max
    j += 1
    if nums[j] == right_max
      right_max = nums[j + 1...len].max
    end
  end
  
  (result.positive? ? result : 0)
end
```
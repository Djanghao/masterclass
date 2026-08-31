# Ruby solution

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/6075408/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/6075408/)

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
# @return {Integer}
def min_operations(nums)
  return 0 if nums.size == 1
  count = 0
  max_int = nums[0]

  (0...nums.size - 1).each do |i|
    max_int = [max_int + 1, nums[i+1]].max
    count += max_int - nums[i+1]
  end
  
  count
  end
```
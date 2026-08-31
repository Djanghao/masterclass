# Ruby solution

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/6071928/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/6071928/)

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
def max_ascending_sum(nums)
  global_max = nums[0]
  local_max = nums[0]
  prev = nums[0]
  i = 1

  while i < nums.size
    nums[i] > prev ? local_max += nums[i] : local_max = nums[i]

    global_max = [local_max, global_max].max
    prev = nums[i]
    i += 1
   end
  
  global_max
end
```
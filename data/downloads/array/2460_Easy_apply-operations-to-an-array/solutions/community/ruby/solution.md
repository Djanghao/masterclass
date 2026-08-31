# Simple solution, time O(n)

**Author:** musthafa_kareechiyil
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/4428847/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/4428847/)

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
# @return {Integer[]}
def apply_operations(nums)
    k = 0
    result = Array.new(nums.length, 0)
    (0...nums.length).each do |i|
        if nums[i] == nums[i+1] and nums[i] != 0
            nums[i] += nums[i]
            nums[i+1] = 0
        end
        if nums[i] != 0
            result[k] = nums[i] 
            k += 1
        end
    end
    result
end
```
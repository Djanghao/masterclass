# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/patching-array/solutions/5324186/](https://leetcode.com/problems/patching-array/solutions/5324186/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} n
# @return {Integer}
def min_patches(nums, n)
    patches = 0
    covered_range = 0
    i = 0

    while covered_range < n
        if i < nums.length && nums[i] <= covered_range + 1
            covered_range += nums[i]
            i += 1
        else
            patches += 1
            covered_range += covered_range + 1
        end
    end

    patches
end
```
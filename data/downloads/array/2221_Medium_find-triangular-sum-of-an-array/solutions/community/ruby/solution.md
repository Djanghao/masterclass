# 100% gang

**Author:** vsrfiles
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5284165/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5284165/)

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
def triangular_sum(nums)
    i = 0
    res = []
    (nums.size-1).times do
        i = 0
        while i < nums.size - 1
            nums[i] = (nums[i] + nums[i+1]) % 10
            i = i + 1
        end
        nums.pop
    end
    return nums.first
end
```
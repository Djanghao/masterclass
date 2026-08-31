# Simple solution

**Author:** musthafa_kareechiyil
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4731180/](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4731180/)

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
def largest_perimeter(nums)
    nums.sort!
    nums.length.times do |i|
        if nums[0...-1].sum > nums[-1]
            return nums[0..-1].sum
        else
            nums.pop
        end
    end
    return -1
end
```
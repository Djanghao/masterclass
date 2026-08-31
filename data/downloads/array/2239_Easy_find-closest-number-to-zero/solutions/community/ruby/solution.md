# Simple and efficient solution with Ruby

**Author:** geovanygameros
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/5555679/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/5555679/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Only process the array once and stores a single variable.

It returns early if it finds a zero to avoid processing the entire array.

# Complexity
- Time complexity:
O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def find_closest_number(nums)
    closest_num = nums[0]
    nums.each do |n|
        return n if n == 0

        if n.abs < closest_num.abs
            closest_num = n
        end

        if n.abs == closest_num.abs
            closest_num = n if n > closest_num
        end
    end
    closest_num
end
```
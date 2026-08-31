# Simple Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3806332/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3806332/)

---

# Intuition
If the last number is smaller than the previous number, we know it won't be part of the largest possible number and we can delete it.  Otherwise, we can merge the last two numbers.
Repeat until the array is length 1.

# Approach
1. Make sure the array has multiple elements.
2. Remove the last element
3. If it can merge with the new last element, merge them.  (Otherwise, we don't need it.)
4. Once the array has only one element, return that element.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_array_value(nums)
  while nums.length > 1
    num = nums.pop
    nums[-1] += num if nums[-1] <= num
  end

  nums[0]
end
```
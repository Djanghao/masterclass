# simple ruby solution

**Author:** kholdrex
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/4712829/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/4712829/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
# @param {Integer[]} nums
# @return {Integer[]}
def find_duplicates(nums)
    nums.map do |num|
      index = num.abs - 1

      if nums[index] < 0
        num.abs
      else
        nums[index] = -nums[index] and next
      end
    end.compact
end

```
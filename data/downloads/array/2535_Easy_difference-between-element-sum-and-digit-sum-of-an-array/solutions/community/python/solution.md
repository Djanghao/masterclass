# Python | Easy Solution✅

**Author:** gmanayath
**Votes:** 5
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3116088/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3116088/)

---

# Code\u2705
```
class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        element_sum = sum(nums)
        digit_sum = 0
        all_digits  = "".join([str(digit) for digit in nums])
        for digit in all_digits:
            digit_sum += int(digit)
        return abs(element_sum-digit_sum)
```
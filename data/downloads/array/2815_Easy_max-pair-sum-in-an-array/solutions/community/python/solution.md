# Python Elegant & Short | O(n) | One Pass

**Author:** Kyrylo-Ktl
**Votes:** 13
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3903995/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3903995/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution:
    def maxSum(self, nums: List[int]) -> int:
        max_by_digit = defaultdict(int)
        max_sum = -1

        for num in nums:
            digit = max(str(num))

            if digit in max_by_digit:
                max_sum = max(max_sum, max_by_digit[digit] + num)

            max_by_digit[digit] = max(max_by_digit[digit], num)

        return max_sum
```
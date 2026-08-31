# Memory 16.38 MB Beats 100.00%, Runtime 36 ms Beats 63.64% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/digit-count-in-range/solutions/5778432/](https://leetcode.com/problems/digit-count-in-range/solutions/5778432/)

---

# Intuition
To find how many times a digit d appears between two numbers, low and high, I calculate how many times d appears from 0 to high, then subtract how many times it appears from 0 to low-1. This gives the count of d in the range [low, high].

# Approach
Count Digit Occurrences: Create a function to count how many times d appears from 0 to any number num.

Calculate Range: Use the counting function twice\u2014once for high and once for low-1\u2014then subtract the results to get the count in the range [low, high].

# Complexity
- Time complexity:
O(log(n)), where n is the larger of low and high. This is because we process each digit of the number, which is proportional to the number of digits.

- Space complexity:
O(1), as we only use a few extra variables regardless of the size of num.

# Code
```python3 []
class Solution:
    def digitsCount(self, d: int, low: int, high: int) -> int:
        return self._count_digit_occurrences(d, high) - self._count_digit_occurrences(d, low - 1)

    def _count_digit_occurrences(self, d: int, num: int) -> int:
        if num < 0:
            return 0

        count, step, factor = 0, 1, 0

        while num > 0:
            num, digit = divmod(num, 10)
            count += (num - (d == 0)) * step + step * (digit > d) + (factor + 1) * (digit == d)
            factor += digit * step
            step *= 10

        return count

```
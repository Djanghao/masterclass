# [Python3] Digit + Bitmask DP - Simple Solution

**Author:** dolong2110
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/5670314/](https://leetcode.com/problems/count-special-integers/solutions/5670314/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- We still have the 2 parameter `pos` and `tight` like any other Digit DP problem.
- We also have the `chosen_digit` represent whether the current digit is chosen or not. Since there are only 10 number from 0 to 9 so digit DP here is feasible. We keep saving all possible case using bitmask which will take 1024 cases in total.
- since, choose 0 when we have not have chosen any first digit yet(first digit must be different than 0), we cannot mask that we chose 0 to bitmask
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N * 2 * 2^{10} * 10)$$ ~ $$O(20480 * N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N * 2 * 2^{10})$$ ~ $$O(2048 * N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def countSpecialNumbers(self, n: int) -> int:
        num = list(map(int, str(n)))

        @cache
        def dp(pos: int, tight: bool, chosen_digit: int) -> int:
            if pos == len(num): return 1
            res = 0
            bound = num[pos] if tight else 10
            for i in range(bound + 1):
                if i == 10: continue
                if chosen_digit & (1 << i): continue 
                new_tight = i == bound
                new_chosen_digit = 0 if chosen_digit == 0 and i == 0 \\
                                     else chosen_digit | (1 << i)
                res += dp(pos + 1, new_tight, new_chosen_digit)
            return res

        return dp(0, True, 0) - 1
```
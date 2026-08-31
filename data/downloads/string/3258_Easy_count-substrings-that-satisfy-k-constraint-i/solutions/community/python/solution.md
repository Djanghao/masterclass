# [Python3] Classic sliding window + count of subarrays solution

**Author:** yourick
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5662332/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5662332/)

---

###### Because we only have `0` and `1` symbols, the number of zeros is equal to the current substring length `(r - l + 1)` minus the number of `ones`.
###### Think about the number of substrings as `How many substrings end at the current item`. We keep our window (substring) valid, so the count of pairs ending at the current item equal to the window size `(r - l + 1)`.
```python3 []
class Solution:
    def countKConstraintSubstrings(self, s: str, k: int) -> int:
        res, l, ones = 0, 0, 0

        for r, n in enumerate(s):
            ones += 1 if n == '1' else 0
            while ones > k and r - l + 1 - ones > k:
                ones -= 1 if s[l] == '1' else 0
                l += 1
            res += r - l + 1

        return res
```
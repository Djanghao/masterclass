# [Python3] Digit DP + KMP - Simple Solution

**Author:** dolong2110
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/5670118/](https://leetcode.com/problems/find-all-good-strings/solutions/5670118/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Find the total numbers of string in range that satisfy 2 condions: one is smaller or equal something threshhold and the other is a specific condition -> Digit DP.
- It mostly works like any other digit dp problem. However the hard part of any Digit DP problem is the other specific conditions.
- In this problem determine whether current string contain some substring of `evil` is hard. It is hard to determine and I was struggle much time to figure it out.

# Approach
- we use the parameter `match_number` to keep the longest substring of `evil` from the beginning to the character similar to current character.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N * 2 * M * 26)$$ ~ $$O(N * M)$$ with `N` is `n` and `M` is lenght of `evil`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N * 2 * M)$$ ~ $$O(N * M)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def findGoodStrings(self, n: int, s1: str, s2: str, evil: str) -> int:
        mod = 10 ** 9 + 7
        def convert_str_to_num(s: str) -> int:
            return ord(s) - ord("a")
        
        num1, num2, evil_num = list(map(convert_str_to_num, s1)), tuple(map(convert_str_to_num, s2)), tuple(map(convert_str_to_num, evil))
        def prefix_function(tup: tuple) -> List[int]:
            l = len(tup)
            lps = [0 for _ in range(l)]
            for i in range(1, l):
                j = lps[i - 1]
                while j > 0 and tup[i] != tup[j]: j = lps[j - 1]
                if tup[i] == tup[j]: j += 1
                lps[i] = j
            return lps

        kmp = prefix_function(evil_num)

        @cache
        def dp(pos: int, tight: True, match_number: int, num: tuple) -> int:
            if match_number == len(evil_num): return 0
            if pos == n: return 1
            res = 0
            bound = num[pos] if tight else 26
            for i in range(bound + 1):
                if i == 26: continue
                new_tight = i == bound
                j = match_number
                while j > 0 and evil_num[j] != i:
                    j = kmp[j - 1]
                if evil_num[j] == i: j += 1
                res = (res + dp(pos + 1, new_tight, j, num))
            return res % mod

        i = n - 1
        while i >= 0 and num1[i] == 0:
            num1[i] = 25
            i -= 1
        if i >= 0: num1[i] -= 1
        else: return dp(0, True, 0, num2) % mod
        
        return (dp(0, True, 0, num2) - dp(0, True, 0, tuple(num1))) % mod
```
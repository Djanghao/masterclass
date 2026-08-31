# ✔️ [Python3] GREEDY FILLING (🌸¬‿¬), Explained

**Author:** artod
**Votes:** 64
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1871793/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1871793/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

Since we are forming the lexicographically smallest string, we just simply fill our result with `a`s  ( o\u02D8\u25E1\u02D8o). But hold on, that result will not necessarily have the required score c(\uFF9F.\uFF9F*) Ummm\u2026 Ok, then we can add some `z`s to the back of the result until the score reaches the required value, so be it (\uFFE2_\uFFE2;). Ofc if we are missing less than 26 to the required score, we add something that is less than `z`.

Time: **O(n)** - iterations
Space: **O(n)** - for list of chars

Runtime: 393 ms, faster than **73.27%** of Python3 online submissions for Smallest String With A Given Numeric Value.
Memory Usage: 15.4 MB, less than **68.20%** of Python3 online submissions for Smallest String With A Given Numeric Value.

```
class Solution:
    def getSmallestString(self, n: int, k: int) -> str:
        res, k, i = ['a'] * n, k - n, n - 1
        while k:
            k += 1
            if k/26 >= 1:
                res[i], k, i = 'z', k - 26, i - 1
            else:
                res[i], k = chr(k + 96), 0

        return ''.join(res)
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**
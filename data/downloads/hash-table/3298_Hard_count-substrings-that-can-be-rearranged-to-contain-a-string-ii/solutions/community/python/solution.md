# Sliding Window

**Author:** votrubac
**Votes:** 20
**Link:** [https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/solutions/5818285/](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/solutions/5818285/)

---

Nothing new here, similar to [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring). 

We track if a string `[j, i]` contains all characters in `w2`.

> For that, we decrement `match` when the remaining character count reaches zero.

If it does, we add `len(w2) - i` to the result, and increment `j`.

**Python**
```python
class Solution:
    def validSubstringCount(self, w1: str, w2: str) -> int:
        cnt = Counter(w2)
        match, res, j = len(cnt), 0, 0
        for i, ch in enumerate(w1):
            cnt[ch] -= 1
            match -= cnt[ch] == 0
            while match == 0:
                res += len(w1) - i
                match += cnt[w1[j]] == 0
                cnt[w1[j]] += 1
                j += 1
        return res;
```
# Python | Iterate from both sides | Explanation and Comment

**Author:** n124345679976
**Votes:** 1
**Link:** [https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3174069/](https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3174069/)

---

First, we consider that given `left` that `t[:left]` is a substring of `s[:sleft]`, how can we find the best `right`?
Of course, `right` should be as small as possible. Even we delete a ton of character inside `t` but `t[len(t)-1]` is not deleted, the score is still `len(t) - left`.
Thus, we should start with the last character of `t` to find if there's a character equals to it in `s[sleft:]`. Every time we find, we should choose the rightest index and we can decrease `right`. Until we cannot decrease `right`, then we should decrease `left` by one to make `sleft` smaller for giving more characters for `t[right]` to match.


# Code
```Python[]
class Solution:
    def minimumScore(self, s: str, t: str) -> int:
        sl = 0
        sr = len(s) - 1
        tl = 0
        tr = len(t) - 1
        k = {}
        for tl in range(len(t)):
            while sl < len(s) and s[sl] != t[tl]:
                sl += 1
            if sl == len(s):
                tl -= 1
                break
            # save smallest sleft for all left
            k[tl] = sl
            sl += 1
            
        # we set left = -1, when we don't use left
        k[-1] = -1
        ans = tr - tl
        # iterate every left by decreasing one
        # releave the limitation of s[sleft:]
        for ntl in range(tl, -2, -1):
            # every time we decrease left, check if right can be decreased
            while tr > ntl and sr > k[ntl]:
                if s[sr] != t[tr]:
                    sr -= 1
                elif s[sr] == t[tr]:
                    sr -= 1
                    tr -= 1
            ans = min(tr - ntl, ans)
        return ans
```
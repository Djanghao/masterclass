# Top-down -> bottom-up -> T: O(S*T), S: O(T)

**Author:** vokasik
**Votes:** 1
**Link:** [https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5186855/](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5186855/)

---

We have a few **choices** to make: remove 1st in `s`, remove last in `s`, remove 1st in `t`, remove last in `t`
Add or remove? If add, where? If remove, where? Where am I? I am here!

Usually if we have choices to make, it might be solved with DP, as DP is **a smart brute-force with cache**.

> Observations

How to minimize number of removals/additions?
S: **aba** T: **aba** -> 0 added, 0 removed
S: **ab**b T: **ab**a -> 1 removed (last b), 1 added (last a)
S: a**ba** T: **ba**b -> 1 removed (first a), 1 added (first b)
S: **a** T: **a**b -> 1 added
S: **a**b T: **a** -> 1 removed
S: abc T: defgh -> 3 removed, 5 added

If there are some common substrings, it makes sence to utilize them as we can build our answer around them:
e.g.
S: **bbb** T: a**bbb**a
It's cheaper to just add `a + existing bbb + a` instead of removing `bbb` and then adding `abbba`

Now the problem changes to find the longest common substring and add+remove chars in S.

More examples:
```
aaaa -> bbbb -> LCS = 0: -len(i) + len(t)
a -> ab -> len(i) < len(t) LCS = 1: len(t) - LCS
b -> ab -> len(i) < len(t) LCS = 1: len(t) - LCS
a -> abb -> len(i) < len(t) LCS = 1: len(t) - LCS
b -> abb -> len(i) < len(t) LCS = 1: len(t) - LCS
aba -> a -> len(i) > len(t) LCS = 1: len(i) - LCS
aba -> b -> len(i) > len(t) LCS = 1: len(i) - LCS
aba -> aa -> len(i) > len(t) LCS = 1: len(i) - LCS
aba -> bb -> len(i) > len(t) LCS = 1: len(i) - LCS
aba -> bab -> len(i) == len(t) LCS = 2: (len(i) - LCS) + (len(t) - LCS)
abc -> defg -> len(i) - LCS + len(t) - LCS
```

From the examples we can figure out that we need `len(S) - lcs + len(T) - lcs` to align the strings.

> Top-down (MLE :/)
> 
Approach: pick or skip `i` (pointer in S), pick or skip `j` (pointer in T) and if got `s[i] == t[j]` length + 1 -> repeat.
In other words, try building the longest common substring starting from an index i in S and an index j in T.
Naive approach - N^3, DP - N^2. Something smarter (KMP, RB???) - N, probably.

```
class Solution:
    def minOperations(self, s: str, t: str) -> int:
        @cache
        def lcs(i, j):
            nonlocal longest
            if i == S or j == T: # reached end of S or T
                return 0
            res = 0
            lcs(i + 1, j) # look for start position in S
            lcs(i, j + 1) # look for start position in T
            if s[i] == t[j]: # match
                res = lcs(i + 1, j + 1) + 1 # current common substring + 1
                longest = max(longest, res) # pick the longest out of all found common substrings
            return res
            
        S = len(s)
        T = len(t)
        longest = 0
        lcs(0, 0)
        return len(s) - longest + len(t) - longest # calc changes needed
```
> Bottom-up (AC) T\\*S, space: T\\*S
> 
```
class Solution:
    def minOperations(self, s: str, t: str) -> int:
        S = len(s)
        T = len(t)
        dp = [[0] * (T + 1) for _ in range(S + 1)]
        res = 0
        for i in reversed(range(S)):
            for j in reversed(range(T)):
                if s[i] == t[j]:
                    dp[i][j] = dp[i + 1][j + 1] + 1
                    res = max(res, dp[i][j])
        return len(s) - res + len(t) - res
```
> Bottom-up (AC) T\\*S, space: T
> 
```
class Solution:
    def minOperations(self, s: str, t: str) -> int:
        S = len(s)
        T = len(t)
        dp = [0] * (T + 1)
        res = 0
        for i in reversed(range(S)): # reverse direction from top-down as we are not in recursion anymore
            for j in range(T):
                if s[i] == t[j]:
                    dp[j] = dp[j + 1] + 1
                    res = max(res, dp[j])
                else:
                    dp[j] = 0
        return len(s) - res + len(t) - res
```
Regarding `O(N)`, let me think a bit...
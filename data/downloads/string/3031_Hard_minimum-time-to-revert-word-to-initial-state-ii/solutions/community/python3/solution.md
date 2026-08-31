# 2 O(n) approaches:  LSP array (KMP) and z-function

**Author:** lone17
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4675275/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4675275/)

---

> A moment of silence for me for having misunderstood the problem description and couldn't solve both problems during the contest. RIP ranking.

# Approach 1: Using LSP (KMP)
## Idea
- Find the longest possible string that we can keep untouched (this string is a prefix and also a suffix).
- Calculate the `lsp` array where `lsp[i]` is the length of the [longest prefix which is also a suffix](https://cp-algorithms.com/string/prefix-function.html) of `s[0...i]`.
- Thus `lsp[-1]` is the length of the longest lsp of `s`.
    - and `lsp[lsp[-1]]` is the second longest
    - so on ...
- With this, we have the length of all suffix prefix. Now we just need to find the biggest length `l` such that the remaining text (`s[:n - l]`) can be manipulated using text blocks of length `k` (i.e. `(n - l) % k == 0`)
- If no such `l` exists, we have to reconstruct the whole string, so just return `ceil(len(s) / k)`.

## Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

## Code
```
class Solution:
    def minimumTimeToInitialState(self, word: str, k: int) -> int:
        def lsp(s):
            n = len(s)
            lsp = [0] * n
            for i in range(1, n):
                j = i - 1
                while j > 0 and s[i] != s[lsp[j]]:
                    j = lsp[j] - 1
                if s[i] == s[lsp[j]]:
                    lsp[i] = lsp[j] + 1
            return lsp
        
        n = len(word)
        
        lsp_list = lsp(word)
        
        l = lsp_list[-1]
        while l > 0 and (n - l) % k:
            l = lsp_list[l - 1]
        
        return ceil((n - l) / k)
```

# Approach 2: Using z-function
## Idea
- `z[i]` is the length of the longest common prefix of `s` and `s[i:]` (see [z-function](https://cp-algorithms.com/string/z-function.html)).
- Similar idea as the previous approach, find the smallest i such that:
    - `i % k == 0` (the remaining text (`s[:i]`) can be manipulated using text blocks of length `k`)
    - `z[i] == n - i` (`s[i:]` is also a suffix)

## Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

## Code
```
class Solution:
    def minimumTimeToInitialState(self, word: str, k: int) -> int:
        n = len(word)
        z = [0] * n
        
        l, r = 0, 0
        for i in range(1, n):
            if i <= r:
                z[i] = min(z[i - l], r - i + 1)
            while i + z[i] < n and word[z[i]] == word[i + z[i]]:
                z[i] += 1
            if i % k == 0 and z[i] == n - i:
                return i // k
            if i + z[i] - 1 > r:
                l, r = i, i + z[i] - 1
            
        
        return ceil(n / k)
```
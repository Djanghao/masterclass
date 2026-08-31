# Python

**Author:** anandinguva98
**Votes:** 3
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/702418/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/702418/)

---

```
class Solution:
    def lenLongestFibSubseq(self, A: List[int]) -> int:
        n = len(A)
        lookup = {}
        for i in range(len(A)):
            lookup[A[i]] = i
        longest = collections.defaultdict(lambda: 2)
        maxLength = 2
        for i in range(len(A)):
            a = A[i]
            for j in range(i + 1, len(A)):
                b = A[j]
                c = a + b
                if c in lookup:
                    longest[(j, lookup[c])] = longest[(i, j)] + 1
                    maxLength = max(longest[(j, lookup[c])], maxLength)
        return maxLength if maxLength != 2 else 0
```
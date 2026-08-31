# Python 3 | One Pass O(N), Hash Map, DP | Explanation

**Author:** idontknoooo
**Votes:** 30
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/1602808/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/1602808/)

---

### Explanation
- Traverse from left to right, when visiting a character `C`, number of substring that begin and end with `C` in the prefix substring is the frequency of `C` (in this prefix substring) + 1
- For example: `abcba`
	- 1. `a`: found 1, `a`, total 1
	- 2. `ab`: found 1, `b`, total 2
	- 3. `abc`: found 1, `c`, total 3
	- 4. `abcb`: found 2, `bcb` and `b`, total 5
	- 5. `abcba`: found 2, `abcba` and `a`, total 7
### Implementation
```
class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        ans = 0
        d = collections.defaultdict(int)
        for c in s:
            d[c] += 1
            ans += d[c]
        return ans
```
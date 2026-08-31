# [Python] clean 12 line sliding window solution with explanation

**Author:** alanlzl
**Votes:** 158
**Link:** [https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/2948183/](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/2948183/)

---

**Explanation**

Instead of taking `k` of each character from left and right, we take at most `count(c) - k` of each character from middle.

For Example 1, `s = "aabaaaacaabc"` with `k = 2`:
- we have `freq = {'a': 8, 'b': 2, 'c': 2}`
- this converts to `limits = freq - k = {'a': 6, 'b': 0, 'c': 0}`
- now the problem becomes "finding the longest substring where the occurrence of each character is within `limits`"
- we can easily solve this new problem using sliding window

</br>

**Complexity**

- Time complexity: `O(N)`
- Space complexity: `O(1)`

</br>

**Python**
```
class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        limits = {c: s.count(c) - k for c in 'abc'}
        if any(x < 0 for x in limits.values()):
            return -1

        cnts = {c: 0 for c in 'abc'}
        ans = l = 0
        for r, c in enumerate(s):
            cnts[c] += 1
            while cnts[c] > limits[c]:
                cnts[s[l]] -= 1
                l += 1
            ans = max(ans, r - l + 1)

        return len(s) - ans
```
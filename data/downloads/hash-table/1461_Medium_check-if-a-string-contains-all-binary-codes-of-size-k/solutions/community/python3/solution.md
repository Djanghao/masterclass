# [Python] 4 lines, O(N*k), with explanation

**Author:** kevinhynes
**Votes:** 31
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/661063/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/661063/)

---

This problem statement was incorrect during the contest.  We want to find out if **ALL** "binary codes" of length `k` can be found (contiguously) in the string `s`.

So, for
`k=1` , we need to find `0` and `1` in `s`.  There are 2 binary codes.
`k=2`, we need to find `00`, `01`, `10`, `11`.  There are 4 binary codes.
`k=3`, we need to find `000`, `001`, `011`, `010`, `100`, `101`, `110`, `111`.  There are 8 binary codes.

And now we've found a pattern.  The amount of binary codes we need to find in `s` is equal to `2 ** k`.

Iterate through `s`, and take a chunk of length `k`.  Add it to a set.  Once we're done, if `len(codes) == 2 ** k` we can return `True`.

```
class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        codes = set()
        for i in range(len(s) - k + 1):
            codes.add(s[i:i+k])
        return len(codes) == 2 ** k
```



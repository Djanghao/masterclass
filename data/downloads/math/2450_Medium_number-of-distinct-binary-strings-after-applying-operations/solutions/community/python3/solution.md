# Either flip s[i:i+k] or not flip. Totally 2^(len(s)-k+1) ways.

**Author:** yuanzhi247012
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2744409/](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2744409/)

---

Flipping s[i:i+k] means flip substring starting from 'i', with length of 'k'.
Content of 's' doesn't matter. By flipping s[i:i+k], you are guaranteed to get a different string. No duplicate as long as you don't flip s[i:i+k] again.
For each 'i', we can choose to flip or not flip it, totally 2^(len(s)-k+1) ways.

```
    def countDistinctStrings(self, s: str, k: int) -> int:
        return pow(2,len(s)-k+1,10**9+7)
```
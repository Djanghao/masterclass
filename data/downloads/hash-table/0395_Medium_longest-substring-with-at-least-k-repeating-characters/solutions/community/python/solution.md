# Python, short and clean

**Author:** DrFirestream
**Votes:** 31
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/492483/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/492483/)

---

The idea is that any characters in the string that do not satisfy the requirement break the string in multiple parts that do not contain these characters, and for each part we should check the requirement again. There are similar solutions (not many), though most use string methods like split or count, which keep some important details hidden. Here I am also using Counter for short code but it's just replacing a usual dictionary and a single obvious loop to calculate counts of letters. 

Concerning complexity, it is indeed formally O(N), like it was mentioned in another solution despite recursion, because at each level of recursion we look at maximum 2N characters, and there can be not more than 26 levels of recursion, because we remove at least one character from 26 possible characters each time we move to the next level.

```
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        cnt = collections.Counter(s)
        st = 0
        maxst = 0
        for i, c in enumerate(s):
            if cnt[c] < k:
                maxst = max(maxst, self.longestSubstring(s[st:i], k))
                st = i + 1
        return len(s) if st == 0 else max(maxst, self.longestSubstring(s[st:], k))
```
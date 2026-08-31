# Python Short & Simple Recursive Solution

**Author:** YehudisK
**Votes:** 70
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/949688/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/949688/)

---

```
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        if len(s) == 0 or k > len(s):
            return 0
        c = Counter(s)
        sub1, sub2 = "", ""
        for i, letter in enumerate(s):
            if c[letter] < k:
                sub1 = self.longestSubstring(s[:i], k)
                sub2 = self.longestSubstring(s[i+1:], k)
                break
        else:
            return len(s)
        return max(sub1, sub2)
```
**Like it? please upvote...**
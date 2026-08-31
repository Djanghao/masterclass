# Optimized Python Solution using Trie Tree and Merge Intervals

**Author:** sevenhe716
**Votes:** 21
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/263907/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/263907/)

---

Here are two key points: 
1. **Trie Tree** is used to speed up string match (faster than **find** or **startwith** in large query request).
2. Using **Merge Intervals** instead of **mask** to reduce Time and Space Complexity, both from O(n) to O(m), **m** represets interval numbers after merged.

```
class Solution:
    def addBoldTag(self, s: str, dict: 'List[str]') -> str:
        trie, n, intervals, res = {}, len(s), [], ""

        # create trie tree
        for w in dict:
            cur = trie
            for c in w:
                cur = cur.setdefault(c, {})
            cur["#"] = 1

        # interval merge
        def add_interval(interval):
            if intervals and intervals[-1][1] >= interval[0]:
                if intervals[-1][1] < interval[1]:
                    intervals[-1][1] = interval[1]
            else:
                intervals.append(interval)

        # make max match and add to interval
        for i in range(n):
            cur, max_end = trie, None
            for j in range(i, n):
                if s[j] not in cur:
                    break
                cur = cur[s[j]]
                if "#" in cur:
                    max_end = j + 1
            # just need to add max-match interval
            if max_end:
                add_interval([i, max_end])

        # concat result
        res, prev_end = "", 0
        for start, end in intervals:
            res += s[prev_end:start] + '<b>' + s[start:end] + "</b>"
            prev_end = end
        return res + s[prev_end:]
```

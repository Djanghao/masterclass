# With Explanation

**Author:** speedyy
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/4186939/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/4186939/)

---

[The Main Explanation](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/1863900/java-c-python-straight-forward-solution/) : As it said `If we add pattern[0], the best option is to add at the begin AND If we add pattern[1], the best option is to add at the end.`
- But no matter what we do, we've to count (`countPattern`) number of `pattern` currently existing in `text`.
- Then we just check, adding pattern[0] at the beginning or adding pattern[1] at the end will make the `countPattern` greater. HOW WE DO THAT?
- - For example, `text = "abcrc"`, `pattern = "ac"`. `countPattern = 2 (1 a, 2 c)` where we've already counted substring `ac` for `a` and `c` in `text`.
In the below WHEN WE CALCULATE FOR THE `a` IF WE ADD IT FIRST, we won't count for other `a` as `countPattern` already handled for other `a`'s AND FOR THE `c` IF WE ADD IT AT THE LAST, we won't count for `c` as `countPattern` already handled for other `c`'s.

- - `Adding pattern[0] at the beginning in text` : `aabcrc` - after the first `a`(`pattern[0], which we just added`) there is `2 c` in the whole `text` i.e. we can make 2 more substring of `ac` if add pattern[0] at the beginning of `text`, `count1` i.e. `c` in the whole `text` = 2.
- - `Adding pattern[1] at the end in text` : `abcrcc` - before the last `c` there is `1 a` in the whole `text` i.e. we can make 1 more substring of `ac` if add pattern[1] at the end of `text`, `count0` i.e. `a` in the whole `text` = 1.
- Now 
```py
Highest Substring of pattern = The number of 'pattern' already in 'text'
                               +
                               max(number of extra 'pattern' if we add pattern[0] at the beginning i.e. number of pattern[1] in 'text',
                                  number of extra 'pattern' if we add pattern[1] at the end i.e. number of pattern[0] in 'text',)

                             = countPattern + max(count1, count0)
                             = 2 + max(2, 1) 
                             = 2 + 2
                             = 4
```
```py []
class Solution:
    def maximumSubsequenceCount(self, text: str, pattern: str) -> int:
        count0 = count1 = countPattern = 0
        for c in text:
            if c == pattern[1]:
                count1 += 1
                countPattern += count0
            if c == pattern[0]:
                count0 += 1
        
        return countPattern + max(count1, count0)
```
```
Time  complexity : O(n)
Space complexity : O(1)
```

### Why 
```
class Solution:
    def maximumSubsequenceCount(self, text: str, pattern: str) -> int:
        count0 = count1 = countPattern = 0
        for c in text:
            if c == pattern[0]:
                count0 += 1

            if c == pattern[1]:
                count1 += 1
                countPattern += count0
        
        return countPattern + max(count1, count0)
```
### won't work?

For `text = "rrcr", pattern = "rr"` i.e. where `pattern[0] == pattern[1]`
- If we first check `if c == pattern[0]:`, then count0 = 1, next if we check `if c == pattern[1]:`, then countPattern += count0 i.e. 1 BUT it should be 0 because we've not found any pattern `rr` yet! That's why to handle this worst case check `if c == pattern[1]:` first, next `if c == pattern[1]:`.

## If the post was helpful, an upvote will really be appreciated. Thank youu
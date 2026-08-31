# Python 3 Backtracking (no set, no itertools, simple DFS count) with explanation

**Author:** idontknoooo
**Votes:** 37
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/774815/](https://leetcode.com/problems/letter-tile-possibilities/solutions/774815/)

---

### Intro
I see lots of solution are actually generating the strings, but the question is only asking for the total count. Why doing so? 

### Intuition
- First, we count the letter frequency, since same char at same position should only count as 1 same string
- Second, use backtracking to count permutation in each `record` situation. Remember to revert it back, before goes to next letter


### Implementation
```
class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        record = [0] * 26
        for tile in tiles: record[ord(tile)-ord('A')] += 1
        def dfs(record):
            s = 0
            for i in range(26):
                if not record[i]: continue
                record[i] -= 1
                s += dfs(record) + 1 
                record[i] += 1
            return s    
        return dfs(record)
```
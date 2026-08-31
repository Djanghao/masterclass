# [Python3] bitmask

**Author:** ye15
**Votes:** 96
**Link:** [https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/1676852/](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/1676852/)

---

Please checkout this [commit](https://github.com/gaosanyong/leetcode/commit/36536bdcdd42d372f17893d27ffbe283d970e24f) for solutions of weekly 275. 

```
class Solution:
    def wordCount(self, startWords: List[str], targetWords: List[str]) -> int:
        seen = set()
        for word in startWords: 
            m = 0
            for ch in word: m ^= 1 << ord(ch)-97
            seen.add(m)
            
        ans = 0 
        for word in targetWords: 
            m = 0 
            for ch in word: m ^= 1 << ord(ch)-97
            for ch in word: 
                if m ^ (1 << ord(ch)-97) in seen: 
                    ans += 1
                    break 
        return ans 
```
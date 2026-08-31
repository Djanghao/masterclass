# [Python3] Solution with using trie

**Author:** maosipov11
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/1612522/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/1612522/)

---

```
class Solution:
    def countDistinct(self, s: str) -> int:
        trie = {}
        res = 0
    
        for i in range(len(s)):
            node = trie
            for j in range(i, len(s)):
                if s[j] not in node:
                    node[s[j]] = {'end': True}
                
                node = node[s[j]]
                
                if node['end'] == True:
                    node['end'] = False
                    res += 1
                    
        return res
```
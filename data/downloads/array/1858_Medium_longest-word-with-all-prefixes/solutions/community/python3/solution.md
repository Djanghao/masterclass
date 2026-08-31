# Python | Trie | Clean Code | O(n)

**Author:** aryonbe
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/3590902/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/3590902/)

---

# Code
```
class Solution:
    def longestWord(self, words: List[str]) -> str:
        words.sort()
        trie = {'#':0}
        def insert(word):
            v = trie 
            for c in word:
                if '#' not in v:
                    return False
                if c not in v:
                    v[c] = {}
                v = v[c]
            v['#'] = 0
            return True 
        res = ""
        for w in words:
            if insert(w):
                if len(res) < len(w):
                    res = w 
        return res

            

```
# Python Trie Solution

**Author:** icecold
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/1701387/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/1701387/)

---

```
from collections import defaultdict
class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.end = False
    
    def addWord(self, word):
        root = self
        for ch in word:
            root = root.children.setdefault(ch, TrieNode())
        root.end = True
        
class Solution:
    def longestWord(self, words: List[str]) -> str:
        self.root = TrieNode()
        for word in words:
            self.root.addWord(word)
        res = ""
        for word in words:
            if self.allPrefixExist(word, self.root):
                if len(word) > len(res):
                    res = word
                elif len(word) == len(res):
                    res = min(word, res)
        return res
        
    def allPrefixExist(self, word, node):        
        for ch in word:
            node = node.children[ch]
            if not node.end:
                return False
        return True
```
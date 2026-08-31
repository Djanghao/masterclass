# Python 3 | Standard Trie Implementation | No explanation

**Author:** idontknoooo
**Votes:** 49
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/1325489/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/1325489/)

---

A slightly modification based on basic Trie implementation.
- `cnt_start_with`: count all words has the same prefix
- `cnt`: count only the exact word 
### Implementation
```
class TrieNode:
    def __init__(self):
        self.children = dict()
        self.cnt = 0
        self.cnt_start_with = 0
        
class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]    
            node.cnt_start_with += 1    
        node.cnt += 1

    def countWordsEqualTo(self, word: str) -> int:
        node = self.root
        for c in word:
            if c not in node.children:
                return 0
            node = node.children[c]
        return node.cnt    
            
    def countWordsStartingWith(self, prefix: str) -> int:
        node = self.root
        for c in prefix:
            if c not in node.children:
                return 0
            node = node.children[c]
        return node.cnt_start_with
        

    def erase(self, word: str) -> None:
        node = self.root
        for c in word:
            node = node.children[c]
            node.cnt_start_with -= 1
        node.cnt -= 1
```
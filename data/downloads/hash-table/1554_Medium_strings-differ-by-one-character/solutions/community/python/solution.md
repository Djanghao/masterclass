# Python - elegant trie solution

**Author:** ChenAmos
**Votes:** 8
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/2296245/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/2296245/)

---

```
from collections import defaultdict

class Trie:
    def __init__(self):
        self.children = defaultdict(Trie)
        self.is_end = False
        
    def add_word(self, word):
        curr = self
        
        for c in word:
            curr = curr.children[c]
        
        curr.is_end = True
        
    def search_word(self, word, idx, mismatch_count):       
        # iterate all nodes
        for char, node in self.children.items():
            # start a search from each one, skipping the current character
            is_diff = char != word[idx]
            if mismatch_count + is_diff <= 1 and node.search_word(word, idx+1, mismatch_count + is_diff):
                return True
        
        return self.is_end and mismatch_count == 1
        

class Solution:
    def differByOne(self, dict: List[str]) -> bool:                
        # using Trie
        trie = Trie()
        
        # add all words to trie
        for word in dict:
            trie.add_word(word)
                    
        # search for word differing by one char
        for word in dict:
            if trie.search_word(word, 0, 0):
                return True
        
        return False
        
        
        
            
        
                    
        
```
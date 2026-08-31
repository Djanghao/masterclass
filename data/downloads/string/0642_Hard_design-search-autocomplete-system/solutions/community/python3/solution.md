# Python 3 | Trie Variation | Explanation

**Author:** idontknoooo
**Votes:** 17
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/1562242/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/1562242/)

---

### Explanation
- At each prefix, store 3 most frequent sentences. It trades off space for better time complexity.
- See below comments for more explanation
### Implementation
```
class TrieNode:
    def __init__(self):
        self.children = dict()
        self.three = []                                    # three sentences 
    
class Trie:
    def __init__(self):
        self.root = TrieNode()
        
    def add(self, sentence, time):        
        node = self.root
        for c in sentence:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]    
            for i, (t, s) in enumerate(node.three):        # update three sentences 
                if s == sentence:
                    tmp = node.three[:]
                    tmp[i][0] = time
                    break
            else:    
                tmp = node.three + [[time, sentence]]
            node.three = sorted(tmp, key=lambda x: (-x[0], x[1]))[:3]
        
class AutocompleteSystem:

    def __init__(self, sentences: List[str], times: List[int]):
        self.d = collections.Counter()                      # keep tracking {sentence: time}
        self.trie = Trie()                                  # trie
        self.node = self.trie.root                          # pointer to root and move along with input characters
        for sentence, time in zip(sentences, times):        # add initial info
            self.d[sentence] += time       
            self.trie.add(sentence, time)       
        self.cur = ''                                       # prefix
        self.prefix_none = False                            # True if prefix cannot be found

    def input(self, c: str) -> List[str]:       
        if c == '#':                                        # input ends 
            self.node = self.trie.root                      # reset self.node to root
            self.d[self.cur] += 1                           # increment counter by 1
            self.trie.add(self.cur, self.d[self.cur])       # update sentence and time
            self.cur = ''                                   # reset prefix string
            self.prefix_none = False                        # reset this flag
            return []                                       # return
        self.cur += c                                       # making prefix
        if c not in self.node.children or self.prefix_none: # when prefix is not found the first time and time after 1st time
            self.prefix_none = True                         # set flag
            return []
        self.prefix_none = False                            # reset prefix_none flag
        self.node = self.node.children[c]                   # move to next node
        return [word for _, word in self.node.three]        # return 3 words
```
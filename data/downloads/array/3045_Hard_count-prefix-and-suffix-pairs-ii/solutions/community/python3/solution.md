# 2 Tries

**Author:** Harkness
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744441/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744441/)

---

# Intuition
Put each word and its reverse into 2 tries. When adding a word, check the matched prefixes and suffixes, and increment result counter.

Note that there could be repeated words. Putting all word indices in the Trie would lead to certain end-node having O(n) indices and cause TLE. Instead, only store unique words in the Trie, and keep track of count for each word added, so we can use its count when it matches both prefix and suffx of a later word. This makes sure when we match a new word againt previous words, the number of matches (unique words) is bounded by current word length. Since total `sum(len(w) for w in words)` is bounded by 5x10^5, the complexity is also bounded by the same number.

# Complexity
- Time complexity:
`O(sum of word lengths)`

# Code
```
class Trie:
    def __init__(self):
        self.root = {}
    def insert(self, w, reverse=False):
        cur = self.root
        indices = set()
        for c in w:
            if c in cur:
                cur = cur[c]
            else:
                cur[c] = {}
                cur = cur[c]
            if 'end' in cur:
                indices.add(cur['end'])
        cur['end'] = w[::-1] if reverse else w
        return indices

class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        pref = Trie()
        suf = Trie()
        ct = defaultdict(int)
        res = 0
        for w in words:
            indices1 = pref.insert(w)
            rw = w[::-1]
            indices2 = suf.insert(rw, True)
            # len(indices1) and len(indices2) are biunded by len(w)
            for j in indices1:
                if j in indices2:
                    res += ct[j]
            ct[w] += 1
        return res
```
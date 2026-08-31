# [Python] Concise Brute Force & Trie Solutions with Explanation

**Author:** zayne-siew
**Votes:** 25
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/2172401/](https://leetcode.com/problems/short-encoding-of-words/solutions/2172401/)

---

### Introduction

Given a list of words, find the length of the shortest string which contains all the words in the list appended with a hash "#" symbol.

Running through some test cases, we quickly see that the only way for the resultant string to be shorter than the sum of all lengths of the words in the list is if **there are words in the list that are suffixes of other words in the list**. For example:

```text
words = ["time","me"]
result = "time#"

words = ["time","meat"]
result = "time#meat#"
(notice that it cannot be any variant of "timeat", since inserting a hash symbol will disrupt the words)
```

As such, we require a solution that can **identify and group the words based on their suffixes**.

---

### Brute Force Approach

The simplest way to find out if a word `w1` is a suffix of another word `w2` is to check if `w2.endswith(w1)`. We can sort the list by word length in decreasing order, so that all words that are suffixes are guaranteed to be found.

```python
class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        words.sort(key=len, reverse=True)
        res = []
        for suffix in words:
            if not any(word.endswith(suffix) for word in res):  # check that this word is not actually a suffix
                res.append(suffix)
        return sum(len(word)+1 for word in res)  # append hash '#' symbol to each word that is not a suffix
```

**TC: O(n<sup>2</sup>k)**, where `n` is the number of words in the list and `k` is the (maximum) length of the words; we check all words against one another in the worst case.
**SC: O(n)**; for the resultant list of words.

---

### Optimised Brute Force Approach

Instead of constantly having to compare two strings (which is slow), we can instead **loop through all possible suffixes of each word and count the number of occurrences of each suffix**. If a particular suffix only occurs once, that indicates that the 'suffix' is actually a word to be added into the resultant string.

```python
class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        words = set(words)  # important - e.g. ["time","time"] -> "time#"
        counter = Counter(word[i:] for word in words for i in range(len(word)))
        return sum(len(word)+1 for word in words if counter[word] == 1)
```

**TC: O(nk)**; each character of each word is visited once.
**SC: O(nk)**; each string has `k` substrings as keys in `d`.

---

### Trie Approach

A trie is a specialised data structure that is useful for storing and searching for strings. [This article](https://towardsdatascience.com/implementing-a-trie-data-structure-in-python-in-less-than-100-lines-of-code-a877ea23c1a1) might help get you started if you're unfamiliar with the data structure.

Essentially, we can find similar suffixes by **reversing each word and adding it to our trie**. Then, we can perform DFS on the tree-like structure to obtain all maximum-length chains; i.e., words that are not suffixes.

```python
class TrieNode:
    def __init__(self, ch: Optional[str]='#'):
        self.ch = ch
        self.cd = {}  # children nodes
        self.end = False
        
class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def add(self, word: str) -> None:
        curr = self.root
        for i in range(len(word)):
            if word[~i] not in curr.cd:  # ~i = -i-1
                curr.cd[word[~i]] = TrieNode(word[~i])
            curr = curr.cd[word[~i]]
        curr.end = True  # mark the end of the word

class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        trie = Trie()
        for word in words:
            trie.add(word)
        def dfs(node: TrieNode, curr: int) -> int:
            return sum(dfs(adj, curr+1) for adj in node.cd.values()) if node.cd else curr
        return dfs(trie.root, 1)
```

A less verbose but more concise implementation:

```python
class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        trie = (d := lambda: defaultdict(d))()  # multi-level collections.defaultdict
        for word in words:
            curr = trie
            for i in range(len(word)):
                curr = curr[word[~i]]
        return (dfs := lambda node, curr: sum(dfs(adj, curr+1) for adj in node.values()) if node else curr)(trie, 1)
```

A similar solution I found in the official solution post which uses a slightly different approach:

```python
class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        words = list(set(words))
        trie = (d := lambda: defaultdict(d))()
        nodes = [reduce(dict.__getitem__, word[::-1], trie) for word in words]  # equivalent to trie[word[-1]][word[-2]]...
        return sum((len(word)+1) for word, node in zip(words, nodes) if len(node) == 0)
```

> If the concise implementations are not sufficiently readable, please use the original implementation instead - it's the implementation that I first used when solving this problem! I just wanted to show that it is possible to write concise code for trie implementations even when it's not traditionally the way to write the code.

**TC: O(nk)**; the worst-case scenario is if none of the words match with one another, in which case we have `n` chains of length `k`.
**SC: O(nk)**; similar reasoning as above.

---

Please upvote if this has helped you! Appreciate any comments as well :)
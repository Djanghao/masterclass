# [Python] Trie + DP Solution

**Author:** Ometek
**Votes:** 11
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5432354/](https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5432354/)

---

# Intuition
At each index we need to find all possible words that we can write from that index. Checking all words one by one will be too slow -> `O(n * m)` or more. Therefore we will create a Trie-Tree that will help us limit the options needed to check for each iteration. Note that although at some indexes we might still have to check `O(m)` words and update them, not only finding those words is easy, but also we will generate the absolute minimum data that has to be included. 

Then we can use simple dp to finish the process.

# Approach
## Create a Trie-Tree
1. Create a `TrieNode`. 
    Here we're gonna need children -> `Dict[char, TrieNode]`, and a way to keep track of the cost and if there even is a word that ends here. So cost >= 10**10 will mean that there was no way of getting there.
2. Create a `Trie-Tree`
    We need a root -> TrieNode and some functions.
    - insert - adds a word to the tree and updates it's cost.
    - search - finds the words that are prefixes of `s[start:]`. A match happens when we find a node with a proper cost. We stop searching where no more words from `words` are possible.

## DP
1. initialise `dp`
    `dp[i]` - cheapest cost of creating a word of length i
    thus dp[0] = 0 and the rest is unknown

2. iterate
    if it's not possible to get to index `i`, then skip.

    otherwise find all mathes and update their values in the 'future' (idx > i).

## result 

Result is in dp[n]. Now we just need to determine if it shouldn't be -1. 

# Code
```
### Trie-tree implementation
class TrieNode:
    def __init__(self):
        self.children = {}
        self.cost = 10**10

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word, cost):
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.cost = min(cost, node.cost)
    
    def search(self, s, start):
        node = self.root
        matches = []
        for i in range(start, len(s)):
            if s[i] in node.children:
                node = node.children[s[i]]
                if node.cost < 10**10:
                    matches.append((i + 1, node.cost))
            else:
                break
        return matches

class Solution:
    def minimumCost(self, target: str, words: List[str], costs: List[int]) -> int:
        n, m = len(target), len(words)
    
        trie = Trie()
        for word, cost in zip(words, costs):
            trie.insert(word, cost)
    
        dp = [10 ** 10] * (n + 1)
        dp[0] = 0 
    
        for i in range(n):
            if dp[i] >= 10**10:
                continue
            
            matches = trie.search(target, i)
            for idx, cost in matches:
                dp[idx] = min(dp[idx], dp[i] + cost)
        
        result = dp[n]
        return result if result < 10**10 else -1


```
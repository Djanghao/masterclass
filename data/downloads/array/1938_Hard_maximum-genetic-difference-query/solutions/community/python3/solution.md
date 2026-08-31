# [Python3] bit trie

**Author:** ye15
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-genetic-difference-query/solutions/1355918/](https://leetcode.com/problems/maximum-genetic-difference-query/solutions/1355918/)

---


```
class Trie: 
    def __init__(self): 
        self.root = {}
    
    def insert(self, x): 
        node = self.root
        for i in range(18, -1, -1): 
            bit = (x >> i) & 1
            node = node.setdefault(bit, {})
            node["mult"] = 1 + node.get("mult", 0)
        node["#"] = x # sentinel 
        
    def search(self, x): 
        node = self.root
        for i in range(18, -1, -1): 
            bit = (x >> i) & 1
            if 1^bit in node: node = node[1^bit]
            else: node = node[bit]
        return x ^ node["#"]
    
    def remove(self, x): 
        node = self.root
        for i in range(18, -1, -1): 
            bit = (x >> i) & 1
            node[bit]["mult"] -= 1
            if node[bit]["mult"] == 0: 
                node.pop(bit)
                break 
            node = node[bit]
        

class Solution:
    def maxGeneticDifference(self, parents: List[int], queries: List[List[int]]) -> List[int]:
        mp = {}
        for i, (node, val) in enumerate(queries): 
            mp.setdefault(node, []).append([val, i])
        
        tree, root = {}, -1
        for i, x in enumerate(parents): 
            if x == -1: root = i
            else: tree.setdefault(x, []).append(i)
        
        ans = [0]*len(queries)
        trie = Trie()
        
        def fn(x): 
            """Collect query results while traversing the tree."""
            trie.insert(x)
            for v, i in mp.get(x, []): ans[i] = trie.search(v)
            for xx in tree.get(x, []): fn(xx)
            trie.remove(x)
        
        fn(root)
        return ans 
```
# [Python3] trie

**Author:** ye15
**Votes:** 46
**Link:** [https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/1119703/](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/1119703/)

---


```
class Trie: 
    def __init__(self): 
        self.root = {}
        
    def insert(self, val): 
        node = self.root 
        for i in reversed(range(15)):
            bit = (val >> i) & 1
            if bit not in node: node[bit] = {"cnt": 0}
            node = node[bit]
            node["cnt"] += 1
        
    def count(self, val, high): 
        ans = 0 
        node = self.root
        for i in reversed(range(15)):
            if not node: break 
            bit = (val >> i) & 1 
            cmp = (high >> i) & 1
            if cmp: 
                if node.get(bit, {}): ans += node[bit]["cnt"]
                node = node.get(1^bit, {})
            else: node = node.get(bit, {})
        return ans 
            
        
class Solution:
    def countPairs(self, nums: List[int], low: int, high: int) -> int:
        trie = Trie()
        ans = 0
        for x in nums: 
            ans += trie.count(x, high+1) - trie.count(x, low)
            trie.insert(x)
        return ans 
```
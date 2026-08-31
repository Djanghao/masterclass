# [Python3] trie

**Author:** ye15
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/988468/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/988468/)

---

**Algo**
This problem is similar to [421. Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) which can be solved efficiently via a trie. 

**Implementation** (100%)
```
class Solution:
    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        nums.sort()
        queries = sorted((m, x, i) for i, (x, m) in enumerate(queries))
        ans = [-1]*len(queries)
        
        trie = {}
        k = 0
        for m, x, i in queries: 
            while k < len(nums) and nums[k] <= m: 
                node = trie
                val = bin(nums[k])[2:].zfill(32)
                for c in val: node = node.setdefault(int(c), {})
                node["#"] = nums[k]
                k += 1
            if trie: 
                node = trie
                val = bin(x)[2:].zfill(32)
                for c in val: node = node.get(1-int(c)) or node.get(int(c))
                ans[i] = x ^ node["#"]
        return ans 
```

**Analysis**
Time complexity `O(NlogN)`
Space complexity `O(N)`

Edited on 12/27/2020
Adding a refactored version below for clarity 
```
class Trie: 
    def __init__(self):
        self.root = {}
        
    def __bool__(self):
        return bool(self.root)
    
    def insert(self, num):
        node = self.root 
        for x in bin(num)[2:].zfill(32): 
            node = node.setdefault(int(x), {})
        node["#"] = num
    
    def query(self, num): 
        node = self.root
        for x in bin(num)[2:].zfill(32):
            node = node.get(1 - int(x)) or node.get(int(x))
        return num ^ node["#"]


class Solution:
    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        nums.sort()
        queries = sorted((m, x, i) for i, (x, m) in enumerate(queries))
        
        ans = [-1]*len(queries)
        k = 0
        trie = Trie()
        for m, x, i in queries: 
            while k < len(nums) and nums[k] <= m: 
                trie.insert(nums[k])
                k += 1
            if trie: ans[i] = trie.query(x)
        return ans 
```
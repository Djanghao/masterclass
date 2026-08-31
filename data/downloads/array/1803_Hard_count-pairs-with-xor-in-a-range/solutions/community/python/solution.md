# Python (Simple Trie)

**Author:** rnotappl
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/3512446/](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/3512446/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.total = 0

class Trie:

    def __init__(self):
        self.dict1 = TrieNode()
    
    def insert(self, num):
        dict2 = self.dict1
        
        for i in range(15,-1,-1):
            bit = (num >> i) & 1
            dict2.children[bit].total += 1
            dict2 = dict2.children[bit]
    
    def count(self, val, high):
        res, dict2 = 0, self.dict1
    
        for i in range(15,-1,-1):
            if not dict2:
                break
                
            bit = (val >> i) & 1
            temp = (high >> i) & 1
            
            if temp:
                res += dict2.children[bit].total
                dict2 = dict2.children[1 - bit]
            else:
                dict2 = dict2.children[bit]
                
        return res
    
class Solution:
    def countPairs(self, nums, low, high):
        trie, total = Trie(), 0
        
        for num in nums:
            total += trie.count(num, high + 1) - trie.count(num, low)
            trie.insert(num)
        
        return total
```
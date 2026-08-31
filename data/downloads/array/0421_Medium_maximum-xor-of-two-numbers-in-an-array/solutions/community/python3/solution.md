# Python 3 | Standard Trie | Explanations

**Author:** idontknoooo
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/849837/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/849837/)

---

### Explanation
- Build a trie first
- For each number `num` in `nums`, try to find number which can generate maximum value with `num` using `XOR`
	- From left to right, take the reverse bit if possble, otherwise take the same bit, e.g.
	- say if the k th bit from left for `num` is `1`, then to make it maximum, we want to take a number whose k th bit is `0` (if possible); if not possible, we take same bit.
- Check comments for more detail
### Implementation
```
class TrieNode:
    def __init__(self):
        self.children = dict()                        # children nodes
        self.val = 0                                  # end value 

class Trie:
    def __init__(self, n):
        self.root = TrieNode()                        # root node
        self.n = n                                    # max length of all numbers
        
    def add_num(self, num):
        node = self.root 
        for shift in range(self.n, -1, -1):           # only shift self.n bits 
            val = 1 if num & (1 << shift) else 0      # verify bit from left to right 
            if val not in node.children:
                node.children[val] = TrieNode()
            node = node.children[val]
        node.val = num
        
class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        max_len = len(bin(max(nums))) - 2             # get max length of all numbers' binary
        trie = Trie(max_len)
        for num in nums: trie.add_num(num)            # build trie
            
        ans = 0
        for num in nums:                              # for each num, find the number which can create max value with num using XOR
            node = trie.root 
            for shift in range(max_len, -1, -1):
                val = 1 if num & (1 << shift) else 0  # verify bit from left to right
                node = node.children[1-val] if 1-val in node.children else node.children[val] # try opposite bit first, otherwise use same bit
            ans = max(ans, num ^ node.val)            # maintain maximum
        return ans    
```
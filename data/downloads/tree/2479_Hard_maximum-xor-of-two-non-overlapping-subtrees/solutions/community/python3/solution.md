# Python Trie solution

**Author:** FransV
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/solutions/4152612/](https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/solutions/4152612/)

---

# Intuition
Subtree sums should be represented in a trie to allow for quick searches.

- First we need to calculate all the subtree sums,
- Second ask for the maximum xor for each tree node, 
- Third ask for the max xor for all the child noded of our current node
- And finally add the tree nodes sums to our trie

This way all the non overlapping subtrees will get compared to each other and none of the overlapping subtrees get compared to each other.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The subtree sums turned out to be very large, so I ended up using 50 lenght binary numbers to represent them. However it would be possible to use a different number there or for example ask for the binary lenght of the largest subtree sum instead. 

If the comments are vague, please let me know in the comments and I can try to elaborate more if needed.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maxXor(self, n: int, edges: List[List[int]], values: List[int]) -> int:
        
        def countSubTreeValues(root, parent):

            for child in adj[root]:
                if child != parent:
                    values[root] += countSubTreeValues(child, root)

            return values[root]

        def findMaxXor(root, parent):

            #Generate binary number of the subtree value
            num = bin(values[root])[2:]
            arr = [0] * (50-len(num)) + list(map(int, num))

            #Find the max xor for current subtree value
            if self.trie:
                trie = self.trie
                temp = []
                for item in arr:
                    if item ^ 1 in trie:
                        temp.append('1')
                        trie = trie[item ^ 1]
                    else:
                        temp.append('0')
                        trie = trie[item]
                self.maxi = max(self.maxi, int(''.join(temp), 2))
            
            #DFS
            for child in adj[root]:
                if child != parent:
                    findMaxXor(child, root)
            
            #Add subtree value to trie
            trie = self.trie
            for item in arr:
                if not item in trie:
                    trie[item] = {}
                trie = trie[item]

        #Build adj
        adj = defaultdict(list)
        for i, j in edges:
            adj[i].append(j)
            adj[j].append(i)

        self.trie = {}
        self.maxi = 0
        countSubTreeValues(0, 0)
        findMaxXor(0, 0)

        return self.maxi
```
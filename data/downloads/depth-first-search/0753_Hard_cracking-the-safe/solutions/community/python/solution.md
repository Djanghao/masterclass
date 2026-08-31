# Fast Python Hierholzer's

**Author:** matt_cochrane1
**Votes:** 7
**Link:** [https://leetcode.com/problems/cracking-the-safe/solutions/1612932/](https://leetcode.com/problems/cracking-the-safe/solutions/1612932/)

---

```python
from itertools import product
from collections import defaultdict

class Solution:
    def crackSafe(self, n: int, k: int) -> str:
        if n == 1:
            return ''.join(map(str, range(k)))
        
        adjlist = defaultdict(list)
		# Use product to create the possible passwords
        for comb in product(range(k), repeat=n):
			# Each node has n-1 digits
			# Eg. if comb was 01001 (where n=4 and k=2)
			# We would add an edge from node 0100 to node 1001
            adjlist[tuple(comb[:-1])].append(tuple(comb[1:]))
        
		# Then we just use Hierholzer's to fine an Euler circuit.
        path = []
        def dfs(node):
            while adjlist[node]:
                dfs(adjlist[node].pop())
            path.append(node[0])
        
		# Want to start from the 0 node which has n-1 zeros.
        dfs(tuple([0]*(n-1)))
        
        # We only add the first digit of each node, so need to add n-2 extra zeros
        # at the end, for the missing digits of the first node.
        return ''.join(map(str, [*reversed(path), *([0]*(n-2))]))
```
# [Python3] binary lifting (dp)

**Author:** ye15
**Votes:** 63
**Link:** [https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/686482/](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/686482/)

---

Algo
For node 0, 1, ..., n-1, we define a matrix `self.dp[][]` whose `i, j`th element indicates the `i`th node's `2^j` parent. Here, `i = 0, 1, ..., n-1` and `j = 0, 1, ..., int(log2(n))`. An important recursive relationship is that 

`self.dp[i][j] = self.dp[self.dp[i][j-1]][j-1]`. 

In other words, `i`th node's `2^j` parent is `i`th node's `2^(j-1)` parent's `2^(j-1)` parent. In this way, lookup is guarenteed to complete in `O(logN)` time. Note that it takes `O(NlogN)` to build `self.dp`. 

Time complexity `O(NlogN)` to pre-processing the tree and `O(logN)` for each equery thereafter. 
```
class TreeAncestor:

    def __init__(self, n: int, parent: List[int]):
        m = 1 + int(log2(n)) #at most 16 for this problem 
        self.dp = [[-1] * m for _ in range(n)] #ith node's 2^j parent
        for j in range(m):
            for i in range(n):
                if j == 0: self.dp[i][0] = parent[i] #2^0 parent
                elif self.dp[i][j-1] != -1: 
                    self.dp[i][j] = self.dp[self.dp[i][j-1]][j-1]
    
    def getKthAncestor(self, node: int, k: int) -> int:
        while k > 0 and node != -1: 
            i = int(log2(k))
            node = self.dp[node][i]
            k -= (1 << i)
        return node 
```
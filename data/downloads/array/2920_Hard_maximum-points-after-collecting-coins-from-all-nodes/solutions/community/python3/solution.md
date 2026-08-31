# ✅ 100% Dynamic Programming

**Author:** vanAmsen
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4222918/](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4222918/)

---

# Intuition

When dealing with tree structures, recursive approaches often come to mind. The tree structure lends itself well to divide and conquer strategies. Here, the main challenge is to determine the maximum points we can get from each node, considering two distinct ways of collecting coins. A dynamic programming approach can help us save calculations and avoid re-computing the maximum points for the same node with the same number of halved ancestors.

## Live Coding & Logic
https://www.youtube.com/watch?v=uoUUClPbQCo

---

# Approach

1. **Construct the Tree**: Create an adjacency list to represent the tree. This will allow us to traverse the tree easily.
2. **Dynamic Programming Table**: We'll use a 2D DP table, where `dp[node][halved]` represents the maximum points from the subtree rooted at `node` when there have been `halved` ancestors that had their coins halved.
3. **DFS with Memoization**: We'll do a DFS starting from the root. For each node, we'll calculate the points we can get using both methods of collecting coins and return the maximum.
    - If we've already calculated the points for a node with a certain number of halved ancestors, we'll retrieve it from our DP table instead of recalculating.
    - To determine which method yields more points for a node, we'll compare the points we get from the two methods. We'll recursively compute the points for the child nodes, considering the effect of the method used on the current node.
  
---

# Complexity

- **Time complexity**: $O(n \	imes 15)$
    - We visit each of the $ n $ nodes at most 15 times (because halving more than 14 times will always result in 0).
  
- **Space complexity**: $O(n \	imes 15)$
    - The DP table will have $ n $ rows and 15 columns, and the tree representation will have at most $ 2(n-1) $ edges.

# Code
``` Python []
class Solution:
    def maximumPoints(self, edges: List[List[int]], coins: List[int], k: int) -> int:
        
        # Creating the adjacency list
        adj = defaultdict(list)
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        
        # 2D array to store results for each node for different values of halved count
        dp = [[-1 for _ in range(15)] for _ in range(len(coins))]
        
        # Post-order traversal to compute maximum points using Bottom-Up DP
        def dfs2(node, parent, halved):
            # Base condition
            if halved >= 15:
                return 0
            
            # If value is already computed, return it
            if dp[node][halved] != -1:
                return dp[node][halved]
            
            # Calculate score if we use Method 1
            method1_score = (coins[node] >> halved) - k
            # Calculate score if we use Method 2
            method2_score = (coins[node] >> (halved + 1))
            
            # Calculate children's contribution for both methods
            for child in adj[node]:
                if child != parent:
                    method1_score += dfs2(child, node, halved)
                    method2_score += dfs2(child, node, halved + 1)
            
            # Store the result in dp array
            dp[node][halved] = max(method1_score, method2_score)
            
            return dp[node][halved]
        
        # Start from root node without any halving
        return dfs2(0, -1, 0)
```
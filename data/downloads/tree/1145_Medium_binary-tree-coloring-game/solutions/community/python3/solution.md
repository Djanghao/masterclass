# Python 3 | DFS | One pass & Three pass | Explanation

**Author:** idontknoooo
**Votes:** 17
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/797574/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/797574/)

---

### Intuition
- When first player chose a node `x`, then there are 3 branches left there for second player to choose (left subtree of `x`, right subtree of `x`, parent end of `x`. 
- For the second player, to ensure a win, we need to make sure that there is one branch that dominate the sum of the other 2 branches. As showed at below.
	- left + right < parent
	- parent + right < left
	- parent + left < right
### Three-pass solution
```
class Solution:
    def btreeGameWinningMove(self, root: TreeNode, n: int, x: int) -> bool:
        first = None
        def count(node):
            nonlocal first
            total = 0
            if node: 
                if node.val == x: first = node
                total += count(node.left) + count(node.right) + 1
            return total
        
        s = count(root) # Get total number of nodes, and x node (first player's choice)
        l = count(first.left) # Number of nodes on left branch 
        r = count(first.right) # Number of nodes on right branch 
        p = s-l-r-1 # Number of nodes on parent branch (anything else other than node, left subtree of node or right subtree of node)
        return l+r < p or l+p < r or r+p < l
```

### One-pass solution
- Once you understand the idea of three-pass solution, it's pretty easy to modify the code to a one-pass solution
```
class Solution:
    def btreeGameWinningMove(self, root: TreeNode, n: int, x: int) -> bool:
        l = r = 0
        def count(node):
            nonlocal l, r
            total = 0
            if node: 
                l_count, r_count = count(node.left), count(node.right)
                if node.val == x: 
                    l, r = l_count, r_count
                total += l_count + r_count + 1
            return total
        s = count(root) 
        p = s-l-r-1 
        return l+r < p or l+p < r or r+p < l
```
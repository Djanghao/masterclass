# A Depth-First Search approch

**Author:** naveen_r_sam
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5173244/](https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5173244/)

---

## Intuition
The goal is to distribute coins in a binary tree such that each node has exactly one coin. The number of moves needed to achieve this is the absolute difference of coins moved from or to each node.

## Approach
1. Use a depth-first search (DFS) approach to traverse the tree.
2. At each node, calculate the excess or deficit of coins.
3. Propagate the excess or deficit up to the parent node while counting the moves.
4. The sum of the absolute values of the excesses or deficits at each node gives the total number of moves.

## Complexity
- **Time complexity:** \\(O(n)\\), where \\(n\\) is the number of nodes in the binary tree. We visit each node exactly once.
- **Space complexity:** \\(O(h)\\), where \\(h\\) is the height of the binary tree. This is due to the recursion stack used in DFS. In the worst case (unbalanced tree), the height can be \\(O(n)\\), but in the best case (balanced tree), it can be \\(O(\\log n)\\).

## Code
```javascript []
var distributeCoins = function (root) {
    let moves = 0;

    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        moves += Math.abs(left) + Math.abs(right);
        return node.val + left + right - 1;
    }

    dfs(root);
    return moves;
};
```
```typescript []
function distributeCoins(root: TreeNode | null): number {
    let moves = 0;

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        moves += Math.abs(left) + Math.abs(right);
        return node.val + left + right - 1;
    }

    dfs(root);
    return moves;
};
```
```Python3 []
class Solution:
    def distributeCoins(self, root: Optional[TreeNode]) -> int:
        moves = 0

        def dfs(node):
            nonlocal moves
            if not node:
                return 0
            left = dfs(node.left)
            right = dfs(node.right)
            moves += abs(left) + abs(right)
            return node.val + left + right - 1

        dfs(root)
        return moves       
```
```Dart []
class Solution {
  int distributeCoins(TreeNode? root) {
    int moves = 0;

    int dfs(TreeNode? node) {
        if (node == null) return 0;
        int left = dfs(node.left);
        int right = dfs(node.right);
        moves += (left.abs() + right.abs());
        return node.val + left + right - 1;
    }

    dfs(root);
    return moves;
  }
}
```
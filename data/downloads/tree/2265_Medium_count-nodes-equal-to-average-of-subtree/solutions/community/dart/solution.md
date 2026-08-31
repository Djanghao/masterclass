# Using dfs

**Author:** jesbin66
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4836006/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4836006/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Using dfs searching in tree and find avaerage

# Complexity
- Time complexity:
O(N) n for numbers of Nodes
- Space complexity:
O(1)

# Code
```
class Solution {
  int res = 0;
  int averageOfSubtree(TreeNode? root) {
    dfs(root);
    return res;
  }
  (int,int) dfs(TreeNode? node) {
    if (node == null) return (0, 0);
    final (int l1,int l2) = dfs(node.left);
    final (int r1,int r2) = dfs(node.right);
    int total = node.val + l1 + r1;
    int counts = 1 + l2 + r2;
    if (total ~/ counts == node.val) res++;
    return (total, counts);
  }
}
```
# BFS, df, easy 3-line solution in Python | Ruby | Go

**Author:** AgentIvan
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3302030/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3302030/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
BFS, Queue
# Approach
<!-- Describe your approach to solving the problem. -->
after first `node == None` all elements of `q` should be `None`
# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(n)$$

# Code
```Python3 []
class Solution:
  def isCompleteTree(self, root: TreeNode | None) -> bool:
    q = [root]
    while node := q.pop(0): q += [node.left, node.right]
    return not any(q)
```
```Ruby []
def is_complete_tree(root)
  q = [root]
  q.push root.left, root.right while root = q.shift
  q.none?
end
```
```Go []
func isCompleteTree(root *TreeNode) bool {
  q := []*TreeNode{}
  for ; root != nil; root, q = q[0], q[1:] {
    q = append(q, root.Left, root.Right)
  }
  for _, root = range q {
    if root != nil { return false }
  }
  return true
}
```
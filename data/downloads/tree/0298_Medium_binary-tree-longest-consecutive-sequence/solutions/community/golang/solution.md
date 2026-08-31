# Depth-First Search (DFS) Using Pre-order Traversal in a Concise Way - C# / Java / Go / Python

**Author:** wlut
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/5767618/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/5767618/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Do DFS using pre-order traversal since we need to pass the parent node's value down to the children.

# Approach
<!-- Describe your approach to solving the problem. -->
Define a DFS method with node, parent's value and current count as arguments. Return the max of the current count and its children's counts to the previous level. 
-- No need to use a global variable for the max. 
-- The null check on root is handled by DFS already.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(h) / O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int LongestConsecutive(TreeNode root) 
    {
        return Dfs(root, root.val, 0);
    }

    private int Dfs(TreeNode node, int pValue, int count)
    {
        if (node == null)
            return count;

        count = 1 + (node.val == pValue + 1 ? count : 0);
        return Math.Max(count, Math.Max(Dfs(node.left, node.val, count), Dfs(node.right, node.val, count)));
    }
}
```
```java []
class Solution {
    public int longestConsecutive(TreeNode root) {
        return dfs(root, root.val, 0);
    }

    private int dfs(TreeNode node, int pValue, int count) {
        if (node == null) {
            return count;
        }

        count = 1 + (node.val == pValue + 1 ? count : 0);
        return Math.max(count, Math.max(dfs(node.left, node.val, count), dfs(node.right, node.val, count)));
    }
}
```
```go []
func longestConsecutive(root *TreeNode) int {
    return dfs(root, root.Val, 0)
}

func dfs(node *TreeNode, pValue, count int) int {
    if node == nil {
        return count
    }

    if node.Val == pValue+1 {
        count++
    } else {
        count = 1
    }

    return max(count, max(dfs(node.Left, node.Val, count), dfs(node.Right, node.Val, count)))
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
```python []
class Solution:
    def longestConsecutive(self, root: Optional[TreeNode]) -> int:
        return self.dfs(root, root.val, 0)

    def dfs(self, node: Optional[TreeNode], pValue: int, count: int) -> int:
        if not node:
            return count

        if node.val == pValue + 1:
            count += 1
        else:
            count = 1
        
        return max(count, self.dfs(node.left, node.val, count), self.dfs(node.right, node.val, count))
```



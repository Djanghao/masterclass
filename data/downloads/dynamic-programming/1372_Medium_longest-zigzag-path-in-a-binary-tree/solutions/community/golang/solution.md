# ✅DFS solution with explanation | C# | Go✅

**Author:** shukhratutaboev
**Votes:** 17
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3432989/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3432989/)

---

My approach is DFS. My `DFS` function takes `TreeNode`(current node), `bool`(direction), `int`(ZigZag count).
We have two options:
1. We continue with direction (if previous was right, we go to left, else we go to right) and increment count. 
2. We coutinue with another direction (if previous was right, we go to right, else we go to left) and reset count.

And we choose maximum from this two options.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(depth)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
C#
```
public class Solution {
    public int LongestZigZag(TreeNode root) {
        return Math.Max(DFS(root.left, true, 0), DFS(root.right, false, 0));
    }

    int DFS(TreeNode node, bool isLeft, int count) {
        if (node == null) {
            return count;
        }

        if (isLeft) {
            return Math.Max(DFS(node.left, true, 0), DFS(node.right, false, count+1));
        }
        return Math.Max(DFS(node.left, true, count+1), DFS(node.right, false, 0));
    }
}
```
Go
```
func longestZigZag(root *TreeNode) int {
	return max(dfs(root.Left, true, 0), dfs(root.Right, false, 0))
}

func dfs(node *TreeNode, isLeft bool, count int) int {
	if node == nil {
		return count
	}

	if isLeft {
		return max(dfs(node.Left, true, 0), dfs(node.Right, false, count+1))
	}

	return max(dfs(node.Left, true, count+1), dfs(node.Right, false, 0))
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)
# Go solution, Easy to understand, One Pass beat 100%

**Author:** sitleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5479986/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5479986/)

---


# Approach
1. Traverses the tree, looking for nodes `p` and `q`. If it finds either, it returns `0`, marking the starting point of the path.
2. Checks if `p` and `q` are in different subtrees of a node and calculates the distance as the sum of the distances from the subtrees to `p` and `q`, including the edges to the current node.
3. The total distance is maintained in a reference variable ans and updated whenever both nodes are found under the same parent.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findDistance(root *TreeNode, p int, q int) (ans int) {
    if p == q {
        return 0
    }
    dfs(root, &ans, p, q)
    return ans
}

func dfs(root *TreeNode, ans *int, p, q int) int {
    if root == nil {
        return -1
    }
    lft := dfs(root.Left, ans, p, q)
    rht := dfs(root.Right, ans, p, q)
    switch v := root.Val; {
    case lft != -1 && rht != -1:
        *ans = lft + rht
    case (lft != -1 || rht != -1) &&
        (v == p || v == q):
        *ans = max(lft, rht)
    case lft != -1, rht != -1:
        return max(lft, rht) + 1
    case v == p, v == q:
        return 1
    }
    return -1
}
```
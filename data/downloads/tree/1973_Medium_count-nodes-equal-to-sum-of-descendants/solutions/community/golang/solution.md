# [golang] Post order traversal

**Author:** hank92
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/2024183/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/2024183/)

---

Nothing special. Just a post order traversal (left, right, root)
Once `traverse` func is back to root, it compares sum of left descendants + sum of right descendants with root.Val. If it is same, increment ans by one. Then return the sum of values for the subtree.

```
func traverse(root *TreeNode, ans *int) int {
    if root == nil {
        return 0
    }
    dSum := traverse(root.Left, ans) + traverse(root.Right, ans)
    if root.Val == dSum {
        *ans += 1 
    }
    return dSum + root.Val
}

func equalToDescendants(root *TreeNode) int {
    var ans int
    traverse(root, &ans)
    return ans
}
```
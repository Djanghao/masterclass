# simplest solution || GoLang

**Author:** SiddarthMP
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4795280/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4795280/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
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
func findBottomLeftValue(root *TreeNode) int {
     result := root.Val
    queue := list.New()
    queue.PushBack(root)

    for queue.Len() > 0 {
        current := queue.Front().Value.(*TreeNode)
        queue.Remove(queue.Front())

        result = current.Val

        if current.Right != nil {
            queue.PushBack(current.Right)
        }
        if current.Left != nil {
            queue.PushBack(current.Left)
        }
    }

    return result
}
```
# [Swift] Solution DFS

**Author:** sairamkotha
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/809261/](https://leetcode.com/problems/sum-of-left-leaves/solutions/809261/)

---

```
final class Solution {
    var leftSum = 0
    
    func sumOfLeftLeaves(_ root: TreeNode?) -> Int {
        leftSumfn(root, false)
        return leftSum
    }
    
    func leftSumfn(_ root: TreeNode?, _ isLeft: Bool) {
        if root == nil {
            return
        }
        if isLeft && root!.left == nil && root!.right == nil {
            leftSum += root!.val
        }
        leftSumfn(root!.left, true)
        leftSumfn(root!.right, false)
    }
}
```
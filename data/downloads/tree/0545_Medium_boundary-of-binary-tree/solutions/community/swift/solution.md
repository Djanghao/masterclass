# Swift || DFS

**Author:** vasiliyfedotov
**Votes:** 1
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/3744761/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/3744761/)

---

# Intuition
Recursively explore tree with DFS. Recalc flags isLeft and isRight on every step, by rules from description. If node has no childs - this is leaf node. If flag isLeft is on - this is left boundary, if isRight == true - right boundary. Don't forget to reverse the array of right boundaries, because of counter-clockwise boundary order.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: **O(N)**, where N is number of nodes.
- Space complexity: **O(N + B)**, where N is number of nodes in tree, B - number of boundary nodes in tree.

# Code
```
class Solution {
    var head: [Int] = []
    var leftB: [Int] = []
    var leafs: [Int] = []
    var rightB: [Int] = []

    func exec(_ root: TreeNode?, _ isLeft: Bool, _ isRight: Bool) {
        guard let root = root else { return }

        if root.left == nil && root.right == nil {
            leafs.append(root.val)
            return 
        }

        if isLeft { leftB.append(root.val) }
        if isRight { rightB.append(root.val) }

        let rightIsLeft = isLeft && (root.left == nil && root.right != nil)
        let leftIsRight = isRight && (root.right == nil && root.left != nil)

        exec(root.left, isLeft, leftIsRight)
        exec(root.right, rightIsLeft, isRight)
    }

    func boundaryOfBinaryTree(_ root: TreeNode?) -> [Int] {
        guard let root = root else { return [] }
        head = [root.val]

        exec(root.left, true, false)
        exec(root.right, false, true)

        rightB.reverse()

        return head + leftB + leafs + rightB
    }
}
```
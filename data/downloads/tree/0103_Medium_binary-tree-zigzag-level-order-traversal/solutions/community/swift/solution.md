# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 13
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/1928001/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/1928001/)

---

```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of nodes.
    //   - space: O(n), where n is the number of nodes.

    func zigzagLevelOrder(_ root: TreeNode?) -> [[Int]] {
        var ans = [[Int]]()
        dfs(root, level: 0, ans: &ans)
        return ans
    }


    private func dfs(_ node: TreeNode?, level: Int, ans: inout [[Int]]) {
        guard let node = node else { return }
        if ans.count <= level { ans.append([Int]()) }

        if level % 2 == 0 {
            ans[level].append(node.val)
        } else {
            ans[level].insert(node.val, at: 0)
        }

        dfs(node.left, level: level + 1, ans: &ans)
        dfs(node.right, level: level + 1, ans: &ans)
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.
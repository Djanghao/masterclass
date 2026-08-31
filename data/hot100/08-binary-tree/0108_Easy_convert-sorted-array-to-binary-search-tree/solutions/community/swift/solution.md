# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 14
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/1928042/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/1928042/)

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
    //   - time: O(n), where n is the length of nums.
    //   - space: O(n), where n is the length of nums.

    func sortedArrayToBST(_ nums: [Int]) -> TreeNode? {
        helper(nums, 0, nums.count - 1)
    }

    
    private func helper(_ nums: [Int], _ lo: Int, _ hi: Int) -> TreeNode? {
        guard lo <= hi else { return nil }

        let mid = lo + (hi - lo) / 2

        let root = TreeNode(nums[mid])
        root.left = helper(nums, lo, mid - 1)
        root.right = helper(nums, mid + 1, hi)

        return root
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.
# Swift - Sliding window

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/5837941/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/5837941/)

---

# Code
```swift []
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
    func closestKValues(_ root: TreeNode?, _ target: Double, _ k: Int) -> [Int] {
        //idea is to do an inorder traversal on the BST to keep the elements inside the window sorted. 
        //Once the window size is reached, check if the new element is better than the first element in the window
        var result = [Int]()
        closestKValuesHelper(root, target, k, &result)
        return result
    }

    func closestKValuesHelper(_ root: TreeNode?, _ target: Double, _ k: Int, _ result: inout [Int]) {
        guard let root = root else { return }

        closestKValuesHelper(root.left, target, k, &result)

        //more of a sliding window
        result.append(root.val)
        if result.count > k {
            //if window size has exceeded, then check the window if current root.val is closer to target than the first element in the list
            if abs(target - Double(root.val)) < abs(target - Double(result[0])) {
                result.removeFirst()
            } else {
                result.removeLast()
            }
        }
        closestKValuesHelper(root.right, target, k, &result)
    }
}
```
# Swift Solution | Simply Traverse The Tree Twice.

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/4430723/](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/4430723/)

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
    func traverse(_ root: TreeNode?, _ storeValues: inout [Int: [Int]], _ level: Int) {
        if root == nil {
            return
        }

        if let value = storeValues[level] {
            storeValues[level]!.append(root!.val)
        } else {
            storeValues[level] = [Int]()
            storeValues[level]!.append(root!.val)
        }

        traverse(root!.left, &storeValues, level + 1)
        traverse(root!.right, &storeValues, level + 1)
    }

    func refillValues(_ root: TreeNode?, _ newRoot: inout TreeNode?, _ storeValues: [Int: [Int]], _ level: Int, _ index: inout [Int: Int]) {
        if root == nil {
            return 
        }

        if level%2 != 0 {
            newRoot!.val = storeValues[level]![index[level]!]
            index[level] = index[level]! + 1

        } else {
            newRoot!.val = root!.val 
        }

        if root!.left != nil {
            newRoot!.left = TreeNode()
        }

        if root!.right != nil {
            newRoot!.right = TreeNode()
        }

        refillValues(root!.left, &newRoot!.left, storeValues, level + 1, &index)
        refillValues(root!.right, &newRoot!.right, storeValues, level + 1, &index)
    }

    func reverseOddLevels(_ root: TreeNode?) -> TreeNode? {
        if root == nil {
            return root
        }

        var storeValues = [Int: [Int]]()
        var storeLevelIndex = [Int: Int]()
        traverse(root, &storeValues, 0)
        
        for (key, value) in storeValues {
            if key%2 != 0 {
                storeValues[key] = value.reversed()
                storeLevelIndex[key] = 0
            }
        }

        // for every level need to have a index....
        // print("dictionary after printing: \\(storeValues)")

        var newRoot: TreeNode? = TreeNode()
        refillValues(root, &newRoot, storeValues, 0, &storeLevelIndex)
        return newRoot
    }
}
```
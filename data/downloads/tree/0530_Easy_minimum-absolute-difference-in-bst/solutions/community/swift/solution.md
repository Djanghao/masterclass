# ✨ Swift: Simple and Efficient Solution with Explanation

**Author:** Chaitali027
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/4176456/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/4176456/)

---

# Intuition
The problem asks for the minimum absolute difference between the values of any two different nodes in a Binary Search Tree (BST). To solve this problem, we need to perform a traversal of the BST and keep track of the previous node's value to calculate the absolute differences. The minimum of these differences will be the answer.

# Approach
1. We start with two variables: `difference` set to `Int.max` (initially, an arbitrarily large value), and `previousNodeValue` set to `nil`. These variables will be used to track the minimum absolute difference and the value of the previously visited node.

2. The `getMinimumDifference` function is the entry point for the problem, where we perform an in-order traversal of the BST and calculate the minimum absolute difference.

3. The `inOrderTraversal` function is a recursive function that takes a node as input and traverses the BST in in-order (left-root-right) fashion.

4. For each node visited during the traversal:
   - If a previous node's value exists (`previousNodeValue` is not `nil`), calculate the absolute difference between the current node's value and the previous node's value and update the `difference` if the calculated difference is smaller.
   - Update the `previousNodeValue` to the current node's value, so it can be used in the next comparison.

5. After the traversal is complete, the `difference` variable will hold the minimum absolute difference, and we return it as the final answer.

# Complexity
- **Time complexity: The time complexity of this solution is O(n)**, where n is the number of nodes in the Binary Search Tree (BST). This is because we perform a single in-order traversal of the BST.
- **Space complexity: The space complexity is O(h)**, where h is the height of the BST. This is due to the space used for the recursive function call stack during the in-order traversal. In the worst case, the BST can be unbalanced, leading to a space complexity of O(n), but for a balanced BST, the space complexity is O(log n).

# Code
```
class Solution {
    var difference = Int.max
    var previousNodeValue: Int?

    func getMinimumDifference(_ root: TreeNode?) -> Int {
        inOrderTraversal(root)
        return difference
    }

    func inOrderTraversal(_ node: TreeNode?) {
        guard let currentNode = node else {
            return
        }

        inOrderTraversal(currentNode.left)

        if let value = previousNodeValue {
            difference = min(difference, abs(currentNode.val - value))
        }
        previousNodeValue = currentNode.val

        inOrderTraversal(currentNode.right)
    }
}
```
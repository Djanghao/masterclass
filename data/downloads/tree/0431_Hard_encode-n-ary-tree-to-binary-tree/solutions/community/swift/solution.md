# Swift O(n) recursive DFS solution

**Author:** raghavbhasin97
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/6116961/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/6116961/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For TreeNode we can only put items on either left or right
Left can be reserved for children and right can be for sublings

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$ 
We can have N recursive stacks in the worst case scenario
 

# Code
```swift []
/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var children: [Node]
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.children = []
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.left = nil
 *         self.right = nil
 *     }
 * }
 */

class Codec {
    func encode(_ root: Node?) -> TreeNode? {
        guard let root else {
            return nil
        }

        // Create the current node
        let treeRoot = TreeNode(root.val)
        // Pick the first child and make it the left most node.
        if root.children.count > 0 {
            treeRoot.left = encode(root.children[0])
        }

        // If we have more children to process.
        if root.children.count < 2 {
            return treeRoot
        }
        // Starting at the left node we just created for first child of root
        // All other children are it's siblings and go on the right.
        var cur = treeRoot.left
        for i in 1..<root.children.count {
            cur?.right = encode(root.children[i])
            cur = cur?.right
        }

        return treeRoot
    }
    
    func decode(_ root: TreeNode?) -> Node? {
       guard let root else {
        return nil
       }

       // Process the root node
       let node = Node(root.val)

       // Start with the left since that will be its first child.
       var cur = root.left
       // Then recursively decode the tree and keep going right til we have exhausted all the siblings.
       while cur != nil {
        if let child = decode(cur) {
            node.children.append(child)
        }
        cur = cur?.right
       }
       return node
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * let obj = Codec()
 * let ret_1: TreeNode? = obj.encode(root)
 * let ret_2: Node? = obj.decode(root)
 */
```